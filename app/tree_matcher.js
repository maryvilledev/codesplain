let path = require('path');
let antlr = require('antlr4');
let TerminalNodeImpl = require('antlr4/tree/Tree.js').TerminalNodeImpl;

let tree_matcher_compile_config = require('./tree_matcher_parser/lang_config.compile.js');
let tree_matcher_runtime_config = require('./tree_matcher_parser/lang_config.runtime.js');


let compile_promise;

module.exports = {};

module.exports.make_generator = async function(lang_compile_config, lang_runtime_config) {
    if (!compile_promise) {
        // Compile the tree matcher parser
        let compile = require('./compile.js');
        compile_promise = compile(tree_matcher_compile_config, tree_matcher_runtime_config);
    }

    let compile_result = await compile_promise;

    let lexer_classname = tree_matcher_runtime_config.language + 'Lexer';
    let parser_classname = tree_matcher_runtime_config.language + 'Parser';

    let LexerClass = require(compile_result.cache_dir + '/' + lexer_classname + '.js')[lexer_classname];
    let ParserClass = require(compile_result.cache_dir + '/' + parser_classname + '.js')[parser_classname];
    let ErrorListener = require('./error_listener');

    return function(matcher_spec) {
        let chars = new antlr.InputStream(matcher_spec.pattern);
        let lexer = new LexerClass(chars);
        let tokens  = new antlr.CommonTokenStream(lexer);
        let parser = new ParserClass(tokens);
        parser.buildParseTrees = true;

        let profile_key_type_char = {
            'main': 'm',
            'expr': 'x',
            'node': 'n',
            'mod_type': 'y',
            'mod_terminal': 'r',
            'mod_store': 't',
            'mod_eq_id': 'i',
            'mod_eq_json_string': 'j',
            'mod_child': 'c',
            'mod_children': 'd',
            'child': 'e',
            'search': 's',
        };

        let generate_profiler = true;

        let next_var_id = 1;
        let create_var = function() {
            return '_' + (next_var_id++);
        };

        let make_block = function() {
            let args = Array.prototype.slice.call(arguments);
            args = args.map(function(str) {return str.trim();});
            return '{\n  ' + args.join('\n').replace(/\n/g, '\n  ') + '\n}';
        };

        let make_sorter = function(order) {
            return function(a, b) {
                let a_type = parser.ruleNames[a.ruleIndex];
                let a_index = order.indexOf(a_type);
                if (a_index === -1) {
                    throw new Error('Type ' + a_type + ' does not exist in order ' + JSON.stringify(order));
                }

                let b_type = parser.ruleNames[b.ruleIndex];
                let b_index = order.indexOf(b_type);
                if (b_index === -1) {
                    throw new Error('Type ' + b_type + ' does not exist in order ' + JSON.stringify(order));
                }

                return b_index - a_index;
            };
        }

        let build_tester = function(node, node_var, pass_stmt) {
            let type = parser.ruleNames[node.ruleIndex];
            node.children.forEach(function(child, index) {
                child.profile_key = node.profile_key + profile_key_type_char[type] + index;
            });

            switch (type) {
                case 'main': {
                    return build_tester(node.children[0], node_var, pass_stmt);
                }
                case 'expr': {
                    return node.children.map(function(child) {
                        if (child instanceof TerminalNodeImpl) {
                            return '';
                        } else {
                            return build_tester(child, node_var, pass_stmt);
                        }
                    }).join('');
                }
                case 'atom': {
                    return build_tester(node.children[0], node_var, pass_stmt);
                }
                case 'expr_atom': {
                    return build_tester(node.children[1], node_var, pass_stmt);
                }
                case 'wildcard': {
                    return pass_stmt;
                }
                case 'search': {
                    let descend_var = create_var();
                    let loop_label = create_var();
                    let fail_label = create_var();

                    let res = '';
                    res += 'let ' + descend_var + ' = ' + node_var + ';\n';
                    res += fail_label + ': ' + make_block(
                        loop_label + ': for (;;) ' + make_block(
                            build_tester(node.children[1], descend_var, 'break ' + loop_label + ';'),
                            'if (' + descend_var + '.children.length !== 1) {break ' + fail_label + ';}',
                            descend_var + ' = ' + descend_var + '.children[0];'
                        ),
                        pass_stmt
                    );
                    return res;
                }
                case 'searchable_atom': {
                    return build_tester(node.children[0], node_var, pass_stmt);
                }
                case 'node': {
                    node.children.sort(make_sorter([
                        'mod_type', 'mod_terminal',
                        'mod_eq_id', 'mod_eq_json_string', 'mod_store',
                        'mod_fixed_children', 'mod_fixed_child',
                        'mod_variable_children', 'mod_variable_child',
                    ])).forEach(function(child) {
                        pass_stmt = build_tester(child, node_var, pass_stmt);
                    });
                    return pass_stmt;
                }
                case 'mod_type': {
                    let test_type = node.children[0].symbol.text;
                    let cond = node_var + '.type === ' + JSON.stringify(test_type);
                    return 'if (' + cond + ') ' + make_block(pass_stmt) + '\n';
                }
                case 'mod_terminal': {
                    let test_type = node.children[1].symbol.text;
                    let cond = node_var + '.type === ' + JSON.stringify('.' + test_type);
                    return 'if (' + cond + ') ' + make_block(pass_stmt) + '\n';
                }
                case 'mod_store': {
                    let store_key = node.children[1].symbol.text;
                    return 'sn.' + store_key + ' = ' + node_var + ';\n' + pass_stmt;
                }
                case 'mod_eq_id': {
                    let test_text = node.children[1].symbol.text;
                    let cond = node_var + '.text === ' + JSON.stringify(test_text);
                    return 'if (' + cond + ') ' + make_block(pass_stmt);
                }
                case 'mod_eq_json_string': {
                    let test_text = JSON.parse(node.children[1].symbol.text);
                    let cond = node_var + '.text === ' + JSON.stringify(test_text);
                    return 'if (' + cond + ') ' + make_block(pass_stmt);
                }
                case 'mod_fixed_children': {
                    let child_index = 0;
                    node.children[1].children.forEach(function(child) {
                        if (child instanceof TerminalNodeImpl) {
                            return '';
                        } else {
                            let child_var = create_var();
                            let new_stmt = '';
                            new_stmt += 'let ' + child_var + ' = ' + node_var + '.children[' + (child_index++) + '];\n';
                            new_stmt += build_tester(child, child_var, pass_stmt);
                            pass_stmt = new_stmt;
                        }
                    });
                    return 'if (' + node_var + '.children.length === ' + child_index + ') ' + make_block(pass_stmt);
                }
                case 'mod_fixed_child': {
                    let child_var = create_var();
                    let new_stmt = '';
                    new_stmt += 'let ' + child_var + ' = ' + node_var + '.children[0];\n';
                    new_stmt += build_tester(child, child_var, pass_stmt);
                    return 'if (' + node_var + '.children.length === 1) ' + make_block(new_stmt);
                }
                case 'mod_variable_children': {
                    throw new Error('Not implemented yet');
                }
                case 'mod_variable_child': {
                    throw new Error('Not implemented yet');
                }
                default: {
                    throw new Error('Unexpected node type ' + type);
                }
            }
        };

        let tree = parser[tree_matcher_runtime_config.entry_rule]();
        tree.profile_key = '';

        let root_var = create_var();
        let code = 'function(' + root_var + ') ' + make_block(
            'let sn = {"root": ' + root_var + '};',
            'let actor = ' + matcher_spec.actor.toString() + ';',
            build_tester(tree, root_var, 'actor(sn);'),
            'return sn.root;'
        );

        return {
            'rule_key': 'for_stmt',
            'finalizer_code': code,
        };
    };
};
