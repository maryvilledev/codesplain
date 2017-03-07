let path = require('path');

module.exports = {
    'language': 'TreeMatcher',
    'grammar_path': path.resolve(__dirname, 'TreeMatcher.g4'),
    'entry_rule': 'main',
    'generate_listener': true,
    'rules': {
        'main': {},
        'node': {},
        'mod_type': {},
        'mod_terminal': {},
        'mod_store': {},
        'mod_eq': {},
        'mod_child': {},
        'mod_children': {},
        'child': {},
        'node_search': {},
        '.WS': {},
        '.IDENTIFIER': {},
        '.JSON_STRING': {},
    }
};
