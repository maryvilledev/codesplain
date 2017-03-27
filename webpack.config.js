let fs = require('fs');
let path = require('path');
let webpack = require('webpack');
let ClosureCompilerPlugin = require('webpack-closure-compiler');


let config = require('./config');
let compile = require('./app/compile');

let prepare_lang = function(lang_name) {
    return new Promise(function(resolve, reject) {
        let lang_config_path = path.resolve(config.lang_configs_path, lang_name + '.js');
        let lang_config = require(lang_config_path);

        compile(lang_config, function(err, lang_cache_dir) {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                'entry': path.resolve(__dirname, 'app', 'runtime.js'),
                'externals': ['fs'],
                'plugins': [
                    new webpack.DefinePlugin({
                        'LANGUAGE_CONFIG_PATH': JSON.stringify(lang_config_path),
                        'LANGUAGE_CACHE_DIR': JSON.stringify(lang_cache_dir),
                    }),
                    config.optimize ? new ClosureCompilerPlugin({
                        'compiler': {
                            'language_in': 'ECMASCRIPT6',
                            'language_out': 'ECMASCRIPT5',
                            'compilation_level': 'SIMPLE_OPTIMIZATIONS',
                            /*
                            There is a higher compilation level, ADVANCED_OPTIMIZATIONS.
                            Unfortunately, it requires property access by string or key to be consistent.
                            For example, obj.abc = 123; alert(obj['abc']); doesn't work.
                            Antlr does not follow this principle, so as far as I can see, we won't be able to use this level.
                            */
                        },
                        'concurrency': 10,
                    }) : undefined,
                ].filter(Boolean),
                'output': {
                    'filename': lang_name + (config.optimize ? '.min.js' : '.js'),
                    'path': path.resolve(__dirname, 'public', 'langs'),
                    'library': 'Codesplain_parse_' + lang_name,
                    'libraryTarget': config.libraryTarget,
                },
            });
        });
    });
};

module.exports = function(env) {
    config.langs = env && env.langs ? env.langs.split(',') : undefined;
    config.optimize = env && env.optimize;
    config.libraryTarget = (env && env.libraryTarget) || 'var';

    return new Promise(function(resolve, reject) {
        fs.readdir(config.lang_configs_path, function(err, files) {
            let lang_configs = files.map(function(file) {
                let lang = file.slice(0, -3);

                if (file.slice(-3) !== '.js') {return;}
                if (config.langs && config.langs.indexOf(lang) === -1) {return;}

                return prepare_lang(file.slice(0, -3));
            }).filter(Boolean);
            Promise.all(lang_configs).then(resolve, reject);
        });
    });
};
