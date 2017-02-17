let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'CLIF',
    'grammar_file': 'CLIF.g4',
    'entry_rule': 'termseq',
    'rules': {
        'termseq': {
            'finalizers': [
                collapse
            ]
        },
        'interpretedname': {
            'finalizers': [
                collapse
            ]
        },
        'interpretablename': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'operator': {
            'finalizers': [
                collapse
            ]
        },
        'equation': {
            'finalizers': [
                collapse
            ]
        },
        'sentence': {
            'finalizers': [
                collapse
            ]
        },
        'atomsent': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
            'finalizers': [
                collapse
            ]
        },
        'predicate': {
            'finalizers': [
                collapse
            ]
        },
        'boolsent': {
            'finalizers': [
                collapse
            ]
        },
        'quantsent': {
            'finalizers': [
                collapse
            ]
        },
        'boundlist': {
            'finalizers': [
                collapse
            ]
        },
        'commentsent': {
            'finalizers': [
                collapse
            ]
        },
        'module': {
            'finalizers': [
                collapse
            ]
        },
        'phrase': {
            'finalizers': [
                collapse
            ]
        },
        'text': {
            'finalizers': [
                collapse
            ]
        },
        'cltext': {
            'finalizers': [
                collapse
            ]
        },
        'namedtext': {
            'finalizers': [
                collapse
            ]
        }
    }
};
