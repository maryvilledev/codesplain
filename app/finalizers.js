module.exports = {};

module.exports.collapse = function(ast) {
    // If there is only one child, and it is exactly the same as this node, then eliminate this node.
    if (ast.children.length === 1
        && ast.begin === ast.children[0].begin
        && ast.end === ast.children[0].end
    ) {
        return ast.children[0];
    } else {
        return ast;
    }
};
