const fs = require('fs');

describe('mappings', () => {
  fs.readdirSync('./language_configs/')
    // Gather set of all langs in "language_configs"
    .reduce((langs, name) => langs.add(name.split('.')[0]), new Set())
    .forEach(lang => {
      const csvFileName = `${lang}.csv`
      describe(csvFileName, () => {
        const encoding = { encoding: 'utf-8' };
        const csvPath = __dirname + `/../../mappings/${csvFileName}`;
        const csv = fs.readFileSync(csvPath, encoding)
          .split('\n')   // Make array of lines
          .slice(1, -1); // Cut off the header and newline
        it(`should have a definition for all rules`, () => {
          // Create a sorted array of tokens in the csv
          const tokens = csv.map(line => line.split(',')[0])
            .sort((a, b) => a.localeCompare(b));

          // Extract types from tree_matcher_specs.js file for this lang
          const treeMatcherTypes = require(
            `../../language_configs/${lang}.tree_matcher_specs.js`
          ).map(spec => spec.type);

          // Now create a sorted array of rules in the config files, and
          // the tree matcher specs file, then compare the two
          Object.keys(require(`../../language_configs/${lang}.rules.js`))
            .concat(treeMatcherTypes)
            .sort((a, b) => a.localeCompare(b))
            .forEach((rule, i) => expect(rule).toEqual(tokens[i]));
        });
        it('should have a pretty name and color for enabled rules', () => {
          csv.filter((line) => line.split(',')[1] != 0)
            .forEach((line) => {
              const cols = line.split(',');
              expect(cols[2]).toBeTruthy();
              expect(cols[3]).toMatch(/#[a-fA-F0-9]{6}/);
            });
        });
      });
  });
});
