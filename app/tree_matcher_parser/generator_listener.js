let BaseListener = require(TREE_MATCHER_CACHE_DIR + '/' + listener_classname + '.js')[listener_classname];

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
