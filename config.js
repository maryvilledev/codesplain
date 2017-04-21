let path = require('path');

module.exports = {
    'app_path':          path.resolve(__dirname, 'src'),
    'lang_configs_path': path.resolve(__dirname, 'language_configs'),
    'build_path':        path.resolve(__dirname, '/tmp/codesplain_build'),
    'resolve_build_dir': function(lang_runtime_config) {
      const language_key = lang_runtime_config.language.toLowerCase();
      return path.resolve(this.build_path, language_key);
    },
};
