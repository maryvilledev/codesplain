let antlr = require('antlr4');

// LANGUAGE_CONFIG_PATH and LANGUAGE_CACHE_DIR are defined in webpack.config.js
let lang_config = require(LANGUAGE_CONFIG_PATH);

let lexer_classname = lang_config.language + 'Lexer';
let parser_classname = lang_config.language + 'Parser';
let listener_classname = lang_config.language + 'Listener';

let LexerClass = require(LANGUAGE_CACHE_DIR + '/' + lexer_classname + '.js')[lexer_classname];
let ParserClass = require(LANGUAGE_CACHE_DIR + '/' + parser_classname + '.js')[parser_classname];
let ListenerBase = require(LANGUAGE_CACHE_DIR + '/' + listener_classname + '.js')[listener_classname];
let ErrorListener = require('./error_listener');

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

    let Listener = function() {
        ListenerBase.call(this);
        return this;
    };
    Listener.prototype = Object.create(ListenerBase.prototype);
    Listener.prototype.constructor = Listener;

    let ast_root;

    parser.ruleNames.forEach(function(rule_name) {
        let capitalized = rule_name.charAt(0).toUpperCase() + rule_name.slice(1);

        if (typeof ListenerBase.prototype['enter' + capitalized] !== 'function') {
            throw new Error('ListenerBase does not have an entry listener for rule ' + JSON.stringify(rule_name));
        }
        if (typeof ListenerBase.prototype['exit' + capitalized] !== 'function') {
            throw new Error('ListenerBase does not have an exit listener for rule ' + JSON.stringify(rule_name));
        }
        if (typeof lang_config.rules[rule_name] !== 'object') {
            throw new Error('There is not a rule options entry for ' + JSON.stringify(rule_name));
        }

        let opts = lang_config.rules[rule_name];
        opts._accessed = true;

        Listener.prototype['enter' + capitalized] = function(ctx) {
            ctx.ast = {
                'type': rule_name,
                'begin': ctx.start.start,
                'end': ctx.stop.stop + 1,
                'children': [],
            };
        };
        Listener.prototype['exit' + capitalized] = function(ctx) {
            let final = ctx.ast;
            opts.finalizers.forEach(function(func) {
                final = func(final);
            });

            if (ctx.parentCtx) {
                if (final) {
                    ctx.parentCtx.ast.children.push(final);
                }
            } else {
                ast_root = final;
            }
        };
    });

    for (var rule_name in lang_config.rules) {
        if (!lang_config.rules[rule_name]._accessed) {
            throw new Error('Rule options entry ' + JSON.stringify(rule_name) + ' was never accessed');
        }
    }

    antlr.tree.ParseTreeWalker.DEFAULT.walk(new Listener(), tree);

    return ast_root;
};
