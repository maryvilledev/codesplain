let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'sexpression',
    'grammar_file': 'sexpression.g4',
    'entry_rule': 'sexpr',
    'rules': {
        'sexpr': {
            'finalizers': [
                collapse
            ]
        },
        'item': {
            'finalizers': [
                collapse
            ]
        },
        'list': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
            'finalizers': [
                collapse
            ]
        }
    }
};
