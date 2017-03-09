let path = require('path');
let antlr = require('antlr4');

let lang_runtime_config = require('./tree_matcher_parser/lang_config.runtime.js');

let config = require('../config.js');
let cache_dir = config.resolve_cache_dir(lang_runtime_config);

let lexer_classname = lang_runtime_config.language + 'Lexer';
let parser_classname = lang_runtime_config.language + 'Parser';

let LexerClass = require(cache_dir + '/' + lexer_classname + '.js')[lexer_classname];
let ParserClass = require(cache_dir + '/' + parser_classname + '.js')[parser_classname];
let ErrorListener = require('./error_listener');

module.exports = function(matcher_spec) {
    let chars = new antlr.InputStream(matcher_spec.pattern);
    let lexer = new LexerClass(chars);
    let tokens  = new antlr.CommonTokenStream(lexer);
    let parser = new ParserClass(tokens);
    parser.buildParseTrees = true;

    let tree = parser[lang_runtime_config.entry_rule]();

    let node_map = {
        'node_search': 'while (! %children[0]) {}',
    };

    let build_finalizer = function(node) {
        let type = parser.ruleNames[node.ruleIndex];
        switch (type) {

        }
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

            let opts = lang_runtime_config.rules[ast.type];
            opts.finalizers.forEach(function(func) {
                ast = func(ast);
            });

            return ast;
        }
    };

    return {
        'rule_key': 'for_stmt',
        'finalizer_code': build_finalizer(tree),
    };
};
