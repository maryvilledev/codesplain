module.exports = {};

module.exports.collapse = function(node) {
    // If there is only one child, and it is exactly the same as this node, then eliminate this node.
    if (node.children.length === 1
        && node.begin === node.children[0].begin
        && node.end === node.children[0].end
    ) {
        return node.children[0];
    } else {
        return node;
    }
};
