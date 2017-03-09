let fs = require('fs');
let path = require('path');
let cp = require('cp');
let child_process = require('child_process');
let antlr = require('antlr4');

let config = require('../config.js');

module.exports = function(lang_compile_config, lang_runtime_config, callback) {
    let language_key = lang_runtime_config.language.toLowerCase();

    let g4_path = lang_compile_config.grammar_path;
    if (!g4_path) {
        g4_path = path.resolve(__dirname, '..', 'grammars-v4', language_key, lang_compile_config.grammar_file);
    }

    let cache_dir = config.resolve_cache_dir(lang_runtime_config);
    let cache_g4_path = path.resolve(cache_dir, lang_runtime_config.language + '.g4');

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
            lang_compile_config.generate_listener ? '-listener' : '-no-listener',
            lang_compile_config.generate_visitor ? '-visitor' : '-no-visitor',
            '-Dlanguage=JavaScript',
            lang_runtime_config.language + '.g4',
        ];
        let opts = {
            'cwd': cache_dir,
        };

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

    let check_compiled = function(err) {
        if (err) {
            callback_with_error(err);
            return;
        }

        let array_diff = function(a, b) {
            return a.filter(function(i) {return b.indexOf(i) === -1;});
        };

        let parser_classname = lang_runtime_config.language + 'Parser';
        let ParserClass = require(cache_dir + '/' + parser_classname + '.js')[parser_classname];
        let parser = new ParserClass();

        let symbol_rules = parser.symbolicNames.filter(Boolean).map(function(val) {return '.' + val;});
        let parser_rules = parser.ruleNames.concat(symbol_rules);
        let config_rules = Object.keys(lang_runtime_config.rules);

        let config_missing = array_diff(parser_rules, config_rules);
        if (config_missing.length) {
            callback_with_error('Missing rules ' + JSON.stringify(config_missing));
        }

        let config_extra = array_diff(config_rules, parser_rules);
        if (config_extra.length) {
            callback_with_error('Extra rules ' + JSON.stringify(config_extra));
        }

        write_runtime_config_modifier();
    };

    let write_runtime_config_modifier = function(err) {
        if (err) {
            callback_with_error(err);
            return;
        }

        let code = '';
        code += 'module.exports = function(lang_runtime_config) {';

        if (lang_compile_config.tree_matcher_specs) {
            let tree_matcher_generator = require('./tree_matcher_generator.js');
            let tree_matchers = lang_compile_config.tree_matcher_specs.map(tree_matcher_generator);

            code += tree_matchers.map(function(tree_matcher) {
                return 'lang_runtime_config.rules.' + tree_matcher.rule_key + '.finalizers.push(' + tree_matcher.finalizer_code + ');';
            });
        }

        code += '};';

        let modifier_path = path.resolve(cache_dir, 'runtime_config_modifier.js');
        fs.writeFile(modifier_path, code, callback_with_success);
    };

    let callback_with_error = function(msg) {
        callback(new Error('Language ' + JSON.stringify(language_key) + ': ' + msg));
    };
    let callback_with_success = function(err) {
        if (err) {
            callback_with_error(err);
            return;
        }

        callback(undefined, {
            'cache_dir': cache_dir
        });
    }

    check_generated();
};
