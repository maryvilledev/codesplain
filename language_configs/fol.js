let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'fol',
    'grammar_file': 'fol.g4',
    'entry_rule': 'condition',
    'rules': {
        'condition': {
            'finalizers': [
                collapse
            ]
        },
        'formula': {
            'finalizers': [
                collapse
            ]
        },
        'disjunction': {
            'finalizers': [
                collapse
            ]
        },
        'conjunction': {
            'finalizers': [
                collapse
            ]
        },
        'negation': {
            'finalizers': [
                collapse
            ]
        },
        'predicate': {
            'finalizers': [
                collapse
            ]
        },
        'predicateTuple': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'function': {
            'finalizers': [
                collapse
            ]
        },
        'functionTuple': {
            'finalizers': [
                collapse
            ]
        }
    }
};
