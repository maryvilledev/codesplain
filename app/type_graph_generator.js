module.exports = function(parser_class, lang_runtime_config) {
    Object.keys(lang_runtime_config.rules).forEach(function(rule_key) {
        let context_key = rule_key.slice(0, 1).toUpperCase() + rule_key.slice(1);
        let prototype = parser_class[context_key].prototype;

    });
};



Lambdef_nocondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lambdef_nocondContext.prototype.constructor = Lambdef_nocondContext;

Lambdef_nocondContext.prototype.LAMBDA = function() {
    return this.getToken(Python3Parser.LAMBDA, 0);
};

Lambdef_nocondContext.prototype.test_nocond = function() {
    return this.getTypedRuleContext(Test_nocondContext,0);
};

Lambdef_nocondContext.prototype.varargslist = function() {
    return this.getTypedRuleContext(VarargslistContext,0);
};




Python3Parser.Lambdef_nocondContext = Lambdef_nocondContext;
