let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'agc',
    'grammar_file': 'agc.g4',
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
        'blank_line': {
            'finalizers': [
                collapse
            ]
        },
        'comment_line': {
            'finalizers': [
                collapse
            ]
        },
        'instruction_line': {
            'finalizers': [
                collapse
            ]
        },
        'erase_line': {
            'finalizers': [
                collapse
            ]
        },
        'assignment_line': {
            'finalizers': [
                collapse
            ]
        },
        'opcodes': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'ws': {
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
        'inte': {
            'finalizers': [
                collapse
            ]
        },
        'decimal': {
            'finalizers': [
                collapse
            ]
        },
        'register': {
            'finalizers': [
                collapse
            ]
        },
        'opcode': {
            'finalizers': [
                collapse
            ]
        },
        'axt_opcode': {
            'finalizers': [
                collapse
            ]
        },
        'pseudo_opcode': {
            'finalizers': [
                collapse
            ]
        },
        'standard_opcode': {
            'finalizers': [
                collapse
            ]
        }
    }
};
