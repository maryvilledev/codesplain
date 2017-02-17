let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'pdp7',
    'grammar_file': 'pdp7.g4',
    'entry_rule': 'prog',
    'rules': {
        'prog': {
            'finalizers': [
                collapse
            ]
        },
        'line': {
            'finalizers': [
                collapse
            ]
        },
        'lineeol': {
            'finalizers': [
                collapse
            ]
        },
        'declarations': {
            'finalizers': [
                collapse
            ]
        },
        'declaration': {
            'finalizers': [
                collapse
            ]
        },
        'instruction': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'assignment': {
            'finalizers': [
                collapse
            ]
        },
        'symbol': {
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
        'atom': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'eol': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        },
        'opcode': {
            'finalizers': [
                collapse
            ]
        }
    }
};
