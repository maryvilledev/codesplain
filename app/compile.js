const path = require('path');
const fs = require('fs-promise');
const child_process = require('child-process-promise');
const antlr = require('antlr4');

const config = require('../config.js');
const expect_error = require('./expect_error.js');
const tree_matcher = require('./tree_matcher.js');
const java_func_data_generator = require('./java_func_data_generator.js');

const array_diff = (a, b) => a.filter(i => b.indexOf(i) === -1);

const resolve_grammar_path = (lang_key, grammar_file) =>
      path.resolve(__dirname, '..', 'grammars-v4', lang_key, grammar_file);

// Calls each function in 'tasks' with the results of the previous task's
// invocation. The first task is called with no args.
const waterfall = async (tasks) => {
  tasks.reduce((acc, task) => task(acc), tasks[0]());
};

/*
Returns a set of async closure functions with references to the given
lang_compile_config & lang_runtime_config that can be used to build the
parser.
*/
const make_build_tasks = (lang_compile_config, lang_runtime_config) => {
  const {
    language,
    rules,
    generate_visitor,
    generate_listener,
  } = lang_runtime_config;
  const {
    tree_matcher_specs,
    needs_java_func_data,
    grammar_path,
    grammar_file,
  } = lang_compile_config;

  // Figure out the language key
  const language_key = language.toLowerCase();

  // Figure out the path to the grammar file
  const g4_path = grammar_path ? grammar_path :
    resolve_grammar_path(language_key, grammar_file);

  // Figure out the path to the cache directory
  const cache_dir     = config.resolve_cache_dir(lang_runtime_config);
  const cache_g4_path = path.resolve(cache_dir, language + '.g4');

  /* --- Creates cache directory and copies grammar files into it. --- */
  const prepare_cache_dir = async () => {
    const on_eexist_err = expect_error('EEXIST', () => {});

    // Make sure the cache directory exists
    await fs.mkdir(config.cache_path).catch(on_eexist_err);

    // Make sure the language cache directory exists
    await fs.mkdir(cache_dir).catch(on_eexist_err);

    // Copies the g4 file into the cache directory
    await fs.copy(g4_path, cache_g4_path);
  }

  /* --- Invokes the antlr process, returns a Promise --- */
  const invokeAntlr = async () => {
    // Prepare options to the antlr compiler that generates
    // the antlr lexer and antlr parser
    const cmd = 'java';
    const args = [
        '-Xmx500M',
        '-cp', '../../bin/antlr-4.6-complete.jar',
        'org.antlr.v4.Tool',
        '-long-messages',
        generate_listener ? '-listener' : '-no-listener',
        generate_visitor ? '-visitor' : '-no-visitor',
        '-Dlanguage=JavaScript',
        language + '.g4',
    ];
    const opts = {
        'cwd': cache_dir,
        'stdio': ['ignore', process.stdout, process.stderr],
    };

    await child_process.spawn(cmd, args, opts);
  }

  /* --- Generates java func data, if this lang needs any --- */
  const make_java_func_data = async () => {
    if (needs_java_func_data) {
      await fs.stat(config.cache_path + '/java_func_data')
          .catch(expect_error('ENOENT', java_func_data_generator));
    }
  }

  /* --- Creates and returns the parser and symbol_name_map --- */
  const make_parser = async () => {
    // Create instance of the parser
    const parser_classname = language + 'Parser';
    const ParserClass = require(`${cache_dir}/${parser_classname}.js`)[parser_classname]
    const parser = new ParserClass();

    // Create an array of symbol (terminal) names
    const symbol_name_map = ['_EPSILON', '_EOF', '_INVALID']
        .concat(parser.symbolicNames.slice(1))
        .map((val) => val ? '.' + val : undefined);

    // Create the lists of rule names (both terminals and non-terminals)
    const parser_rules = parser.ruleNames.concat(symbol_name_map.filter(Boolean));
    const config_rules = Object.keys(rules);

    // Make sure the parser doesn't have extra rules
    const config_missing = array_diff(parser_rules, config_rules);
    if (config_missing.length) {
        throw new Error('Missing rules ' + JSON.stringify(config_missing));
    }

    // Make sure our config doesn't have extra rules
    const config_extra = array_diff(config_rules, parser_rules);
    if (config_extra.length) {
        throw new Error('Extra rules ' + JSON.stringify(config_extra));
    }

    return { symbol_name_map, parser };
  }

  /* --- Dynamically creates runtime config modifier function --- */
  const make_runtime_config_modifier = async ({ symbol_name_map, parser }) => {
    // Turns these maps into human-readable JSON for insertion
    // into returned function string
    const symbol_name_map_str = JSON.stringify(symbol_name_map, null, 2);
    const rule_name_map_str   = JSON.stringify(parser.ruleNames, null, 2);

    // Add a tree matcher function if appropriate too
    let tree_matchers_str = '';
    if (tree_matcher_specs) {
      const generator = await tree_matcher.make_generator(
        lang_compile_config,
        lang_runtime_config
      );
      const tree_matchers = tree_matcher_specs.map(generator);
      tree_matchers_str =
      `lang_runtime_config.tree_matcher = function(root) {
        ${tree_matchers.join('\n')}
      };`;
    }

    // Return the runtime config modifier - a function that
    // modifies the lang_runtime_config
    return `
    /*
    This function is generated by app/compile.js
    Do not attempt to make changes. They will be overwritten.
    */
    module.exports = function(lang_runtime_config) {
      lang_runtime_config.symbol_name_map = ${symbol_name_map_str};
      lang_runtime_config.rule_name_map   = ${rule_name_map_str};
      ${tree_matchers_str}
    };
    `;
  }

  /* --- Writes the runtime config modifier to file system --- */
  const write_runtime_config_modifier = async ({ config_modifier }) => {
    const modifier_path = path.resolve(cache_dir, 'runtime_config_modifier.js');
    await fs.writeFile(modifier_path, config_modifier);
  }

  // Return the set of async closures
  return [
    prepare_cache_dir,
    invokeAntlr,
    make_java_func_data,
    make_parser,
    make_runtime_config_modifier,
    write_runtime_config_modifier,
  ];
}



module.exports = (lang_compile_config, lang_runtime_config) => {
  const compile_promise = async () => {
    await waterfall(make_build_tasks(lang_compile_config, lang_runtime_config));
  };

  const cache_dir = config.resolve_cache_dir(lang_runtime_config);
    // Check if the cache directory exists using 'stat'
    return fs.stat(cache_dir)
      // If it does not exist, then build it up using compile_promise().
      .catch(expect_error('ENOENT', compile_promise))
      // In either case, return an object describing the results.
      // Currently, this description is just where the compiled files are stored.
      .then(() => ({ cache_dir }));
};
