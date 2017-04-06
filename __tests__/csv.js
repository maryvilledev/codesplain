const fs = require('fs');

describe('mappings', () => {
  fs.readdirSync('./language_configs/').filter((name) =>
    name.split('.')[1] === 'rules'
  ).forEach((file) => {
    describe(file.split('.')[0] + '.csv', () => {
      const csvFile = `./mappings/${file.split('.')[0]}.csv`;
      const csv = fs.readFileSync(csvFile, {encoding: 'utf8'})
        .split('\n')
        .slice(1, -1); //Cut off the header and newline
      it('should have a definition for all rules', () => {
        const token = csv.map((line) => line.split(',')[0])
          .sort((a, b) => a.localeCompare(b));
        Object.keys(require(`../language_configs/${file}`))
          .sort((a, b) => a.localeCompare(b))
          .forEach((rule, i) => expect(rule).toEqual(token[i]));
      });
      it('should have a pretty name and color for enabled rules', () => {
        csv.filter((line) => line.split(',')[1] != 0).forEach((line) => {
          const cols = line.split(',');
          expect(cols[2]).toBeTruthy();
          expect(cols[3]).toMatch(/#[a-fA-F0-9]{6}/);
        })
      })
    });
  });
});
