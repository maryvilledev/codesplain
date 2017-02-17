let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'useragent',
    'grammar_file': 'useragent.g4',
    'entry_rule': 'prog',
    'rules': {
        'prog': {
            'finalizers': [
                collapse
            ]
        },
        'product': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'version': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        }
    }
};
