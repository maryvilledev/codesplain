const child_process = require('child-process-promise');
const expect_error = require('./expect_error.js');

let javac_cache = {};

const run_javac = function(java_sources, opts) {
  const key = JSON.stringify(java_sources);
  if (typeof javac_cache[key] === 'undefined') {
    const cmd = 'javac';
    const cmd_args = [/* put additional arguments in here */].concat(java_sources);
    javac_cache[key] = child_process.spawn(cmd, cmd_args, opts);
  }
  return javac_cache[key];
}

const run_java = function(main_class, args, opts, java_stdin) {
  const cmd = 'java';
  const cmd_args = [
      main_class,
  ].concat(args);
  const child = child_process.spawn(cmd, cmd_args, opts);
  child.childProcess.stdin.write(java_stdin);
  child.childProcess.stdin.end();
  return child;
}

module.exports = async function(java_sources, main_class, args, opts, java_stdin) {
  opts.capture = ['stdout', 'stderr'];
  await run_javac(java_sources, opts);
  return await run_java(main_class, args, opts, java_stdin);
}
