// Configuration that can be read by both the compiler and the runtime.

module.exports = {
    'language': 'Java',
    'entry_rule': 'compilationUnit',
    'rules': require('./java.rules.js'),
};
