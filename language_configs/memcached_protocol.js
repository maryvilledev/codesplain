let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'memcached_protocol',
    'grammar_file': 'memcached_protocol.g4',
    'entry_rule': 'command_line',
    'rules': {
        'command_line': {
            'finalizers': [
                collapse
            ]
        },
        'storage_command': {
            'finalizers': [
                collapse
            ]
        },
        'storage_command_name': {
            'finalizers': [
                collapse
            ]
        },
        'retrieval_command': {
            'finalizers': [
                collapse
            ]
        },
        'delete_command': {
            'finalizers': [
                collapse
            ]
        },
        'increment_command': {
            'finalizers': [
                collapse
            ]
        },
        'decrement_command': {
            'finalizers': [
                collapse
            ]
        },
        'statistics_command': {
            'finalizers': [
                collapse
            ]
        },
        'statistics_option': {
            'finalizers': [
                collapse
            ]
        },
        'flush_command': {
            'finalizers': [
                collapse
            ]
        },
        'version_command': {
            'finalizers': [
                collapse
            ]
        },
        'verbosity_command': {
            'finalizers': [
                collapse
            ]
        },
        'quit_command': {
            'finalizers': [
                collapse
            ]
        },
        'storage_response': {
            'finalizers': [
                collapse
            ]
        },
        'retrieval_response': {
            'finalizers': [
                collapse
            ]
        },
        'deletion_response': {
            'finalizers': [
                collapse
            ]
        },
        'incr_or_decr_response': {
            'finalizers': [
                collapse
            ]
        },
        'statistics_response': {
            'finalizers': [
                collapse
            ]
        },
        'error_response': {
            'finalizers': [
                collapse
            ]
        },
        'general_statistic': {
            'finalizers': [
                collapse
            ]
        },
        'size_statistic': {
            'finalizers': [
                collapse
            ]
        },
        'general_error': {
            'finalizers': [
                collapse
            ]
        },
        'client_error_message': {
            'finalizers': [
                collapse
            ]
        },
        'server_error_message': {
            'finalizers': [
                collapse
            ]
        },
        'end': {
            'finalizers': [
                collapse
            ]
        },
        'noreply': {
            'finalizers': [
                collapse
            ]
        },
        'key': {
            'finalizers': [
                collapse
            ]
        },
        'flags': {
            'finalizers': [
                collapse
            ]
        },
        'exptime': {
            'finalizers': [
                collapse
            ]
        },
        'bytes': {
            'finalizers': [
                collapse
            ]
        },
        'cas_unique': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'time': {
            'finalizers': [
                collapse
            ]
        },
        'delay': {
            'finalizers': [
                collapse
            ]
        },
        'verbosity_level': {
            'finalizers': [
                collapse
            ]
        },
        'statistic_name': {
            'finalizers': [
                collapse
            ]
        },
        'statistic_value': {
            'finalizers': [
                collapse
            ]
        },
        'size': {
            'finalizers': [
                collapse
            ]
        },
        'count': {
            'finalizers': [
                collapse
            ]
        }
    }
};
