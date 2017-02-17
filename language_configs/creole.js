let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'creole',
    'grammar_file': 'creole.g4',
    'entry_rule': 'document',
    'rules': {
        'document': {
            'finalizers': [
                collapse
            ]
        },
        'line': {
            'finalizers': [
                collapse
            ]
        },
        'markup': {
            'finalizers': [
                collapse
            ]
        },
        'text': {
            'finalizers': [
                collapse
            ]
        },
        'bold': {
            'finalizers': [
                collapse
            ]
        },
        'italics': {
            'finalizers': [
                collapse
            ]
        },
        'href': {
            'finalizers': [
                collapse
            ]
        },
        'image': {
            'finalizers': [
                collapse
            ]
        },
        'hline': {
            'finalizers': [
                collapse
            ]
        },
        'listitem': {
            'finalizers': [
                collapse
            ]
        },
        'tableheader': {
            'finalizers': [
                collapse
            ]
        },
        'tablerow': {
            'finalizers': [
                collapse
            ]
        },
        'title': {
            'finalizers': [
                collapse
            ]
        },
        'nowiki': {
            'finalizers': [
                collapse
            ]
        }
    }
};
