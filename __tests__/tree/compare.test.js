const path = require('path');
const fs = require('fs-promise');
const antlr = require('antlr4');
const expect_error = require('../../src/utils/expect_error.js');
const run_antlr = require('../../src/utils/run_antlr.js');
const run_java = require('../../src/utils/run_java.js');
const webpack = require('webpack');

const config = require('../../config');

const prepareJava = async function(lang_compile_config, lang_runtime_config) {
  return await run_antlr(lang_compile_config, lang_runtime_config, 'Java');
}

const genTreeViaJava = async function(lang_runtime_config, antlr_result, code) {
  const {
    build_dir
  } = antlr_result;

  const java_sources = [
    lang_runtime_config.language + 'Lexer.java',
    lang_runtime_config.language + 'Parser.java',
  ];

  // Add CLASSPATH to environment
  const environment = Object.create(process.env);
  const classpath = environment.CLASSPATH ? environment.CLASSPATH.split(':') : [];
  classpath.unshift(path.resolve(__dirname, '../../bin/antlr-4.6-complete.jar'));
  classpath.unshift('.');
  environment.CLASSPATH = classpath.join(':');

  const result = await run_java(
    java_sources,
    'org.antlr.v4.gui.TestRig',
    [lang_runtime_config.language, lang_runtime_config.entry_rule, '-tree'],
    {
      'cwd': build_dir,
      'env': environment,
      //'stdio': ['pipe', 'pipe', process.stderr],
    },
    code
  );

  if (result.code) {
    throw result.stderr.toString();
  } else {
    return result.stdout.toString();
  }
};

const prepareJs = async function(lang_compile_config, lang_runtime_config) {
  const output_path = path.resolve(config.build_path, 'output');

  const webpack_config = await require('../../webpack.config.js')({
    'langs': lang_runtime_config.language,
    'optimize': 0,
    'libraryTarget': 'commonjs2',
    'outputPath': output_path,
    'enable_debug': false,
  });

  if (webpack_config.length !== 1) {
    throw new Error('Unexpected webpack output');
  }

  const compiler = webpack(webpack_config);

  await new Promise(function(resolve, reject) {
    compiler.run(function(err, stats) {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });

  return require(path.resolve(output_path, webpack_config[0].output.filename));
}

const genTreeViaJs = async function(lang_runtime_config, js_parser, code) {
  const tree = js_parser(code, function(err) {
    throw err;
  }, {
    'return_antlr_tree': true,
  });

  return tree.toStringTree(tree.parser.ruleNames);
};


let prepare_cache = {};

const compare = async function(language_name, code_file) {
  const lang_compile_config = require(`../../language_configs/${language_name}.compile.js`);
  const lang_runtime_config = require(`../../language_configs/${language_name}.runtime.js`);

  if (typeof prepare_cache[language_name] === 'undefined') {
    prepare_cache[language_name] = Promise.all([
      prepareJava(lang_compile_config, lang_runtime_config),
      prepareJs(lang_compile_config, lang_runtime_config),
    ]);
  }

  const t1 = Date.now();

  const res = await prepare_cache[language_name];
  const antlr_result = res[0];
  const js_parser = res[1];
  const t2 = Date.now();

  const code = await fs.readFile(code_file, {'encoding': 'utf8'});
  const t3 = Date.now();

  const treeViaJava = await genTreeViaJava(lang_runtime_config, antlr_result, code);
  const t4 = Date.now();

  const treeViaJs = await genTreeViaJs(lang_runtime_config, js_parser, code);
  const t5 = Date.now();

  console.log('compare(' + code_file + ') prepare:  ' + (t2 - t1) + 'ms');
  console.log('compare(' + code_file + ') readFile: ' + (t3 - t2) + 'ms');
  console.log('compare(' + code_file + ') genJava:  ' + (t4 - t3) + 'ms');
  console.log('compare(' + code_file + ') genJs:    ' + (t5 - t4) + 'ms');

  return treeViaJava.trim() === treeViaJs.trim();
};



describe('grammars-v4/', () => {
  let prev_timeout;
  beforeAll(() => {
    prev_timeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    return fs.remove(config.build_path).catch(err => {
      console.error(err);
    });
  });
  afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = prev_timeout;
  });

  const test_snippet = function(lang_key, description, code_filename) {
    it(description, () => {
      expect.assertions(1);
      return compare(lang_key, __dirname + '/code/' + code_filename).then(data => {
        expect(data).toBeTruthy();
      }).catch(err => {
        console.error(err);
      });
    });
  };

  describe('grammars-v4/python3/', () => {
    test_snippet('python3', 'handles basic hello worlds', 'snippet.voc84cjo.py');
    test_snippet('python3', 'handles a script adding the input arguments', 'snippet.kt29xnfw.py');
  });

  describe('grammars-v4/java8/', () => {
    test_snippet('java8', 'handles basic hello worlds', 'snippet.k17eu4f2.java');
  });
});
