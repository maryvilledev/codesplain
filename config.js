let path = require('path');

module.exports = {
    'lang_configs_path': path.resolve(__dirname, 'language_configs'),
    'cache_path': path.resolve(__dirname, '_cache'),
    'resolve_cache_dir': function(lang_runtime_config) {
        let language_key = lang_runtime_config.language.toLowerCase();
        return path.resolve(this.cache_path, language_key);
    },
};
