let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'tinyc',
    'grammar_file': 'tinyc.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'paren_expr': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'test': {
            'finalizers': [
                collapse
            ]
        },
        'sum': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'id': {
            'finalizers': [
                collapse
            ]
        },
        'integer': {
            'finalizers': [
                collapse
            ]
        }
    }
};
