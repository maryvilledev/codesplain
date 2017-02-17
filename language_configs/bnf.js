let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'bnf',
    'grammar_file': 'bnf.g4',
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
        'lhs': {
            'finalizers': [
                collapse
            ]
        },
        'rhs': {
            'finalizers': [
                collapse
            ]
        },
        'alternatives': {
            'finalizers': [
                collapse
            ]
        },
        'alternative': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'optional': {
            'finalizers': [
                collapse
            ]
        },
        'zeroormore': {
            'finalizers': [
                collapse
            ]
        },
        'oneormore': {
            'finalizers': [
                collapse
            ]
        },
        'text': {
            'finalizers': [
                collapse
            ]
        },
        'id': {
            'finalizers': [
                collapse
            ]
        },
        'ruleid': {
            'finalizers': [
                collapse
            ]
        }
    }
};
