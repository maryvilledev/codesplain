let fs = require('fs-promise');
let path = require('path');
let child_process = require('child-process-promise');
let antlr = require('antlr4');

let config = require('../config.js');
let tree_matcher = require('./tree_matcher.js');

let array_diff = function(a, b) {
    return a.filter(function(i) {return b.indexOf(i) === -1;});
};

module.exports = function(lang_compile_config, lang_runtime_config) {
    let language_key = lang_runtime_config.language.toLowerCase();

    let g4_path = lang_compile_config.grammar_path;
    if (!g4_path) {
        g4_path = path.resolve(__dirname, '..', 'grammars-v4', language_key, lang_compile_config.grammar_file);
    }

    let cache_dir = config.resolve_cache_dir(lang_runtime_config);
    let cache_g4_path = path.resolve(cache_dir, lang_runtime_config.language + '.g4');


    let compile_promise = async function() {
        await fs.mkdir(cache_dir);
        await fs.copy(g4_path, cache_g4_path);

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
            'stdio': ['ignore', process.stdout, process.stderr],
        };

        await child_process.spawn(cmd, args, opts);

        let parser_classname = lang_runtime_config.language + 'Parser';
        let ParserClass = require(cache_dir + '/' + parser_classname + '.js')[parser_classname];
        let parser = new ParserClass();

        let symbol_name_map = ['_EPSILON', '_EOF', '_INVALID']
            .concat(parser.symbolicNames.slice(1))
            .map(function(val) {return val ? '.' + val : undefined;});
        let parser_rules = parser.ruleNames.concat(symbol_name_map.filter(Boolean));
        let config_rules = Object.keys(lang_runtime_config.rules);

        let config_missing = array_diff(parser_rules, config_rules);
        if (config_missing.length) {
            throw new Error('Missing rules ' + JSON.stringify(config_missing));
        }

        let config_extra = array_diff(config_rules, parser_rules);
        if (config_extra.length) {
            throw new Error('Extra rules ' + JSON.stringify(config_extra));
        }

        let code = '';
        code += 'module.exports = function(lang_runtime_config) {';

        code += 'lang_runtime_config.symbol_name_map = ' + JSON.stringify(symbol_name_map) + ';';

        if (lang_compile_config.tree_matcher_specs) {
            let generator = await tree_matcher.make_generator(lang_compile_config, lang_runtime_config);
            let tree_matchers = lang_compile_config.tree_matcher_specs.map(generator);

            code += tree_matchers.map(function(tree_matcher) {
                return 'lang_runtime_config.rules.' + tree_matcher.rule_key + '.finalizers.push(' + tree_matcher.finalizer_code + ');';
            });
        }

        code += '};';

        let modifier_path = path.resolve(cache_dir, 'runtime_config_modifier.js');
        await fs.writeFile(modifier_path, code);
    };

    return fs.stat(cache_dir)
        .catch(function(err) {
            if (err.errno === -2) {
                // If directory doesn't exist, start the compilation process
                return compile_promise();
            } else {
                throw err;
            }
        }).then(function() {
            return {
                'cache_dir': cache_dir
            };
        });
};
