let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'RCS',
    'grammar_file': 'RCS.g4',
    'entry_rule': 'rcstext',
    'rules': {
        'rcstext': {
            'finalizers': [
                collapse
            ]
        },
        'rcsheader': {
            'finalizers': [
                collapse
            ]
        },
        'rcsrevisions': {
            'finalizers': [
                collapse
            ]
        },
        'admin': {
            'finalizers': [
                collapse
            ]
        },
        'head': {
            'finalizers': [
                collapse
            ]
        },
        'branch': {
            'finalizers': [
                collapse
            ]
        },
        'access': {
            'finalizers': [
                collapse
            ]
        },
        'symbols': {
            'finalizers': [
                collapse
            ]
        },
        'tags': {
            'finalizers': [
                collapse
            ]
        },
        'locks': {
            'finalizers': [
                collapse
            ]
        },
        'strict': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'expand': {
            'finalizers': [
                collapse
            ]
        },
        'deltalist': {
            'finalizers': [
                collapse
            ]
        },
        'delta': {
            'finalizers': [
                collapse
            ]
        },
        'delta_date': {
            'finalizers': [
                collapse
            ]
        },
        'delta_author': {
            'finalizers': [
                collapse
            ]
        },
        'delta_state': {
            'finalizers': [
                collapse
            ]
        },
        'delta_branches': {
            'finalizers': [
                collapse
            ]
        },
        'delta_next': {
            'finalizers': [
                collapse
            ]
        },
        'desc': {
            'finalizers': [
                collapse
            ]
        },
        'deltatextlist': {
            'finalizers': [
                collapse
            ]
        },
        'deltatext': {
            'finalizers': [
                collapse
            ]
        },
        'deltatext_log': {
            'finalizers': [
                collapse
            ]
        },
        'deltatext_text': {
            'finalizers': [
                collapse
            ]
        },
        'newphrase': {
            'finalizers': [
                collapse
            ]
        }
    }
};
