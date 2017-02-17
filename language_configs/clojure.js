let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Clojure',
    'grammar_file': 'Clojure.g4',
    'entry_rule': 'file',
    'rules': {
        'file': {
            'finalizers': [
                collapse
            ]
        },
        'form': {
            'finalizers': [
                collapse
            ]
        },
        'forms': {
            'finalizers': [
                collapse
            ]
        },
        'list': {
            'finalizers': [
                collapse
            ]
        },
        'vector': {
            'finalizers': [
                collapse
            ]
        },
        'map': {
            'finalizers': [
                collapse
            ]
        },
        'set': {
            'finalizers': [
                collapse
            ]
        },
        'reader_macro': {
            'finalizers': [
                collapse
            ]
        },
        'quote': {
            'finalizers': [
                collapse
            ]
        },
        'backtick': {
            'finalizers': [
                collapse
            ]
        },
        'unquote': {
            'finalizers': [
                collapse
            ]
        },
        'unquote_splicing': {
            'finalizers': [
                collapse
            ]
        },
        'tag': {
            'finalizers': [
                collapse
            ]
        },
        'deref': {
            'finalizers': [
                collapse
            ]
        },
        'gensym': {
            'finalizers': [
                collapse
            ]
        },
        'lambda': {
            'finalizers': [
                collapse
            ]
        },
        'meta_data': {
            'finalizers': [
                collapse
            ]
        },
        'var_quote': {
            'finalizers': [
                collapse
            ]
        },
        'host_expr': {
            'finalizers': [
                collapse
            ]
        },
        'discard': {
            'finalizers': [
                collapse
            ]
        },
        'dispatch': {
            'finalizers': [
                collapse
            ]
        },
        'regex': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'hex': {
            'finalizers': [
                collapse
            ]
        },
        'bin': {
            'finalizers': [
                collapse
            ]
        },
        'bign': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'character': {
            'finalizers': [
                collapse
            ]
        },
        'named_char': {
            'finalizers': [
                collapse
            ]
        },
        'any_char': {
            'finalizers': [
                collapse
            ]
        },
        'u_hex_quad': {
            'finalizers': [
                collapse
            ]
        },
        'nil': {
            'finalizers': [
                collapse
            ]
        },
        'keyword': {
            'finalizers': [
                collapse
            ]
        },
        'simple_keyword': {
            'finalizers': [
                collapse
            ]
        },
        'macro_keyword': {
            'finalizers': [
                collapse
            ]
        },
        'symbol': {
            'finalizers': [
                collapse
            ]
        },
        'simple_sym': {
            'finalizers': [
                collapse
            ]
        },
        'ns_symbol': {
            'finalizers': [
                collapse
            ]
        },
        'param_name': {
            'finalizers': [
                collapse
            ]
        }
    }
};
