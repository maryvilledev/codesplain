const fs = require('fs');

describe('mappings', () => {
  fs.readdirSync('./language_configs/').filter((name) =>
    name.split('.')[1] === 'rules'
  ).forEach((file) => {
    describe(file.split('.')[0] + '.csv', () => {
      it('should have a definition for all rules', () => {
        const csvFile = `./mappings/${file.split('.')[0]}.csv`;
        const csv = fs.readFileSync(csvFile, {encoding: 'utf8'})
          .split('\n')
          .slice(1) //Cut off the header
          .map((line) => line.split(',')[0])
          .sort((a, b) => a.localeCompare(b))
          .slice(1); //Cut off the newline
        Object.keys(require(`../language_configs/${file}`))
          .sort((a, b) => a.localeCompare(b))
          .forEach((rule, i) => expect(rule).toEqual(csv[i]));
      });
    });
  });
});
