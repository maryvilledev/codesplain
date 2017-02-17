let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'mumath',
    'grammar_file': 'mumath.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'assignment': {
            'finalizers': [
                collapse
            ]
        },
        'list': {
            'finalizers': [
                collapse
            ]
        },
        'functionDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'actualParameter': {
            'finalizers': [
                collapse
            ]
        },
        'statments': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'loop': {
            'finalizers': [
                collapse
            ]
        },
        'when': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'relationalOperator': {
            'finalizers': [
                collapse
            ]
        },
        'simpleExpression': {
            'finalizers': [
                collapse
            ]
        },
        'addingOperator': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'multiplyingOperator': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'functionDesignator': {
            'finalizers': [
                collapse
            ]
        },
        'equal': {
            'finalizers': [
                collapse
            ]
        }
    }
};
