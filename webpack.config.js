const fs = require('fs-promise');
const path = require('path');
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

const config = require('./config.js');
const compile = require('./src/compile.js');

let langs;
let optimize;
let libraryTarget;
let outputPath;

// Filter the files that should be compiled
const filter_lang = function(filename) {
    // Get the language name
    const lang_name = filename.slice(0, -11);

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

const prepare_lang = async function(filename) {
    // Get the language name again (same as above)
    const lang_name = filename.slice(0, -11);

    // Load the language config files
    const lang_compile_config_path = path.resolve(config.lang_configs_path, lang_name + '.compile.js');
    const lang_runtime_config_path = path.resolve(config.lang_configs_path, lang_name + '.runtime.js');
    const lang_compile_config = require(lang_compile_config_path);
    const lang_runtime_config = require(lang_runtime_config_path);

    // Compile it!
    // This does a few things:
    //   1. Runs the antlr compiler that generates a javascript lexer and parser
    //   2. Runs the tree matcher compiler that generates tree matchers.
    const compile_result = await compile(lang_compile_config, lang_runtime_config);

    // Return an object that will be used by webpack to compile the parser.
    return {
        // I don't know
        'context': __dirname,

        // The file to compile. All other files are included in this file or in files included from this file.
        'entry': path.resolve(__dirname, 'src', 'runtime.js'),

        'resolve': {
            'alias': {
                'App': config.app_path,
                'Build': config.build_path,
                'LangRuntimeConfig$': lang_runtime_config_path,
                'LangBuild': compile_result.build_dir,
            },
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
            'path': outputPath,

            // How to export the parser library
            //   commonjs2 - Use module.exports
            //   window - Add an entry to the global window variable
            //   var - Add a local variable declared with "var"
            'libraryTarget': libraryTarget,

            // When libraryTarget is "window" or "var", the window key or variable name will be this value
            'library': 'CodesplainParser',
        },
    };
};

module.exports = async function(env) {
    // Read command line options
    langs = env && env.langs ? env.langs.toLowerCase().split(',') : undefined;
    optimize = Boolean(env && parseInt(env.optimize));
    libraryTarget = (env && env.libraryTarget) || 'var';
    outputPath = (env && env.outputPath) || path.resolve(__dirname, 'build', 'parsers');
    global.enable_debug = Boolean(env && parseInt(env.enable_debug));

    // Then, find language configuration files
    const files = await fs.readdir(config.lang_configs_path);

    // Filter langs and compile them.
    // Prepare_lang returns a promise, so after this step we have an array of promises.
    const lang_configs = files.filter(filter_lang).map(prepare_lang);

    if (lang_configs.length === 0) {
        // If no languages were compiled, warn the user.
        console.warn('No languages generated...');
    } else {
        // Otherwise, return a promise that resolves when all of the language promises resolve.
        return Promise.all(lang_configs);
    }
};
