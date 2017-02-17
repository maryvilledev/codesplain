let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'postalcode',
    'grammar_file': 'postalcode.g4',
    'entry_rule': 'postalcode',
    'rules': {
        'postalcode': {
            'finalizers': [
                collapse
            ]
        }
    }
};
