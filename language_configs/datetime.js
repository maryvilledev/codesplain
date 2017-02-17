let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'datetime',
    'grammar_file': 'datetime.g4',
    'entry_rule': 'date_time',
    'rules': {
        'date_time': {
            'finalizers': [
                collapse
            ]
        },
        'day': {
            'finalizers': [
                collapse
            ]
        },
        'date': {
            'finalizers': [
                collapse
            ]
        },
        'month': {
            'finalizers': [
                collapse
            ]
        },
        'time': {
            'finalizers': [
                collapse
            ]
        },
        'hour': {
            'finalizers': [
                collapse
            ]
        },
        'zone': {
            'finalizers': [
                collapse
            ]
        },
        'two_digit': {
            'finalizers': [
                collapse
            ]
        },
        'four_digit': {
            'finalizers': [
                collapse
            ]
        },
        'alphanumeric': {
            'finalizers': [
                collapse
            ]
        }
    }
};
