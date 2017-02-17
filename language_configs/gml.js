let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'gml',
    'grammar_file': 'gml.g4',
    'entry_rule': 'graph',
    'rules': {
        'graph': {
            'finalizers': [
                collapse
            ]
        },
        'list': {
            'finalizers': [
                collapse
            ]
        },
        'kv': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'key': {
            'finalizers': [
                collapse
            ]
        },
        'integer': {
            'finalizers': [
                collapse
            ]
        },
        'realnum': {
            'finalizers': [
                collapse
            ]
        },
        'str': {
            'finalizers': [
                collapse
            ]
        },
        'stringliteral': {
            'finalizers': [
                collapse
            ]
        }
    }
};
