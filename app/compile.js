let fs = require('fs');
let path = require('path');
let cp = require('cp');
let child_process = require('child_process');
let antlr = require('antlr4');

let config = require('../config');

module.exports = function(lang_config, callback) {
    let language_key = lang_config.language.toLowerCase();
    let g4_path = path.resolve(__dirname, '..', 'grammars-v4', language_key, lang_config.grammar_file);
    let cache_dir = path.resolve(__dirname, '..', '_cache', language_key);
    let cache_g4_path = path.resolve(cache_dir, lang_config.language + '.g4');

    let check_generated = function(err) {
        if (err) {
            callback_with_error(err);
            return;
        }

        fs.stat(cache_dir, function(err, stats) {
            if (err && err.errno === -2) {
                // If directory doesn't exist, create it and start the compilation process
                fs.mkdir(cache_dir, cp_grammar);
            } else if (err) {
                callback_with_error(err);
            } else if (config.always_recompile_antlr) {
                cp_grammar(err);
            } else {
                // If the directory exists, assume that it's filled with the compiled parser and return
                callback_with_success();
            }
        });
    };

    let cp_grammar = function(err) {
        if (err) {
            callback_with_error(err);
            return;
        }

        cp(g4_path, cache_g4_path, compile_parser);
    };

    let compile_parser = function(err) {
        if (err) {
            callback_with_error(err);
            return;
        }

        let cmd = 'java';
        let args = [
            '-Xmx500M',
            '-cp', '../../bin/antlr-4.6-complete.jar',
            'org.antlr.v4.Tool',
            '-long-messages',
            //'-no-listener',
            '-Dlanguage=JavaScript',
            lang_config.language + '.g4',
        ];
        let opts = {
            'cwd': cache_dir,
        };

        console.log(cmd, JSON.stringify(args), JSON.stringify(opts));
        let antlr = child_process.spawn(cmd, args, opts);

        antlr.stdout.on('data', function(data) {
            console.log(data.toString());
        });

        antlr.stderr.on('data', function(data) {
            console.error(data.toString());
        });

        antlr.on('close', function(code) {
            if (code) {
                callback_with_error('Compiler error (returned ' + code + ')');
            } else {
                check_compiled();
            }
        });
    };

    let check_compiled = function() {
        let array_diff = function(a, b) {
            return a.filter(function(i) {return b.indexOf(i) === -1;});
        };

        let parser_classname = lang_config.language + 'Parser';
        let ParserClass = require(cache_dir + '/' + parser_classname + '.js')[parser_classname];
        let parser = new ParserClass();

        let parser_rules = parser.ruleNames;
        let config_rules = Object.keys(lang_config.rules);

        let config_missing = array_diff(parser_rules, config_rules);
        if (config_missing.length) {
            callback_with_error('Missing rules ' + JSON.stringify(config_missing));
        }

        let config_extra = array_diff(config_rules, parser_rules);
        if (config_extra.length) {
            callback_with_error('Extra rules ' + JSON.stringify(config_extra));
        }

        callback_with_success();
    };

    let callback_with_error = function(msg) {
        callback(new Error('Language ' + JSON.stringify(language_key) + ': ' + msg));
    };
    let callback_with_success = function() {
        callback(null, cache_dir);
    }

    check_generated();
};
