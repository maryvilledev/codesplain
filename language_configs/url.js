let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'url',
    'grammar_file': 'url.g4',
    'entry_rule': 'fragmentaddress',
    'rules': {
        'fragmentaddress': {
            'finalizers': [
                collapse
            ]
        },
        'uri': {
            'finalizers': [
                collapse
            ]
        },
        'url': {
            'finalizers': [
                collapse
            ]
        },
        'authority': {
            'finalizers': [
                collapse
            ]
        },
        'host': {
            'finalizers': [
                collapse
            ]
        },
        'cellname': {
            'finalizers': [
                collapse
            ]
        },
        'hostname': {
            'finalizers': [
                collapse
            ]
        },
        'hostnumber': {
            'finalizers': [
                collapse
            ]
        },
        'port': {
            'finalizers': [
                collapse
            ]
        },
        'path': {
            'finalizers': [
                collapse
            ]
        },
        'search': {
            'finalizers': [
                collapse
            ]
        },
        'searchparameter': {
            'finalizers': [
                collapse
            ]
        },
        'user': {
            'finalizers': [
                collapse
            ]
        },
        'login': {
            'finalizers': [
                collapse
            ]
        },
        'password': {
            'finalizers': [
                collapse
            ]
        },
        'fragmentid': {
            'finalizers': [
                collapse
            ]
        }
    }
};
