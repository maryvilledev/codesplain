let lang_runtime_config = require('./lang_config.runtime.js');

let listener_classname = lang_runtime_config.language + 'Listener';
//let BaseListener = require(lang_runtime_config.cache_dir + '/' + listener_classname + '.js')[listener_classname];
let BaseListener = function() {};

let GeneratorListener = function(profile_data) {
    BaseListener.call(this);
    this.profile_data = profile_data;
    return this;
};

GeneratorListener.prototype = Object.create(BaseListener.prototype);
GeneratorListener.prototype.constructor = GeneratorListener;

GeneratorListener.prototype.exitMain = function(ctx) {
    return 'abc';
};

module.exports = GeneratorListener;
