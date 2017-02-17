let fs = require('fs');
let path = require('path');
let webpack = require('webpack');

let config = require('./config');
let compile = require('./app/compile');

let prepare_lang = function(lang_name) {
    return new Promise(function(resolve, reject) {
        let lang_config_path = path.resolve(config.lang_configs_path, lang_name + '.js');
        let lang_config = require(lang_config_path);

        compile(lang_config, function(err, lang_cache_dir) {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                'entry': path.resolve(__dirname, 'app', 'runtime.js'),
                'externals': ['fs'],
                'plugins': [
                    new webpack.DefinePlugin({
                        'LANGUAGE_CONFIG_PATH': JSON.stringify(lang_config_path),
                        'LANGUAGE_CACHE_DIR': JSON.stringify(lang_cache_dir),
                    }),
                ],
                'output': {
                    'filename': lang_name + '.js',
                    'path': path.resolve(__dirname, 'public', 'langs'),
                    'library': 'CodeSplain_parse_' + lang_name,
                },
            });
        });
    });
};

module.exports = function() {
    return new Promise(function(resolve, reject) {
        fs.readdir(config.lang_configs_path, function(err, files) {
            let lang_configs = files.filter(function(file) {
                return file.slice(-3) === '.js';
            }).map(function(file) {
                return prepare_lang(file.slice(0, -3));
            });
            Promise.all(lang_configs).then(resolve, reject);
        });
    });
};
