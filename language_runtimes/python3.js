// This returns a string

module.exports = 'function(config)';

let apply_matcher = function(rule_key, query, func) {
    module.exports += 'config.rules.for_stmt.finalizers.push(' +
    res += ''
    res += 'function(ast) {';
        res += '';
    res += '};';
    return res;
};

let push_rule_finalizer = function(rule_key, finalizer_src) {
    return 'runtime_config.rules.' + rule_key + '.finalizers.push(' + finalizer_src + ');';
};

let generate_matcher = function(pattern, func) {
    let res = '';
    res += 'function(ast) {';
        res += func.toString();
        res += 'return ast;';
    res += '}';
    return res;
};


// language_configs/python3.compile.js
// Run only at compile time
// NOT available to runtime
module.exports = {
    // File paths...
    'matchers': [
        {
            'rule': 'for_stmt',
            'pattern': 'for_stmt [.FOR, /.NAME:iter, .IN, /trailed_atom [/.NAME="range", trailer\
                [.OPEN_PAREN, arglist [/.DECIMAL_INTEGER:begin, .COMMA,\
                /.DECIMAL_INTEGER:end], .CLOSE_PAREN]]]',
            'actor': function(nodes) {
                nodes.main.tags.push('for');
                nodes.iter.tags.push('iter');
            },
        },
    ],
};

// language_configs/python3.runtime.js
// Run at compile time, and at runtime
module.exports = {
    // Entry rule...
    'rules': {}
};
require(LANGUAGE_CACHE_DIR + '/runtime_modifier.js')(module.exports);
