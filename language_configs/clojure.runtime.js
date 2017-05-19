// Configuration that can be read by both the compiler and the runtime.

module.exports = {
    'language': 'Clojure',
    'entry_rule': 'file',
    'rules': require('./clojure.rules.js'),
};
