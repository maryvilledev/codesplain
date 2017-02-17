let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'MuParser',
    'grammar_file': 'MuParser.g4',
    'entry_rule': 'prog',
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
        'atom': {
            'finalizers': [
                collapse
            ]
        }
    }
};
