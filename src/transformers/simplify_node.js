const { TerminalNodeImpl } = require('antlr4/tree/Tree.js');

module.exports = function(lang_runtime_config, root) {

  // Takes an antlr node generated by the antlr parser, and
  // outputs our simplified node.
  const simplify_node = function(node) {
    const { symbol_name_map, rule_name_map } = lang_runtime_config;
    if (node instanceof TerminalNodeImpl) {
      const { type, start, stop, text } = node.symbol;
      let ast_type = symbol_name_map[type + 2];
      return {
        'ast_type': ast_type,
        'tags': [ast_type],
        'begin': start,
        'end': stop + 1,
        'text': text,
        'detail': [],
        'children': [],
      };
    } else {
      const { ruleIndex, start, stop, children } = node;
      let ast_type = rule_name_map[ruleIndex];
      return {
        'ast_type': ast_type,
        'tags': [ast_type],
        'begin': start.start,
        'end': (stop ? stop : start).stop + 1,
        'detail': [],
        'children': children ? children.map(simplify_node) : [],
      };
    }
  };

  return simplify_node(root);
};
