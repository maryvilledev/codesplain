let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'fasta',
    'grammar_file': 'fasta.g4',
    'entry_rule': 'sequence',
    'rules': {
        'sequence': {
            'finalizers': [
                collapse
            ]
        },
        'section': {
            'finalizers': [
                collapse
            ]
        },
        'sequencelines': {
            'finalizers': [
                collapse
            ]
        },
        'descriptionline': {
            'finalizers': [
                collapse
            ]
        },
        'commentline': {
            'finalizers': [
                collapse
            ]
        }
    }
};
