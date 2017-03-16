let path = require('path');
let antlr = require('antlr4');
let TerminalNodeImpl = require('antlr4/tree/Tree.js').TerminalNodeImpl;

// LANGUAGE_RUNTIME_CONFIG_PATH is defined in webpack.config.js
let lang_runtime_config = require(LANGUAGE_RUNTIME_CONFIG_PATH);

require(LANGUAGE_CACHE_DIR + '/runtime_config_modifier.js')(lang_runtime_config);

let lexer_classname = lang_runtime_config.language + 'Lexer';
let parser_classname = lang_runtime_config.language + 'Parser';

let LexerClass = require(LANGUAGE_CACHE_DIR + '/' + lexer_classname + '.js')[lexer_classname];
let ParserClass = require(LANGUAGE_CACHE_DIR + '/' + parser_classname + '.js')[parser_classname];
let ErrorListener = require('./error_listener');

module.exports = function(input, error_callback) {
    let chars = new antlr.InputStream(input);
    let lexer = new LexerClass(chars);
    let tokens  = new antlr.CommonTokenStream(lexer);
    let parser = new ParserClass(tokens);
    parser.buildParseTrees = true;

    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorListener(error_callback));

    let tree = parser[lang_runtime_config.entry_rule]();

    let process_node = function(node) {
        if (node instanceof TerminalNodeImpl) {
            return {
                'type': lang_runtime_config.symbol_name_map[node.symbol.type + 2],
                'text': node.symbol.text,
                'begin': node.symbol.start,
                'end': node.symbol.stop + 1,
                'tags': [],
                'children': [],
            };
        } else {
            let ast_node = {
                'type': parser.ruleNames[node.ruleIndex],
                'begin': node.start.start,
                'end': (node.stop ? node.stop : node.start).stop + 1,
                'tags': [],
                'children': node.children ? node.children.map(process_node) : [],
            };

            let opts = lang_runtime_config.rules[ast_node.type];
            opts.finalizers.forEach(function(func) {
                ast_node = func(ast_node);
            });

            return ast_node;
        }
    };

    return process_node(tree);
};

module.exports['finalizers'] = require('./finalizers.js');
module.exports['rules'] = lang_runtime_config.rules;
