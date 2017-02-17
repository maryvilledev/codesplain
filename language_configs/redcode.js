let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'redcode',
    'grammar_file': 'redcode.g4',
    'entry_rule': 'file',
    'rules': {
        'file': {
            'finalizers': [
                collapse
            ]
        },
        'line': {
            'finalizers': [
                collapse
            ]
        },
        'instruction': {
            'finalizers': [
                collapse
            ]
        },
        'opcode': {
            'finalizers': [
                collapse
            ]
        },
        'modifier': {
            'finalizers': [
                collapse
            ]
        },
        'mmode': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        }
    }
};
