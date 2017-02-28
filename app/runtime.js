let antlr = require('antlr4');

// LANGUAGE_CONFIG_PATH and LANGUAGE_CACHE_DIR are defined in webpack.config.js
let lang_config = require(LANGUAGE_CONFIG_PATH);

let lexer_classname = lang_config.language + 'Lexer';
let parser_classname = lang_config.language + 'Parser';

let LexerClass = require(LANGUAGE_CACHE_DIR + '/' + lexer_classname + '.js')[lexer_classname];
let ParserClass = require(LANGUAGE_CACHE_DIR + '/' + parser_classname + '.js')[parser_classname];
let ErrorListener = require('./error_listener');

let TerminalNodeImpl = require('antlr4/tree/Tree.js').TerminalNodeImpl;

module.exports = function(input) {
    let chars = new antlr.InputStream(input);
    let lexer = new LexerClass(chars);
    let tokens  = new antlr.CommonTokenStream(lexer);
    let parser = new ParserClass(tokens);
    parser.buildParseTrees = true;

    let error_callback = function() {
        console.error(arguments);
    }

    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorListener(error_callback));

    let tree = parser[lang_config.entry_rule]();

    let process_node = function(node) {
        if (node instanceof TerminalNodeImpl) {
            return parser.symbolicNames[node.symbol.type];
        } else {
            let ast = {
                'type': parser.ruleNames[node.ruleIndex],
                'begin': node.start.start,
                'end': (node.stop ? node.stop : node.start).stop + 1,
                'children': node.children ? node.children.map(process_node).filter(Boolean) : [],
            };

            let opts = lang_config.rules[ast.type];
            opts.finalizers.forEach(function(func) {
                ast = func(ast);
            });

            return ast;
        }
    };

    return process_node(tree);
};
