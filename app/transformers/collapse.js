module.exports = function(lang_runtime_config, root) {

    // Removes long chains of nodes with only one child.
    let collapse = function(node) {
        let type_opts = lang_runtime_config.rules[node.type];

        // If there is only one child, and it is exactly the same as this node,
        // then eliminate this node.
        if (type_opts.collapse
            && node.children.length === 1
            && node.begin === node.children[0].begin
            && node.end === node.children[0].end
        ) {
            return collapse(node.children[0]);
        } else {
            // Otherwise, collapse the children
            node.children = node.children.map(collapse);
            return node;
        }
    };

    return collapse(root);
};
