let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'StackTrace',
    'grammar_file': 'StackTrace.g4',
    'entry_rule': 'startRule',
    'rules': {
        'startRule': {
            'finalizers': [
                collapse
            ]
        },
        'stackTrace': {
            'finalizers': [
                collapse
            ]
        },
        'stackTraceLine': {
            'finalizers': [
                collapse
            ]
        },
        'atLine': {
            'finalizers': [
                collapse
            ]
        },
        'causedByLine': {
            'finalizers': [
                collapse
            ]
        },
        'ellipsisLine': {
            'finalizers': [
                collapse
            ]
        },
        'messageLine': {
            'finalizers': [
                collapse
            ]
        },
        'qualifiedClass': {
            'finalizers': [
                collapse
            ]
        },
        'innerClassName': {
            'finalizers': [
                collapse
            ]
        },
        'classFile': {
            'finalizers': [
                collapse
            ]
        },
        'qualifiedMethod': {
            'finalizers': [
                collapse
            ]
        },
        'constructor': {
            'finalizers': [
                collapse
            ]
        },
        'methodName': {
            'finalizers': [
                collapse
            ]
        },
        'packagePath': {
            'finalizers': [
                collapse
            ]
        },
        'className': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'message': {
            'finalizers': [
                collapse
            ]
        }
    }
};
