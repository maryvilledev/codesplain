let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'R',
    'grammar_file': 'R.g4',
    'entry_rule': 'http',
    'rules': {
        'prog': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'exprlist': {
            'finalizers': [
                collapse
            ]
        },
        'formlist': {
            'finalizers': [
                collapse
            ]
        },
        'form': {
            'finalizers': [
                collapse
            ]
        },
        'sublist': {
            'finalizers': [
                collapse
            ]
        },
        'sub': {
            'finalizers': [
                collapse
            ]
        }
    }
};
