let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'gff3',
    'grammar_file': 'gff3.g4',
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
        'dataline': {
            'finalizers': [
                collapse
            ]
        },
        'attributes': {
            'finalizers': [
                collapse
            ]
        },
        'attribute': {
            'finalizers': [
                collapse
            ]
        },
        'seqid': {
            'finalizers': [
                collapse
            ]
        },
        'source': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'start': {
            'finalizers': [
                collapse
            ]
        },
        'end': {
            'finalizers': [
                collapse
            ]
        },
        'strand': {
            'finalizers': [
                collapse
            ]
        },
        'score': {
            'finalizers': [
                collapse
            ]
        },
        'phase': {
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
