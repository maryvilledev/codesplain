let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'CSV',
    'grammar_file': 'CSV.g4',
    'entry_rule': 'csvFile',
    'rules': {
        'csvFile': {
            'finalizers': [
                collapse
            ]
        },
        'hdr': {
            'finalizers': [
                collapse
            ]
        },
        'row': {
            'finalizers': [
                collapse
            ]
        },
        'field': {
            'finalizers': [
                collapse
            ]
        }
    }
};
