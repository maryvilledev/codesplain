let path = require('path');

module.exports = {
    'language': 'TreeMatcher',
    'grammar_path': path.resolve(__dirname, 'TreeMatcher.g4'),
    'entry_rule': 'main',
    'generate_listener': true,
    'rules': {
        'main': {},
        'node': {},
        'descend': {},
        'modifier_type': {},
        'modifier_type_node': {},
        'modifier_type_terminal': {},
        'modifier_store': {},
        'modifier_eq': {},
        'modifier_child': {},
        'modifier_children': {},
        'child': {},
        'node_search': {},
        'ident': {},
        'json_string': {},
    }
};
