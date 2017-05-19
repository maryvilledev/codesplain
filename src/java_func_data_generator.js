let path = require('path');
let fs = require('fs-promise');
let child_process = require('child-process-promise');

let config = require('../config');
let expect_error = require('./utils/expect_error.js');

let compile_promise;

let compile = async function() {
    let cache_dir = path.resolve(config.build_path, 'java_func_data');

    // Make sure the cache directory exists
    await fs.mkdir(config.build_path).catch(expect_error('EEXIST', function() {}));

    // Make sure the language cache directory exists
    await fs.mkdir(cache_dir).catch(expect_error('EEXIST', function() {}));

    // Copies the translator java files into the cache directory
    let translator_dir = path.resolve(config.app_path, 'java_function_translator');
    let translator_cache_dir = path.resolve(cache_dir, 'java_function_translator');
    await fs.copy(translator_dir, translator_cache_dir);

    let java_sources = [
        'java_function_translator/JavaFunctionTranslator.java',
        'java_function_translator/Encoder.java',
        'java_function_translator/RangeEncoder.java',
        'java_function_translator/TranslatedFunction.java',
        'java_function_translator/functions/Character_isJavaIdentifierStart_int.java',
        'java_function_translator/functions/Character_isJavaIdentifierPart_int.java',
    ];

    {
        let cmd = 'javac';
        let args = [/* put additional arguments in here */].concat(java_sources);
        let opts = {
            'cwd': cache_dir,
            'stdio': ['ignore', process.stdout, process.stderr],
        };
        await child_process.spawn(cmd, args, opts);
    }

    {
        let cmd = 'java';
        let args = [
            'java_function_translator.JavaFunctionTranslator',
        ];
        let opts = {
            'cwd': cache_dir,
            'stdio': ['ignore', process.stdout, process.stderr],
        };
        await child_process.spawn(cmd, args, opts);
    }
};

module.exports = async function() {
    // Compile the java function data if it's not being done already
    if (!compile_promise) {
        compile_promise = compile();
    }

    // Wait for the tree matcher lexer and parser to be compiled
    let compile_result = await compile_promise;
};
