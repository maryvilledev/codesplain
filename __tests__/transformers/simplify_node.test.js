describe(`simplify_node.js`, () => {
  const simplify_node = require('../../src/transformers/simplify_node.js');

  it(`is a function`, () => {
    expect(typeof(simplify_node)).toEqual('function');
  });
});
