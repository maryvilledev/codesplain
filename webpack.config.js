let fs = require('fs-promise');
let path = require('path');
let webpack = require('webpack');
let ClosureCompilerPlugin = require('webpack-closure-compiler');


let config = require('./config.js');
let compile = require('./app/compile.js');

let langs;
let optimize;

let filter_lang = function(filename) {
    let lang_name = filename.slice(0, -11);

    if (filename.slice(-11) !== '.compile.js') {return false;}
    if (langs && langs.indexOf(lang_name) === -1) {return false;}

    return true;
};

let prepare_lang = async function(filename) {
    let lang_name = filename.slice(0, -11);

    let lang_compile_config_path = path.resolve(config.lang_configs_path, lang_name + '.compile.js');
    let lang_runtime_config_path = path.resolve(config.lang_configs_path, lang_name + '.runtime.js');

    let lang_compile_config = require(lang_compile_config_path);
    let lang_runtime_config = require(lang_runtime_config_path);

    let compile_result = await compile(lang_compile_config, lang_runtime_config);

    return {
        'context': __dirname,
        'entry': path.resolve(__dirname, 'app', 'runtime.js'),
        'externals': ['fs'],
        'plugins': [
            new webpack.DefinePlugin({
                'LANGUAGE_RUNTIME_CONFIG_PATH': JSON.stringify(lang_runtime_config_path),
                'LANGUAGE_CACHE_DIR': JSON.stringify(compile_result.cache_dir),
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
            'libraryTarget': 'commonjs2',
        },
    };
};

module.exports = async function(env) {
    // Read command line options
    langs = env && env.langs ? env.langs.split(',') : undefined;
    optimize = env && env.optimize;

    // Then, find language configuration files
    let files = await fs.readdir(config.lang_configs_path);

    let lang_configs = files.filter(filter_lang).map(prepare_lang);
    if (lang_configs.length === 0) {
        console.warn('No languages generated...');
    } else {
        return Promise.all(lang_configs);
    }
};
