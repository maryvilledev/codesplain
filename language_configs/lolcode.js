let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'lolcode',
    'grammar_file': 'lolcode.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'code_block': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'loop': {
            'finalizers': [
                collapse
            ]
        },
        'declaration': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'print_block': {
            'finalizers': [
                collapse
            ]
        },
        'if_block': {
            'finalizers': [
                collapse
            ]
        },
        'else_if_block': {
            'finalizers': [
                collapse
            ]
        },
        'input_block': {
            'finalizers': [
                collapse
            ]
        },
        'func_decl': {
            'finalizers': [
                collapse
            ]
        },
        'assignment': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'equals': {
            'finalizers': [
                collapse
            ]
        },
        'not_equals': {
            'finalizers': [
                collapse
            ]
        },
        'both': {
            'finalizers': [
                collapse
            ]
        },
        'either': {
            'finalizers': [
                collapse
            ]
        },
        'greater': {
            'finalizers': [
                collapse
            ]
        },
        'less': {
            'finalizers': [
                collapse
            ]
        },
        'add': {
            'finalizers': [
                collapse
            ]
        },
        'sub': {
            'finalizers': [
                collapse
            ]
        },
        'mul': {
            'finalizers': [
                collapse
            ]
        },
        'div': {
            'finalizers': [
                collapse
            ]
        },
        'mod': {
            'finalizers': [
                collapse
            ]
        },
        'cast': {
            'finalizers': [
                collapse
            ]
        },
        'all': {
            'finalizers': [
                collapse
            ]
        },
        'any': {
            'finalizers': [
                collapse
            ]
        },
        'not': {
            'finalizers': [
                collapse
            ]
        },
        'func': {
            'finalizers': [
                collapse
            ]
        }
    }
};
