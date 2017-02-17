let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'calculator',
    'grammar_file': 'calculator.g4',
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
        'multiplyingExpression': {
            'finalizers': [
                collapse
            ]
        },
        'powExpression': {
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
        'func': {
            'finalizers': [
                collapse
            ]
        },
        'funcname': {
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
