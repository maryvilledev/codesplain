let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'asm6502',
    'grammar_file': 'asm6502.g4',
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
        'instruction': {
            'finalizers': [
                collapse
            ]
        },
        'assemblerinstruction': {
            'finalizers': [
                collapse
            ]
        },
        'assembleropcode': {
            'finalizers': [
                collapse
            ]
        },
        'lbl': {
            'finalizers': [
                collapse
            ]
        },
        'argumentlist': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'prefix': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
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
        },
        'opcode': {
            'finalizers': [
                collapse
            ]
        }
    }
};
