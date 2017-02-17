let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'arithmetic',
    'grammar_file': 'arithmetic.g4',
    'entry_rule': 'equation',
    'rules': {
        'equation': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
            'finalizers': [
                collapse
            ]
        },
        'scientific': {
            'finalizers': [
                collapse
            ]
        },
        'relop': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        }
    }
};
