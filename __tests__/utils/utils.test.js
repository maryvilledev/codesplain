const { makeNode } = require('../../src/utils/utils.js');

describe(`test-utils.js`, () => {
  describe(`makeNode`, () => {
    it(`returns the expected object`, () => {
      const node = makeNode('Some Type', 0, 5, [], []);
      expect(node).toMatchSnapshot();
    });
  });
});
