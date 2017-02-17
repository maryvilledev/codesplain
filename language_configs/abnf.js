let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Abnf',
    'grammar_file': 'Abnf.g4',
    'entry_rule': 'rulelist',
    'rules': {
        'rulelist': {
            'finalizers': [
                collapse
            ]
        },
        'rule_': {
            'finalizers': [
                collapse
            ]
        },
        'elements': {
            'finalizers': [
                collapse
            ]
        },
        'alternation': {
            'finalizers': [
                collapse
            ]
        },
        'concatenation': {
            'finalizers': [
                collapse
            ]
        },
        'repetition': {
            'finalizers': [
                collapse
            ]
        },
        'repeat': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'group': {
            'finalizers': [
                collapse
            ]
        },
        'option': {
            'finalizers': [
                collapse
            ]
        }
    }
};
