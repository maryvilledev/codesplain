// Configuration that can be read by both the compiler and the runtime.

module.exports = {
    'language': 'Java8',
    'entry_rule': 'compilationUnit',
    'rules': require('./java8.rules.js'),
};
