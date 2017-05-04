const path = require('path');
const os = require('os');

module.exports = {
    'app_path':          path.resolve(__dirname, 'src'),
    'lang_configs_path': path.resolve(__dirname, 'language_configs'),
    //'build_path':        path.resolve(os.tmpdir(), 'codesplain_build'),
    'build_path':        path.resolve(__dirname, 'build'),
    'resolve_build_dir': function(lang_runtime_config, target_language) {
      const language_key = lang_runtime_config.language.toLowerCase();
      return path.resolve(this.build_path, language_key + '_to_' + target_language);
    },
};
