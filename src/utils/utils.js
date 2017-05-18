const { TerminalNodeImpl } = require('antlr4/tree/Tree.js');

/*
Returns an object built from the given arguments. The object is
representative of nodes present in the parser output AST.
*/
module.exports.makeNode = (ast_type, begin, end, detail, children) => {
  return {
    ast_type,
    tags: [ast_type],
    begin,
    end,
    detail,
    children,
  }
};

/*
Returns an object built from the given arguments. The object is
representative of terminal nodes present in the parser output AST.
*/
module.exports.makeTerminal = (ast_type, begin, end, text, detail) => {
  return {
    ast_type,
    tags: [ast_type],
    begin,
    end,
    text,
    detail,
    children: [],
  }
};

/*
Returns an object built from the given arguments. The object
is a mock of nodes that appear in the ANTLR output AST. Note that these morks are incomplete, and only contain some properties found in real ANTLR nodes.
*/
module.exports.makeAntlrNode = (ruleIndex, start, stop, children) => {
  return {
    ruleIndex,
    start,
    stop,
    children,
  }
};

/*
Returns an object built from the given arguments. The object
is a mock of terminal nodes that appear in ANTLR output ASTs. Note that these mocks are incomplete, and only contain some properties found in real ANTLR nodes.
*/
module.exports.makeAntlrTerminal = (type, start, stop, text) => {
  const terminal = Object.create(TerminalNodeImpl.prototype, {});
  terminal.symbol = {
      type,
      start,
      stop,
      text
  };
  return terminal;
};
