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
            callback(err);
            return;
        }

        fs.stat(cache_dir, function(err, stats) {
            if (err && err.errno === -2) {
                // If directory doesn't exist, create it and start the compilation process
                fs.mkdir(cache_dir, cp_grammar);
            } else if (config.always_recompile_antlr) {
                cp_grammar(err);
            } else {
                // If the directory exists, assume that it's filled with the compiled parser and return
                callback(err, cache_dir);
            }
        });
    };

    let cp_grammar = function(err) {
        if (err) {
            callback(err);
            return;
        }

        cp(g4_path, cache_g4_path, compile_parser);
    };

    let compile_parser = function(err) {
        if (err) {
            callback(err);
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
                callback(new Error('Compiler error (returned ' + code + ')'), cache_dir);
            } else {
                callback(null, cache_dir);
            }
        });
    };

    check_generated();
};
