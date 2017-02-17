let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'snobol',
    'grammar_file': 'snobol.g4',
    'entry_rule': 'prog',
    'rules': {
        'prog': {
            'finalizers': [
                collapse
            ]
        },
        'lin': {
            'finalizers': [
                collapse
            ]
        },
        'line': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'subject': {
            'finalizers': [
                collapse
            ]
        },
        'pattern': {
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
        'command': {
            'finalizers': [
                collapse
            ]
        },
        'ident': {
            'finalizers': [
                collapse
            ]
        },
        'differ': {
            'finalizers': [
                collapse
            ]
        },
        'eq': {
            'finalizers': [
                collapse
            ]
        },
        'ne': {
            'finalizers': [
                collapse
            ]
        },
        'ge': {
            'finalizers': [
                collapse
            ]
        },
        'gt': {
            'finalizers': [
                collapse
            ]
        },
        'le': {
            'finalizers': [
                collapse
            ]
        },
        'lt': {
            'finalizers': [
                collapse
            ]
        },
        'integer': {
            'finalizers': [
                collapse
            ]
        },
        'lgt': {
            'finalizers': [
                collapse
            ]
        },
        'atan': {
            'finalizers': [
                collapse
            ]
        },
        'chop': {
            'finalizers': [
                collapse
            ]
        },
        'cos': {
            'finalizers': [
                collapse
            ]
        },
        'exp': {
            'finalizers': [
                collapse
            ]
        },
        'ln': {
            'finalizers': [
                collapse
            ]
        },
        'remdr': {
            'finalizers': [
                collapse
            ]
        },
        'sin': {
            'finalizers': [
                collapse
            ]
        },
        'tan': {
            'finalizers': [
                collapse
            ]
        },
        'dupl': {
            'finalizers': [
                collapse
            ]
        },
        'reverse': {
            'finalizers': [
                collapse
            ]
        },
        'date': {
            'finalizers': [
                collapse
            ]
        },
        'replace': {
            'finalizers': [
                collapse
            ]
        },
        'size': {
            'finalizers': [
                collapse
            ]
        },
        'trim': {
            'finalizers': [
                collapse
            ]
        },
        'array': {
            'finalizers': [
                collapse
            ]
        },
        'convert': {
            'finalizers': [
                collapse
            ]
        },
        'table': {
            'finalizers': [
                collapse
            ]
        },
        'sort': {
            'finalizers': [
                collapse
            ]
        },
        'break_': {
            'finalizers': [
                collapse
            ]
        },
        'transfer': {
            'finalizers': [
                collapse
            ]
        },
        'transferpre': {
            'finalizers': [
                collapse
            ]
        }
    }
};
