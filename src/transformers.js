let simplify_node = require('./transformers/simplify_node.js');
let run_tree_matchers = require('./transformers/run_tree_matchers.js');
let collapse = require('./transformers/collapse.js');

module.exports = function(lang_runtime_config, root) {
    root = simplify_node(lang_runtime_config, root);
    root = run_tree_matchers(lang_runtime_config, root);
    root = collapse(lang_runtime_config, root);
    return root;
};
