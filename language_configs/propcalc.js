let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'propcalc',
    'grammar_file': 'propcalc.g4',
    'entry_rule': 'proposition',
    'rules': {
        'proposition': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'relExpression': {
            'finalizers': [
                collapse
            ]
        },
        'atoms': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
            'finalizers': [
                collapse
            ]
        },
        'equiv': {
            'finalizers': [
                collapse
            ]
        },
        'implies': {
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
