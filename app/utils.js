let config = require('../config.js');

module.exports = {};

module.exports.resolve_cache_dir = function(lang_runtime_config) {
    let language_key = lang_runtime_config.language.toLowerCase();
    return path.resolve(config.cache_path, language_key);
};
