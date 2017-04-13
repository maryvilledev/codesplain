describe('collapse.js', () => {
  const collapse = require('../../app/transformers/collapse.js');
  const { makeNode } = require('../../test-utils/utils.js');

  const start  = 0;
  const end    = 5;
  const noTags = [];

  const bottomNode = makeNode('bottom_node', start, end, noTags, []);
  const middleNode = makeNode('middle_node', start, end, noTags, [ bottomNode ]);
  const topNode    = makeNode('top_node', start, end, noTags, [ middleNode ]);

  it(`is a function`, () => {
    expect(typeof(collapse)).toEqual('function');
  });

  it(`recursively removes nodes from the tree if those nodes:
       • are flagged as collapsible in the runtime config, and
       • have single children who occupy the exact same range`, () => {
        const langRuntimeConfig1 = {
          'rules': {
           'top_node':    { 'collapse': true },
           'middle_node': { 'collapse': true },
           'bottom_node': { 'collapse': false },
          },
        };
        expect(collapse(langRuntimeConfig1, topNode)).toBe(bottomNode);

        const langRuntimeConfig2 = {
          'rules': {
            'top_node':    { 'collapse': true },
            'middle_node': { 'collapse': false },
            'bottom_node': { 'collapse': true }
          },
        };
        expect(collapse(langRuntimeConfig2, topNode)).toBe(middleNode);
  });

  it(`does NOT remove nodes from the tree if they are NOT flagged as collapsible`,
     () => {
        const langRuntimeConfig = {
          'rules': {
            'top_node':    {},
            'middle_node': { 'collapse': true },
            'bottom_node': { 'collapse': true },
          },
        };
        expect(collapse(langRuntimeConfig, topNode)).toBe(topNode);
  });

  it(`does NOT remove nodes from the tree if they ARE flagged as collapsible,
      but whose children do NOT occupt identical ranges`, () => {
        const childNode  = makeNode('child', 0, 3, noTags, []);
        const parentNode = makeNode('parent', 0, 5, noTags, [ childNode ]);
        const langRuntimeConfig = {
          'rules': {
            'parent': { 'collapse': true },
            'child':  { 'collapse': true },
          },
        };
        expect(collapse(langRuntimeConfig, parentNode)).toBe(parentNode);
  });
});
