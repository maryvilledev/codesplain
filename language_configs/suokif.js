let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'SUOKIF',
    'grammar_file': 'SUOKIF.g4',
    'entry_rule': 'top_level',
    'rules': {
        'top_level': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'funterm': {
            'finalizers': [
                collapse
            ]
        },
        'sentence': {
            'finalizers': [
                collapse
            ]
        },
        'equation': {
            'finalizers': [
                collapse
            ]
        },
        'relsent': {
            'finalizers': [
                collapse
            ]
        },
        'logsent': {
            'finalizers': [
                collapse
            ]
        },
        'quantsent': {
            'finalizers': [
                collapse
            ]
        }
    }
};
