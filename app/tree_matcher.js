let path = require('path');
let antlr = require('antlr4');

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

        let tree = parser[tree_matcher_runtime_config.entry_rule]();

        matcher_spec.profile_data = {
            '0': 0.25,
            '0.0': 0.01,
            '0.1.0': 0,
            '0.1.0.0': 0,
            '0.1.0.0.0': 0.25,
            '0.2': 0,
        };

        let generate_profiler = true;

        console.log(tree.getText());
        return {
            'rule_key': 'for_stmt',
            'finalizer_code': 'function(node) {abc: {let a = 123; break abc; console.log("abc");} console.log("after");}',
        };

        let next_id = 1;
        let get_var = function(node) {
            if (typeof node.var_name !== 'string') {
                node.var_name = 'n_' + (next_id++);
            }
            return node.var_name;
        };

        let make_test = function(expr, ) {

        };

        let sort_tests = function(tests) {
        };

        let build_test_list = function(node, fail_stmt) {
            let type = parser.ruleNames[node.ruleIndex];
            switch (type) {
            case 'main': {
                build_test_list(node.children[0]);
            }
            case 'expr': {
                let res = '';
                for (let i = 0; i < node.children.length; i += 2) {
                    let tests = build_test_list(node.children[i]);
                    sort_tests(tests)
                }
            }

/*
            case 'node':
                return '??';
*/
            case 'mod_type': {
                let test_type = node.children[0].symbol.text;
                create_test();
                tests.push({
                    'cost':
                })
                return node_var + '.type === ' + JSON.stringify(test_type);
            }
            case 'mod_terminal': {
                let test_type = node.children[1].symbol.text;
                return node_var + '.type === ' + JSON.stringify('.' + test_type);
            }
            case 'mod_store': {
                let store_key = node.children[1].symbol.text;
                return 'nodes.' + store_key + ' = ' + node_var + ';\n';
            }
            case 'mod_eq_id': {
                let test_text = node.children[1].symbol.text;
                return 'if (' + node_var + '.symbol.text !== ' + JSON.stringify(test_text) + ') {return false;}\n';
            }
            case 'mod_eq_json_string': {
                let test_text = JSON.parse(node.children[1].symbol.text);
                return 'if (' + node_var + '.symbol.text !== ' + JSON.stringify(test_text) + ') {return false;}\n';
            }
            case 'mod_child': {
                return '??';
            }
/*
            case 'mod_children':
                return '??';

            case 'child':
                return '??';

            case 'node_search':
                return '??';

            case '.WS':
                return '??';

            case '.IDENTIFIER':
                return '??';

            case '.JSON_STRING':
                return '??';
*/

            default:
                if (node.children) {
                    node.children.forEach(build_test_list);
                }
            }
            /*
            if (node instanceof TerminalNodeImpl) {
                console.log(node);
                return {
                    'type': '.' + parser.symbolicNames[node.symbol.type],
                    'begin': node.start.start,
                    'end': (node.stop ? node.stop : node.start).stop + 1,
                    'children': [],
                };
            } else {
                let ast = {
                    'type': parser.ruleNames[node.ruleIndex],
                    'begin': node.start.start,
                    'end': (node.stop ? node.stop : node.start).stop + 1,
                    'children': node.children ? node.children.map(process_node).filter(Boolean) : [],
                };

                let opts = tree_matcher_runtime_config.rules[ast.type];
                opts.finalizers.forEach(function(func) {
                    ast = func(ast);
                });

                return ast;
            }
            */
        };

        build_test_list(tree);

        let code = 'function(_1) {'

        return {
            'rule_key': 'for_stmt',
            'finalizer_code': code,
        };
    };
};
