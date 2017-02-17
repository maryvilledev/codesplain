let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'GraphQL',
    'grammar_file': 'GraphQL.g4',
    'entry_rule': 'document',
    'rules': {
        'document': {
            'finalizers': [
                collapse
            ]
        },
        'definition': {
            'finalizers': [
                collapse
            ]
        },
        'operationDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'selectionSet': {
            'finalizers': [
                collapse
            ]
        },
        'operationType': {
            'finalizers': [
                collapse
            ]
        },
        'selection': {
            'finalizers': [
                collapse
            ]
        },
        'field': {
            'finalizers': [
                collapse
            ]
        },
        'fieldName': {
            'finalizers': [
                collapse
            ]
        },
        'alias': {
            'finalizers': [
                collapse
            ]
        },
        'arguments': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'fragmentSpread': {
            'finalizers': [
                collapse
            ]
        },
        'inlineFragment': {
            'finalizers': [
                collapse
            ]
        },
        'fragmentDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'fragmentName': {
            'finalizers': [
                collapse
            ]
        },
        'directives': {
            'finalizers': [
                collapse
            ]
        },
        'directive': {
            'finalizers': [
                collapse
            ]
        },
        'typeCondition': {
            'finalizers': [
                collapse
            ]
        },
        'variableDefinitions': {
            'finalizers': [
                collapse
            ]
        },
        'variableDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        },
        'defaultValue': {
            'finalizers': [
                collapse
            ]
        },
        'valueOrVariable': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'typeName': {
            'finalizers': [
                collapse
            ]
        },
        'listType': {
            'finalizers': [
                collapse
            ]
        },
        'nonNullType': {
            'finalizers': [
                collapse
            ]
        },
        'array': {
            'finalizers': [
                collapse
            ]
        }
    }
};
