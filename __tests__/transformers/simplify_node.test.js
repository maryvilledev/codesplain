describe(`simplify_node.js`, () => {
  const simplify_node = require('../../src/transformers/simplify_node.js');
  const {
    makeAntlrNode,
    makeAntlrTerminal,
    makeNode,
    makeTerminal,
  } = require('../../src/utils/utils.js');
  const lang_runtime_config = {
    symbol_name_map: [
      '.BLAH',
      '.FOOBAR',
      '.QUXBAZ',
    ],
    rule_name_map: [
      'floop_type',
      'groop_loop',
    ],
  };

  it(`is a function`, () => {
    expect(typeof(simplify_node)).toEqual('function');
  });

  it(`recursively extracts the following properties from non-terminal
      input nodes:
        • type
        • begin
        • end
        • tags
        • children`, () => {

    // Different forms for starts and stops are intentionally
    // used here, as both can be found in real ANTLR nodes.
    const input_node = (
      makeAntlrNode(0, { start: 0 }, { stop: 5 }, [
        makeAntlrNode(1, { start: 0, stop: 4 }, undefined, []),
      ]));

    const { rule_name_map } = lang_runtime_config;
    const expected = (
      makeNode(rule_name_map[0], 0, 5 + 1, [], [
        makeNode(rule_name_map[1], 0, 4 + 1, [], []),
      ]));

    expect(simplify_node(lang_runtime_config, input_node)).toEqual(expected);
  });

  it(`extracts the following properties from terminal input nodes:
      • type
      • begin
      • end
      • tags
      • children
      • text`, () => {

    const input_terminal = (
      makeAntlrTerminal(0, 0, 5, 'foobar')
    );

    const { symbol_name_map } = lang_runtime_config;
    const expected = (
      makeTerminal(symbol_name_map[0 + 2], 0, 6, 'foobar', [])
    );

    expect(simplify_node(lang_runtime_config, input_terminal)).toEqual(expected);
  });
});
