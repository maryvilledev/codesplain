let fs = require('fs');
let path = require('path');
let webpack = require('webpack');
let ClosureCompilerPlugin = require('webpack-closure-compiler');


let config = require('./config');
let compile = require('./app/compile');

let langs;
let optimize;

let prepare_lang = function(filename) {
    let lang_name = filename.slice(0, -11);

    if (filename.slice(-11) !== '.compile.js') {return undefined;}
    if (langs && langs.indexOf(lang_name) === -1) {return undefined;}

    return new Promise(function(resolve, reject) {
        let lang_compile_config_path = path.resolve(config.lang_configs_path, lang_name + '.compile.js');
        let lang_runtime_config_path = path.resolve(config.lang_configs_path, lang_name + '.runtime.js');

        let lang_compile_config = require(lang_compile_config_path);
        let lang_runtime_config = require(lang_runtime_config_path);
        compile(lang_compile_config, lang_runtime_config, function(err) {
            if (err) {
                reject(err);
                return;
            }

            let lang_cache_dir = config.resolve_cache_dir(lang_runtime_config);

            resolve({
                'context': __dirname,
                'entry': path.resolve(__dirname, 'app', 'runtime.js'),
                'externals': ['fs'],
                'plugins': [
                    new webpack.DefinePlugin({
                        'LANGUAGE_RUNTIME_CONFIG_PATH': JSON.stringify(lang_runtime_config_path),
                        'LANGUAGE_CACHE_DIR': JSON.stringify(lang_cache_dir),
                    }),
                    optimize ? new ClosureCompilerPlugin({
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
                    'filename': lang_name + (optimize ? '.min.js' : '.js'),
                    'path': path.resolve(__dirname, 'public', 'langs'),
                    'library': 'CodeSplain_parse_' + lang_name,
                    'libraryTarget': 'window',
                },
            });
        });
    });
};

module.exports = function(env) {
    // Read command line options
    langs = env && env.langs ? env.langs.split(',') : undefined;
    optimize = env && env.optimize;

    return new Promise(function(resolve, reject) {
        // First, compile the tree matcher parser
        let lang_compile_config = require('./app/tree_matcher_parser/lang_config.compile.js');
        let lang_runtime_config = require('./app/tree_matcher_parser/lang_config.runtime.js');
        compile(lang_compile_config, lang_runtime_config, function(err) {
            if (err) {
                reject(err);
                return;
            }

            fs.readdir(config.lang_configs_path, function(err, files) {
                let lang_configs = files.map(prepare_lang).filter(Boolean);
                if (lang_configs.length === 0) {
                    console.warn('No languages generated...');
                } else {
                    Promise.all(lang_configs).then(resolve, reject);
                }
            });
        });
    });
};
