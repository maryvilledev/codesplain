#!/usr/bin/env node

if (process.argv.length < 3) {
  console.error(`Usage: ${process.argv[1]} <lang>`);
  process.exit(1);
}
const lang = process.argv[2];
const rules = require(`./language_configs/${lang}.rules.js`);
if (!rules) {
  console.error(`${lang} does not have rules defined`);
  process.exit(1);
}

let csv = 'RULE,ENABLED,PRETTY_NAME,COLOR,\n'
Object.keys(rules).forEach((rule) => {csv = csv + `${rule},0,,\n`});
const fs = require('fs')
fs.mkdir('./mappings')
fs.writeFileSync(`./mappings/${lang}.csv`, csv)
