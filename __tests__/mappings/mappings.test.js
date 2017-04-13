const fs = require('fs');

describe('mappings', () => {
  fs.readdirSync('./language_configs/')
    .filter((name) => name.split('.')[1] === 'rules' )
    .forEach((file) => {
      const csvFileName = `${file.split('.')[0]}.csv`;
      describe(csvFileName, () => {
        const encoding = { encoding: 'utf-8' };
        const csvPath = __dirname + `/../../mappings/${csvFileName}`;
        const csv = fs.readFileSync(csvPath, encoding)
          .split('\n')   // Make array of lines
          .slice(1, -1); // Cut off the header and newline
        it('should have a definition for all rules', () => {
          // Create a sorted array of tokens in the csv
          const tokens = csv.map((line) => line.split(',')[0])
            .sort((a, b) => a.localeCompare(b));

          // Now create sorted array of rules in the config
          // file, and compare the two
          const languageConfigPath = __dirname + `/../../language_configs/${file}`;
          Object.keys(require(languageConfigPath))
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
