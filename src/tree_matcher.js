let path = require('path');
let antlr = require('antlr4');
let TerminalNodeImpl = require('antlr4/tree/Tree.js').TerminalNodeImpl;

let tree_matcher_compile_config = require('./tree_matcher_parser/lang_config.compile.js');
let tree_matcher_runtime_config = require('./tree_matcher_parser/lang_config.runtime.js');


let compile_promise;

module.exports = {};

module.exports.make_generator = async function(lang_compile_config, lang_runtime_config) {
    // Compile the tree matcher if it's not being done already
    if (!compile_promise) {
        // Compile the tree matcher parser
        let compile = require('./compile.js');
        compile_promise = compile(tree_matcher_compile_config, tree_matcher_runtime_config);
    }

    // Wait for the tree matcher lexer and parser to be compiled
    let compile_result = await compile_promise;

    // Require them
    let lexer_classname = tree_matcher_runtime_config.language + 'Lexer';
    let parser_classname = tree_matcher_runtime_config.language + 'Parser';

    let LexerClass = require(compile_result.build_dir + '/' + lexer_classname + '.js')[lexer_classname];
    let ParserClass = require(compile_result.build_dir + '/' + parser_classname + '.js')[parser_classname];
    let ErrorListener = require('./error_listener');

    // For use later, when the tree matcher is optimized
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
    const generate_profiler = true;

    // This function takes a matcher specification and returns a function that takes a node,
    //   and runs the actor if the node matches the specification pattern.
    return function(matcher_spec) {

        // Take the string of a matcher specification pattern, and generate a stream of tokens using the antlr lexer.
        let chars = new antlr.InputStream(matcher_spec.pattern);
        let lexer = new LexerClass(chars);
        let tokens  = new antlr.CommonTokenStream(lexer);

        // Take the stream of tokens, and create a parser class using the antlr parser.
        // Doesn't execute it yet.
        let parser = new ParserClass(tokens);
        parser.buildParseTrees = true;

        // Define a function that generates unique variable names.
        let next_var_id = 1;
        let create_var = function() {
            return '_' + (next_var_id++).toString(36);
        };

        // Define a function that pretty-prints a javascript block
        let make_block = function() {
            let args = Array.prototype.slice.call(arguments);
            args = args.map(function(str) {return str.trim();}).filter(Boolean);
            return '{\n  ' + args.join('\n').replace(/\n/g, '\n  ') + '\n}';
        };

        // Define a function that makes a javascript if statement.
        let make_if = function(cond, then) {
            return 'if (' + cond + ') ' + make_block(then);
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
        };

        // This function creates a javascript statement that tests if a canidate node passes.
        // If the canidate node passes, pass_stmt is executed.
        // If the canidate node fails, control must exit the returned statement, so any appended statements will be executed.
        // node is the TreeMatcher ast node that's currently being processed. This is NOT the canidate node.
        // node_var is a string containing the javascript variable that the canidate node is stored in.
        // pass_stmt is a string containing the code to be executed if the canidate node passes the current test.
        let build_tester = function(node, node_var, pass_stmt) {
            // Get the tree matcher node type.
            let type = parser.ruleNames[node.ruleIndex];

            // Write profile keys to child nodes.
            node.children.forEach(function(child, index) {
                child.profile_key = node.profile_key + profile_key_type_char[type] + index;
            });

            // Return some test based on the tree matcher node type
            switch (type) {
                case 'node': {
                    node.children.sort(make_sorter([
                        'mod_type', 'mod_terminal',
                        'mod_eq_id', 'mod_eq_json_string',
                        'mod_cond',
                        'mod_store',
                        'mod_fixed_children', 'mod_fixed_child',
                        'mod_variable_children', 'mod_variable_child',
                    ])).forEach(function(child) {
                        pass_stmt = build_tester(child, node_var, pass_stmt);
                    });
                    return pass_stmt;
                }
                case 'mod_type': {
                    let test_type = node.children[0].symbol.text;
                    if (!lang_runtime_config.rules.hasOwnProperty(test_type)) {
                        throw new Error('Type ' + JSON.stringify(test_type) + ' is not a valid language node type');
                    }
                    let cond = node_var + '.type === ' + JSON.stringify(test_type);
                    return make_if(cond, pass_stmt);
                }
                case 'mod_terminal': {
                    let test_type = '.' + node.children[1].symbol.text;
                    if (!lang_runtime_config.rules.hasOwnProperty(test_type)) {
                        throw new Error('Type ' + JSON.stringify(test_type) + ' is not a valid language node type');
                    }
                    let cond = node_var + '.type === ' + JSON.stringify(test_type);
                    return make_if(cond, pass_stmt);
                }
                case 'mod_wildcard': {
                    return pass_stmt;
                }
                case 'mod_store': {
                    let store_key = node.children[1].symbol.text;
                    // The declaration with "var" is intentional.
                    // This will be hoisted to the top of the testing function, so the variable will be available to the actor function.
                    return 'var ' + store_key + ' = ' + node_var + ';\n' + pass_stmt;
                }
                case 'mod_eq_id': {
                    let test_text = node.children[1].symbol.text;
                    let cond = node_var + '.text === ' + JSON.stringify(test_text);
                    return make_if(cond, pass_stmt);
                }
                case 'mod_eq_json_string': {
                    let test_text = JSON.parse(node.children[1].symbol.text);
                    let cond = node_var + '.text === ' + JSON.stringify(test_text);
                    return make_if(cond, pass_stmt);
                }
                case 'mod_cond': {
                    let cond = JSON.parse(node.children[1].symbol.text);
                    return make_block(
                        'let node = ' + node_var + ';',
                        make_if(cond, pass_stmt)
                    );
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
                    let cond = node_var + '.children.length === ' + child_index;
                    return make_if(cond, pass_stmt);
                }
                case 'mod_fixed_child': {
                    let child_var = create_var();
                    let new_stmt = '';
                    new_stmt += 'let ' + child_var + ' = ' + node_var + '.children[0];\n';
                    new_stmt += build_tester(node.children[0], child_var, pass_stmt);
                    let cond = node_var + '.children.length === 1';
                    return make_if(cond, new_stmt);
                }
                case 'mod_variable_children': {
                    throw new Error('Not implemented yet');
                }
                case 'mod_variable_child': {
                    throw new Error('Not implemented yet');
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
                case 'search': {
                    let descend_var = create_var();
                    let loop_label = create_var();
                    let fail_label = create_var();

                    let res = '';
                    res += 'let ' + descend_var + ' = ' + node_var + ';\n';
                    res += fail_label + ': ' + make_block(
                        loop_label + ': for (;;) ' + make_block(
                            build_tester(node.children[1], descend_var, 'break ' + loop_label + ';'),
                            make_if(descend_var + '.children.length !== 1', 'break ' + fail_label + ';'),
                            descend_var + ' = ' + descend_var + '.children[0];'
                        ),
                        pass_stmt
                    );
                    return res;
                }
                case 'searchable_atom': {
                    return build_tester(node.children[0], node_var, pass_stmt);
                }
                default: {
                    throw new Error('Unexpected treematcher node type ' + JSON.stringify(type));
                }
            }
        };

        let tree = parser[tree_matcher_runtime_config.entry_rule]();
        tree.profile_key = '';

        let actor_var = create_var();

        let defs = typeof matcher_spec.defines === 'object' ? matcher_spec.defines : {};
        defs[actor_var] = matcher_spec.actor;

        let define_stmts = [];
        for (let def_var in defs) {
            define_stmts.push('let ' + def_var + ' = ' + defs[def_var].toString() + ';');
        }

        return make_block(
            define_stmts.join('\n'),
            build_tester(tree, 'root', actor_var + '.call(this);')
        );
    };
};
