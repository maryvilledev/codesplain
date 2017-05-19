// Versioning schema: http://semver.org/

const fs = require('fs');
const yaml = require('js-yaml');

const package_json_version = require('../package.json').version;
const circle_yml_version = yaml.safeLoad(fs.readFileSync('circle.yml', 'utf8')).machine.environment.PARSER_VERSION;
const version_regex = /^\d+\.\d+\.\d+$/;


describe('package.json version', () => {
  it('should match ' + version_regex.toString(), () => {
    expect(package_json_version).toMatch(version_regex);
  });
});

describe('circle.yml version', () => {
  it('should match ' + version_regex.toString(), () => {
    expect(circle_yml_version).toMatch(version_regex);
  });

  it('should match package.json version', () => {
    expect(circle_yml_version).toEqual(package_json_version);
  });
});
