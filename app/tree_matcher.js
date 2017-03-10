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

        /*
        %matcher -- An array of TreeMatcher child nodes. Children should not be accessed, only be passed to %descend.
        %ast_node -- The current node in the AST.
        %descend -- A function that takes two arguments: (matcher_child_node, ast_child_node).
        %reject -- A function that takes zero arguments. Causes the matcher to terminate, and the actor will not be run.
        */

        let node_map = {
            'main': '%descend(%matcher[0], )',
            'node': '',
            'mod_type': '',
            'mod_terminal': '',
            'mod_store': '',
            'mod_eq_id': '',
            'mod_eq_json_string': '',
            'mod_child': '',
            'mod_children': '',
            'child': '',
            'node_search': '',
            '.WS': '',
            '.IDENTIFIER': '',
            '.JSON_STRING': '',
        };

        let build_finalizer = function(node, node_var) {
            let type = parser.ruleNames[node.ruleIndex];
            switch (type) {
            case 'main':
                return build_finalizer(node.children[0]);
/*
            case 'node':
                return '??';
*/
            case 'mod_type': {
                let test_type = node.children[0].symbol.text;
                return 'if (' + node_var + '.type !== ' + JSON.stringify(test_type) + ') {return false;}\n';
            }
            case 'mod_terminal': {
                let test_type = node.children[1].symbol.text;
                return 'if (' + node_var + '.type !== ' + JSON.stringify('.' + test_type) + ') {return false;}\n';
            }
            case 'mod_store': {
                let node_key = node.children[1].symbol.text;
                return 'nodes.' + node_key + ' = ' + node_var + ';\n';
            }
            case 'mod_eq_id': {
                // Working here
            }
            case 'mod_eq_json_string': {
                // Working here
            }
/*
            case 'mod_child':
                return '??';

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
                    node.children.map(build_finalizer);
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

        return {
            'rule_key': 'for_stmt',
            'finalizer_code': build_finalizer(tree),
        };
    };
};
