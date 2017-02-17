let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'telephone',
    'grammar_file': 'telephone.g4',
    'entry_rule': 'number',
    'rules': {
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'variation': {
            'finalizers': [
                collapse
            ]
        },
        'nanp': {
            'finalizers': [
                collapse
            ]
        },
        'areacode': {
            'finalizers': [
                collapse
            ]
        },
        'exchange': {
            'finalizers': [
                collapse
            ]
        },
        'subscriber': {
            'finalizers': [
                collapse
            ]
        },
        'japan': {
            'finalizers': [
                collapse
            ]
        }
    }
};
