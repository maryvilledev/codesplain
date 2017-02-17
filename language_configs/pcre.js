let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'PCRE',
    'grammar_file': 'PCRE.g4',
    'entry_rule': 'parse',
    'rules': {
        'parse': {
            'finalizers': [
                collapse
            ]
        },
        'alternation': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'quantifier': {
            'finalizers': [
                collapse
            ]
        },
        'quantifier_type': {
            'finalizers': [
                collapse
            ]
        },
        'character_class': {
            'finalizers': [
                collapse
            ]
        },
        'backreference': {
            'finalizers': [
                collapse
            ]
        },
        'backreference_or_octal': {
            'finalizers': [
                collapse
            ]
        },
        'capture': {
            'finalizers': [
                collapse
            ]
        },
        'non_capture': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'option': {
            'finalizers': [
                collapse
            ]
        },
        'option_flags': {
            'finalizers': [
                collapse
            ]
        },
        'option_flag': {
            'finalizers': [
                collapse
            ]
        },
        'look_around': {
            'finalizers': [
                collapse
            ]
        },
        'subroutine_reference': {
            'finalizers': [
                collapse
            ]
        },
        'conditional': {
            'finalizers': [
                collapse
            ]
        },
        'backtrack_control': {
            'finalizers': [
                collapse
            ]
        },
        'newline_convention': {
            'finalizers': [
                collapse
            ]
        },
        'callout': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
            'finalizers': [
                collapse
            ]
        },
        'cc_atom': {
            'finalizers': [
                collapse
            ]
        },
        'shared_atom': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'cc_literal': {
            'finalizers': [
                collapse
            ]
        },
        'shared_literal': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'octal_char': {
            'finalizers': [
                collapse
            ]
        },
        'octal_digit': {
            'finalizers': [
                collapse
            ]
        },
        'digits': {
            'finalizers': [
                collapse
            ]
        },
        'digit': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'alpha_nums': {
            'finalizers': [
                collapse
            ]
        },
        'non_close_parens': {
            'finalizers': [
                collapse
            ]
        },
        'non_close_paren': {
            'finalizers': [
                collapse
            ]
        },
        'letter': {
            'finalizers': [
                collapse
            ]
        }
    }
};
