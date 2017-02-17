let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'DOT',
    'grammar_file': 'DOT.g4',
    'entry_rule': 'graph',
    'rules': {
        'graph': {
            'finalizers': [
                collapse
            ]
        },
        'stmt_list': {
            'finalizers': [
                collapse
            ]
        },
        'stmt': {
            'finalizers': [
                collapse
            ]
        },
        'attr_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'attr_list': {
            'finalizers': [
                collapse
            ]
        },
        'a_list': {
            'finalizers': [
                collapse
            ]
        },
        'edge_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'edgeRHS': {
            'finalizers': [
                collapse
            ]
        },
        'edgeop': {
            'finalizers': [
                collapse
            ]
        },
        'node_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'node_id': {
            'finalizers': [
                collapse
            ]
        },
        'port': {
            'finalizers': [
                collapse
            ]
        },
        'subgraph': {
            'finalizers': [
                collapse
            ]
        },
        'id': {
            'finalizers': [
                collapse
            ]
        }
    }
};
