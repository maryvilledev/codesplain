// Configuration that can be read by both the compiler and the runtime.

module.exports = {
    'language': 'C',
    'entry_rule': 'compilationUnit',
    'rules': require('./c.rules.js'),
};
