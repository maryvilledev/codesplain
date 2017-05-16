const path = require('path');
const fs = require('fs-promise');
const child_process = require('child-process-promise');

module.exports = async (build_dir) => {
  const tsconfig = {
    'compilerOptions': {
      'module': 'commonjs',
      'target': 'es6',
      'experimentalDecorators': true,
      'noImplicitAny': true,
      'strictNullChecks': true,
    }
  };

  const tsconfig_path = path.resolve(build_dir, 'tsconfig.json');
  await fs.writeFile(tsconfig_path, JSON.stringify(tsconfig));

  const cmd = process.argv[0];
  const args = [require.resolve('typescript/lib/tsc')];
  const opts = {
    'cwd': build_dir,
    'stdio': ['ignore', process.stdout, process.stderr],
  };

  await child_process.spawn(cmd, args, opts);
}
