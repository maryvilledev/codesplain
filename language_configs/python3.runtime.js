// Configuration that can be read by both the compiler and the runtime.

module.exports = {
    'language': 'Python3',
    'entry_rule': 'file_input',
    'rules': require('./python3.rules.js'),
};
