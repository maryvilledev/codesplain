let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'mumps',
    'grammar_file': 'mumps.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'eof': {
            'finalizers': [
                collapse
            ]
        },
        'line': {
            'finalizers': [
                collapse
            ]
        },
        'code': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'routinedecl': {
            'finalizers': [
                collapse
            ]
        },
        'paramlist': {
            'finalizers': [
                collapse
            ]
        },
        'param': {
            'finalizers': [
                collapse
            ]
        },
        'subproc': {
            'finalizers': [
                collapse
            ]
        },
        'command': {
            'finalizers': [
                collapse
            ]
        },
        'postcondition': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'condition': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        },
        'break_': {
            'finalizers': [
                collapse
            ]
        },
        'do_': {
            'finalizers': [
                collapse
            ]
        },
        'for_': {
            'finalizers': [
                collapse
            ]
        },
        'halt_': {
            'finalizers': [
                collapse
            ]
        },
        'hang_': {
            'finalizers': [
                collapse
            ]
        },
        'if_': {
            'finalizers': [
                collapse
            ]
        },
        'kill_': {
            'finalizers': [
                collapse
            ]
        },
        'merge_': {
            'finalizers': [
                collapse
            ]
        },
        'new_': {
            'finalizers': [
                collapse
            ]
        },
        'quit_': {
            'finalizers': [
                collapse
            ]
        },
        'read_': {
            'finalizers': [
                collapse
            ]
        },
        'set_': {
            'finalizers': [
                collapse
            ]
        },
        'view_': {
            'finalizers': [
                collapse
            ]
        },
        'write_': {
            'finalizers': [
                collapse
            ]
        },
        'xecute_': {
            'finalizers': [
                collapse
            ]
        },
        'assign': {
            'finalizers': [
                collapse
            ]
        },
        'arglist': {
            'finalizers': [
                collapse
            ]
        },
        'arg': {
            'finalizers': [
                collapse
            ]
        }
    }
};
