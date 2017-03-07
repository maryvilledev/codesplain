let antlr = require('antlr4');

let lang_config = require('./tree_matcher_parser/lang_config.js');

let lexer_classname = lang_config.language + 'Lexer';
let parser_classname = lang_config.language + 'Parser';
let listener_classname = lang_config.language + 'Listener';

let LexerClass = require(TREE_MATCHER_CACHE_DIR + '/' + lexer_classname + '.js')[lexer_classname];
let ParserClass = require(TREE_MATCHER_CACHE_DIR + '/' + parser_classname + '.js')[parser_classname];
let ErrorListener = require('./error_listener');
let GeneratorListener = require('./tree_matcher_parser/generator_listener.js');

module.exports = function(matcher_config) {
    let chars = new antlr.InputStream(matcher_config.pattern);
    let lexer = new LexerClass(chars);
    let tokens  = new antlr.CommonTokenStream(lexer);
    let parser = new ParserClass(tokens);
    parser.buildParseTrees = true;

    let tree = parser[lang_config.entry_rule]();
    let generator = new GeneratorListener(matcher_config.profile_data);
    let res = antlr4.tree.ParseTreeWalker.DEFAULT.walk(generator, tree);

    // matcher_config.actor

    console.log(res);

    return res;
};
