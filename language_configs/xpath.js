let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'xpath',
    'grammar_file': 'xpath.g4',
    'entry_rule': 'http',
    'rules': {
        'main': {
            'finalizers': [
                collapse
            ]
        },
        'locationPath': {
            'finalizers': [
                collapse
            ]
        },
        'absoluteLocationPathNoroot': {
            'finalizers': [
                collapse
            ]
        },
        'relativeLocationPath': {
            'finalizers': [
                collapse
            ]
        },
        'step': {
            'finalizers': [
                collapse
            ]
        },
        'axisSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'nodeTest': {
            'finalizers': [
                collapse
            ]
        },
        'predicate': {
            'finalizers': [
                collapse
            ]
        },
        'abbreviatedStep': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'primaryExpr': {
            'finalizers': [
                collapse
            ]
        },
        'functionCall': {
            'finalizers': [
                collapse
            ]
        },
        'unionExprNoRoot': {
            'finalizers': [
                collapse
            ]
        },
        'pathExprNoRoot': {
            'finalizers': [
                collapse
            ]
        },
        'filterExpr': {
            'finalizers': [
                collapse
            ]
        },
        'orExpr': {
            'finalizers': [
                collapse
            ]
        },
        'andExpr': {
            'finalizers': [
                collapse
            ]
        },
        'equalityExpr': {
            'finalizers': [
                collapse
            ]
        },
        'relationalExpr': {
            'finalizers': [
                collapse
            ]
        },
        'additiveExpr': {
            'finalizers': [
                collapse
            ]
        },
        'multiplicativeExpr': {
            'finalizers': [
                collapse
            ]
        },
        'unaryExprNoRoot': {
            'finalizers': [
                collapse
            ]
        },
        'qName': {
            'finalizers': [
                collapse
            ]
        },
        'functionName': {
            'finalizers': [
                collapse
            ]
        },
        'variableReference': {
            'finalizers': [
                collapse
            ]
        },
        'nameTest': {
            'finalizers': [
                collapse
            ]
        },
        'nCName': {
            'finalizers': [
                collapse
            ]
        }
    }
};
