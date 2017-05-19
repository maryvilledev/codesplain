// Configuration that can be read by both the compiler and the runtime.

module.exports = {
    'language': 'Lua',
    'entry_rule': 'chunk',
    'rules': require('./lua.rules.js'),
};
