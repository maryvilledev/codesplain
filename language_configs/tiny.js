let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'tiny',
    'grammar_file': 'tiny.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'stmt_list': {
            'finalizers': [
                collapse
            ]
        },
        'stmt': {
            'finalizers': [
                collapse
            ]
        },
        'assign_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'read_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'write_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'id_list': {
            'finalizers': [
                collapse
            ]
        },
        'expr_list': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'integer': {
            'finalizers': [
                collapse
            ]
        },
        'op': {
            'finalizers': [
                collapse
            ]
        },
        'ident': {
            'finalizers': [
                collapse
            ]
        }
    }
};
