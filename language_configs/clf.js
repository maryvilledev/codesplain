let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'clf',
    'grammar_file': 'clf.g4',
    'entry_rule': 'log',
    'rules': {
        'log': {
            'finalizers': [
                collapse
            ]
        },
        'line': {
            'finalizers': [
                collapse
            ]
        },
        'host': {
            'finalizers': [
                collapse
            ]
        },
        'logname': {
            'finalizers': [
                collapse
            ]
        },
        'username': {
            'finalizers': [
                collapse
            ]
        },
        'datetimetz': {
            'finalizers': [
                collapse
            ]
        },
        'referer': {
            'finalizers': [
                collapse
            ]
        },
        'request': {
            'finalizers': [
                collapse
            ]
        },
        'useragent': {
            'finalizers': [
                collapse
            ]
        },
        'statuscode': {
            'finalizers': [
                collapse
            ]
        },
        'bytes': {
            'finalizers': [
                collapse
            ]
        }
    }
};
