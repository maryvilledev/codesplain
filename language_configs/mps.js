let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'mps',
    'grammar_file': 'mps.g4',
    'entry_rule': 'modell',
    'rules': {
        'modell': {
            'finalizers': [
                collapse
            ]
        },
        'firstrow': {
            'finalizers': [
                collapse
            ]
        },
        'rows': {
            'finalizers': [
                collapse
            ]
        },
        'columns': {
            'finalizers': [
                collapse
            ]
        },
        'rhs': {
            'finalizers': [
                collapse
            ]
        },
        'ranges': {
            'finalizers': [
                collapse
            ]
        },
        'bounds': {
            'finalizers': [
                collapse
            ]
        },
        'endata': {
            'finalizers': [
                collapse
            ]
        },
        'rowdatacard': {
            'finalizers': [
                collapse
            ]
        },
        'columndatacards': {
            'finalizers': [
                collapse
            ]
        },
        'rhsdatacards': {
            'finalizers': [
                collapse
            ]
        },
        'rangesdatacards': {
            'finalizers': [
                collapse
            ]
        },
        'boundsdatacards': {
            'finalizers': [
                collapse
            ]
        },
        'columndatacard': {
            'finalizers': [
                collapse
            ]
        },
        'rhsdatacard': {
            'finalizers': [
                collapse
            ]
        },
        'rangesdatacard': {
            'finalizers': [
                collapse
            ]
        },
        'boundsdatacard': {
            'finalizers': [
                collapse
            ]
        },
        'intblock': {
            'finalizers': [
                collapse
            ]
        },
        'startmarker': {
            'finalizers': [
                collapse
            ]
        },
        'endmarker': {
            'finalizers': [
                collapse
            ]
        }
    }
};
