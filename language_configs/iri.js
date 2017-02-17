let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'IRI',
    'grammar_file': 'IRI.g4',
    'entry_rule': 'parse',
    'rules': {
        'parse': {
            'finalizers': [
                collapse
            ]
        },
        'iri': {
            'finalizers': [
                collapse
            ]
        },
        'ihier_part': {
            'finalizers': [
                collapse
            ]
        },
        'iri_reference': {
            'finalizers': [
                collapse
            ]
        },
        'absolute_iri': {
            'finalizers': [
                collapse
            ]
        },
        'irelative_ref': {
            'finalizers': [
                collapse
            ]
        },
        'irelative_part': {
            'finalizers': [
                collapse
            ]
        },
        'iauthority': {
            'finalizers': [
                collapse
            ]
        },
        'iuserinfo': {
            'finalizers': [
                collapse
            ]
        },
        'ihost': {
            'finalizers': [
                collapse
            ]
        },
        'ireg_name': {
            'finalizers': [
                collapse
            ]
        },
        'ipath': {
            'finalizers': [
                collapse
            ]
        },
        'ipath_abempty': {
            'finalizers': [
                collapse
            ]
        },
        'ipath_absolute': {
            'finalizers': [
                collapse
            ]
        },
        'ipath_noscheme': {
            'finalizers': [
                collapse
            ]
        },
        'ipath_rootless': {
            'finalizers': [
                collapse
            ]
        },
        'ipath_empty': {
            'finalizers': [
                collapse
            ]
        },
        'isegment': {
            'finalizers': [
                collapse
            ]
        },
        'isegment_nz': {
            'finalizers': [
                collapse
            ]
        },
        'isegment_nz_nc': {
            'finalizers': [
                collapse
            ]
        },
        'ipchar': {
            'finalizers': [
                collapse
            ]
        },
        'iquery': {
            'finalizers': [
                collapse
            ]
        },
        'ifragment': {
            'finalizers': [
                collapse
            ]
        },
        'iunreserved': {
            'finalizers': [
                collapse
            ]
        },
        'scheme': {
            'finalizers': [
                collapse
            ]
        },
        'port': {
            'finalizers': [
                collapse
            ]
        },
        'ip_literal': {
            'finalizers': [
                collapse
            ]
        },
        'ip_v_future': {
            'finalizers': [
                collapse
            ]
        },
        'ip_v6_address': {
            'finalizers': [
                collapse
            ]
        },
        'h16': {
            'finalizers': [
                collapse
            ]
        },
        'ls32': {
            'finalizers': [
                collapse
            ]
        },
        'ip_v4_address': {
            'finalizers': [
                collapse
            ]
        },
        'dec_octet': {
            'finalizers': [
                collapse
            ]
        },
        'pct_encoded': {
            'finalizers': [
                collapse
            ]
        },
        'unreserved': {
            'finalizers': [
                collapse
            ]
        },
        'reserved': {
            'finalizers': [
                collapse
            ]
        },
        'gen_delims': {
            'finalizers': [
                collapse
            ]
        },
        'sub_delims': {
            'finalizers': [
                collapse
            ]
        },
        'alpha': {
            'finalizers': [
                collapse
            ]
        },
        'hexdig': {
            'finalizers': [
                collapse
            ]
        },
        'digit': {
            'finalizers': [
                collapse
            ]
        },
        'non_zero_digit': {
            'finalizers': [
                collapse
            ]
        }
    }
};
