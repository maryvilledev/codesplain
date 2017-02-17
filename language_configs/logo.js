let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'logo',
    'grammar_file': 'logo.g4',
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
        'cmd': {
            'finalizers': [
                collapse
            ]
        },
        'procedureInvocation': {
            'finalizers': [
                collapse
            ]
        },
        'procedureDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'parameterDeclarations': {
            'finalizers': [
                collapse
            ]
        },
        'func': {
            'finalizers': [
                collapse
            ]
        },
        'repeat': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'ife': {
            'finalizers': [
                collapse
            ]
        },
        'comparison': {
            'finalizers': [
                collapse
            ]
        },
        'comparisonOperator': {
            'finalizers': [
                collapse
            ]
        },
        'make': {
            'finalizers': [
                collapse
            ]
        },
        'print': {
            'finalizers': [
                collapse
            ]
        },
        'quotedstring': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'signExpression': {
            'finalizers': [
                collapse
            ]
        },
        'multiplyingExpression': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'deref': {
            'finalizers': [
                collapse
            ]
        },
        'fd': {
            'finalizers': [
                collapse
            ]
        },
        'bk': {
            'finalizers': [
                collapse
            ]
        },
        'rt': {
            'finalizers': [
                collapse
            ]
        },
        'lt': {
            'finalizers': [
                collapse
            ]
        },
        'cs': {
            'finalizers': [
                collapse
            ]
        },
        'pu': {
            'finalizers': [
                collapse
            ]
        },
        'pd': {
            'finalizers': [
                collapse
            ]
        },
        'ht': {
            'finalizers': [
                collapse
            ]
        },
        'st': {
            'finalizers': [
                collapse
            ]
        },
        'home': {
            'finalizers': [
                collapse
            ]
        },
        'stop': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'setxy': {
            'finalizers': [
                collapse
            ]
        },
        'random': {
            'finalizers': [
                collapse
            ]
        },
        'fore': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        }
    }
};
