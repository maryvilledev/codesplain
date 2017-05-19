const path = require('path');
const fs = require('fs-promise');
const child_process = require('child-process-promise');

const config = require('../../config.js');
const expect_error = require('./expect_error.js');

module.exports = async (lang_compile_config, lang_runtime_config, target_language) => {
  const {
    grammar_files,
  } = lang_compile_config;
  const {
    language,
    generate_visitor,
    generate_listener,
  } = lang_runtime_config;

  if (typeof grammar_files[target_language] !== 'string') {
    throw new Error('No grammar file specified for target ' + target_language);
  }
  const g4_path = path.resolve(__dirname, '..', '..', grammar_files[target_language]);

  const build_dir     = config.resolve_build_dir(lang_runtime_config, target_language);
  const build_g4_path = path.resolve(build_dir, language + '.g4');

  /* ============================ Build Tasks: ============================== */
  /* --- Creates build directory and copies grammar files into it. --- */
  const prepare_build_dir = async () => {
    const on_eexist_err = expect_error('EEXIST', () => {});

    // Make sure the build directory exists
    await fs.mkdir(config.build_path).catch(on_eexist_err);

    // Make sure the language build directory exists
    await fs.mkdir(build_dir).catch(on_eexist_err);

    // Copies the g4 file into the build directory
    await fs.copy(g4_path, build_g4_path);
  }

  /* --- Invokes the antlr process --- */
  const invoke_antlr = async () => {
    // Prepare options to the antlr compiler that generates
    // the antlr lexer and antlr parser

    let cmd;
    let args;

    if (target_language === 'TypeScript') {
      // To generate a TypeScript target, run the node antlr4ts-cli module
      cmd = process.argv[0]; // This should be an absolute path to the node executable
      args = [require.resolve('antlr4ts-cli')];
    } else {
      cmd = 'java';
      args = ['-jar', path.resolve(__dirname, '../../bin/antlr-4.6-complete.jar')];
    }

    args = args.concat([
      '-long-messages',
      generate_listener ? '-listener' : '-no-listener',
      generate_visitor ? '-visitor' : '-no-visitor',
      '-Dlanguage=' + target_language,
      language + '.g4',
    ]);
    const opts = {
      'cwd': build_dir,
      'stdio': ['ignore', process.stdout, process.stderr],
    };

    await child_process.spawn(cmd, args, opts);
  }

  await prepare_build_dir();
  await invoke_antlr();

  return { build_dir };
}
