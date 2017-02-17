let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'JSON',
    'grammar_file': 'JSON.g4',
    'entry_rule': 'json',
    'rules': {
        'json': {
            'finalizers': [
                collapse
            ]
        },
        'obj': {
            'finalizers': [
                collapse
            ]
        },
        'pair': {
            'finalizers': [
                collapse
            ]
        },
        'array': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        }
    }
};
