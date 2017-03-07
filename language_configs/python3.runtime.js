module.exports = {
    'language': 'Python3',
    'entry_rule': 'file_input',
    'rules': require('./python3.rules.js'),
};
require(LANGUAGE_CACHE_DIR + '/runtime_modifier.js')(module.exports);
