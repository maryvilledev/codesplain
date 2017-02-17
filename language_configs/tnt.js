let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'tnt',
    'grammar_file': 'tnt.g4',
    'entry_rule': 'equation',
    'rules': {
        'equation': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
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
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'forevery': {
            'finalizers': [
                collapse
            ]
        },
        'exists': {
            'finalizers': [
                collapse
            ]
        }
    }
};
