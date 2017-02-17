let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'TURTLE',
    'grammar_file': 'TURTLE.g4',
    'entry_rule': 'turtleDoc',
    'rules': {
        'turtleDoc': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'directive': {
            'finalizers': [
                collapse
            ]
        },
        'prefixID': {
            'finalizers': [
                collapse
            ]
        },
        'base': {
            'finalizers': [
                collapse
            ]
        },
        'sparqlBase': {
            'finalizers': [
                collapse
            ]
        },
        'sparqlPrefix': {
            'finalizers': [
                collapse
            ]
        },
        'triples': {
            'finalizers': [
                collapse
            ]
        },
        'predicateObjectList': {
            'finalizers': [
                collapse
            ]
        },
        'objectList': {
            'finalizers': [
                collapse
            ]
        },
        'verb': {
            'finalizers': [
                collapse
            ]
        },
        'subject': {
            'finalizers': [
                collapse
            ]
        },
        'predicate': {
            'finalizers': [
                collapse
            ]
        },
        'object': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'blankNodePropertyList': {
            'finalizers': [
                collapse
            ]
        },
        'collection': {
            'finalizers': [
                collapse
            ]
        },
        'rdfLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'iri': {
            'finalizers': [
                collapse
            ]
        }
    }
};
