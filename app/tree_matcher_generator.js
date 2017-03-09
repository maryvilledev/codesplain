let antlr = require('antlr4');

let lang_runtime_config = require('./tree_matcher_parser/lang_config.runtime.js');

let lexer_classname = lang_runtime_config.language + 'Lexer';
let parser_classname = lang_runtime_config.language + 'Parser';

let LexerClass = require(lang_runtime_config.cache_dir + '/' + lexer_classname + '.js')[lexer_classname];
let ParserClass = require(lang_runtime_config.cache_dir + '/' + parser_classname + '.js')[parser_classname];

let ErrorListener = require('./error_listener');
let GeneratorListener = require('./tree_matcher_parser/generator_listener.js')

module.exports = function(matcher_spec) {
    let chars = new antlr.InputStream(matcher_spec.pattern);
    let lexer = new LexerClass(chars);
    let tokens  = new antlr.CommonTokenStream(lexer);
    let parser = new ParserClass(tokens);
    parser.buildParseTrees = true;

    let tree = parser[lang_runtime_config.entry_rule]();
    let generator = new GeneratorListener(matcher_spec.profile_data);
    //let res = antlr.tree.ParseTreeWalker.DEFAULT.walk(generator, tree);

    // matcher_spec.actor

    //console.log(tree);

    return tree;
};
