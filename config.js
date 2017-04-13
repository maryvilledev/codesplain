let path = require('path');

module.exports = {
    'app_path':          path.resolve(__dirname, 'src'),
    'lang_configs_path': path.resolve(__dirname, 'language_configs'),
    'build_path':        path.resolve(__dirname, 'build'),
    'resolve_build_dir': ({ language }) => (
      path.resolve(this.build_path, language.toLowerCase())
    ),
};
