let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'PGN',
    'grammar_file': 'PGN.g4',
    'entry_rule': 'parse',
    'rules': {
        'parse': {
            'finalizers': [
                collapse
            ]
        },
        'pgn_database': {
            'finalizers': [
                collapse
            ]
        },
        'pgn_game': {
            'finalizers': [
                collapse
            ]
        },
        'tag_section': {
            'finalizers': [
                collapse
            ]
        },
        'tag_pair': {
            'finalizers': [
                collapse
            ]
        },
        'tag_name': {
            'finalizers': [
                collapse
            ]
        },
        'tag_value': {
            'finalizers': [
                collapse
            ]
        },
        'movetext_section': {
            'finalizers': [
                collapse
            ]
        },
        'element_sequence': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'move_number_indication': {
            'finalizers': [
                collapse
            ]
        },
        'san_move': {
            'finalizers': [
                collapse
            ]
        },
        'recursive_variation': {
            'finalizers': [
                collapse
            ]
        },
        'game_termination': {
            'finalizers': [
                collapse
            ]
        }
    }
};
