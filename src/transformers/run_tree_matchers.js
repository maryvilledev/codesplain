module.exports = function(lang_runtime_config, root) {

    // Executes the tree matchers on each node
    let run_tree_matchers = function(node) {
        lang_runtime_config.tree_matcher(node);
        node.children.forEach(run_tree_matchers);
    };

    run_tree_matchers(root);
    return root;
};
