let fs = require('fs-promise');
let path = require('path');
let webpack = require('webpack');
let ClosureCompilerPlugin = require('webpack-closure-compiler');


let config = require('./config.js');
let compile = require('./app/compile.js');

let langs;
let optimize;
let libraryTarget;

// Filter the files that should be compiled
let filter_lang = function(filename) {
    // Get the language name
    let lang_name = filename.slice(0, -11);

    // Make sure the filename ends with ".compile.js"
    if (filename.slice(-11) !== '.compile.js') {return false;}

    // Make sure either:
    //   1. The env.langs variable is not set (meaning compile all languages), or:
    //   2. The env.langs variable is set, and this language name is contained in it.
    // If both of these fail, then don't compile this language.
    if (langs && langs.indexOf(lang_name) === -1) {return false;}

    // Otherwise compile it!
    return true;
};

let prepare_lang = async function(filename) {
    // Get the language name again (same as above)
    let lang_name = filename.slice(0, -11);

    // Load the language config files
    let lang_compile_config_path = path.resolve(config.lang_configs_path, lang_name + '.compile.js');
    let lang_runtime_config_path = path.resolve(config.lang_configs_path, lang_name + '.runtime.js');
    let lang_compile_config = require(lang_compile_config_path);
    let lang_runtime_config = require(lang_runtime_config_path);

    // Compile it!
    // This does a few things:
    //   1. Runs the antlr compiler that generates a javascript lexer and parser
    //   2. Runs the tree matcher compiler that generates tree matchers.
    let compile_result = await compile(lang_compile_config, lang_runtime_config);

    // Return an object that will be used by webpack to compile the parser.
    return {
        // I don't know
        'context': __dirname,

        // The file to compile. All other files are included in this file or in files included from this file.
        'entry': path.resolve(__dirname, 'app', 'runtime.js'),

        'resolve': {
            'alias': {
                'app': path.resolve(__dirname, 'app'),
                'lang_runtime_config$': lang_runtime_config_path,
                'lang_cache': compile_result.cache_dir,
            }
        },

        // Tell webpack that fs will be external so it doesn't complain.
        'externals': ['fs'],

        'plugins': [
            // Run the Google Closure Compiler if env.optimize is set
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
            // The output filename
            'filename': lang_name + (optimize ? '.min.js' : '.js'),

            // The output directory
            'path': path.resolve(__dirname, 'public', 'langs'),

            // How to export the parser library
            //   commonjs2 - Use module.exports
            //   window - Add an entry to the global window variable
            //   var - Add a local variable declared with "var"
            'libraryTarget': libraryTarget,

            // When libraryTarget is "window" or "var", the window key or variable name will be this value
            'library': 'Codesplain_parse_' + lang_name,
        },
    };
};

module.exports = async function(env) {
    // Read command line options
    langs = env && env.langs ? env.langs.split(',') : undefined;
    optimize = Boolean(env && parseInt(env.optimize));
    libraryTarget = (env && env.libraryTarget) || 'var';
    global.enable_debug = Boolean(env && parseInt(env.enable_debug));

    // Then, find language configuration files
    let files = await fs.readdir(config.lang_configs_path);

    // Filter langs and compile them.
    // Prepare_lang returns a promise, so after this step we have an array of promises.
    let lang_configs = files.filter(filter_lang).map(prepare_lang);

    if (lang_configs.length === 0) {
        // If no languages were compiled, warn the user.
        console.warn('No languages generated...');
    } else {
        // Otherwise, return a promise that resolves when all of the language promises resolve.
        return Promise.all(lang_configs);
    }
};
