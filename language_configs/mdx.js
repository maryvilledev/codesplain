let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'mdx',
    'grammar_file': 'mdx.g4',
    'entry_rule': 'mdx_statement',
    'rules': {
        'mdx_statement': {
            'finalizers': [
                collapse
            ]
        },
        'select_statement': {
            'finalizers': [
                collapse
            ]
        },
        'formula_specification': {
            'finalizers': [
                collapse
            ]
        },
        'single_formula_specification': {
            'finalizers': [
                collapse
            ]
        },
        'set_specification': {
            'finalizers': [
                collapse
            ]
        },
        'member_specification': {
            'finalizers': [
                collapse
            ]
        },
        'axis_specification_list': {
            'finalizers': [
                collapse
            ]
        },
        'member_property_def_list': {
            'finalizers': [
                collapse
            ]
        },
        'member_name': {
            'finalizers': [
                collapse
            ]
        },
        'member_property_definition': {
            'finalizers': [
                collapse
            ]
        },
        'set_name': {
            'finalizers': [
                collapse
            ]
        },
        'compound_id': {
            'finalizers': [
                collapse
            ]
        },
        'axis_specification': {
            'finalizers': [
                collapse
            ]
        },
        'axis_name': {
            'finalizers': [
                collapse
            ]
        },
        'dim_props': {
            'finalizers': [
                collapse
            ]
        },
        'property_list': {
            'finalizers': [
                collapse
            ]
        },
        'property': {
            'finalizers': [
                collapse
            ]
        },
        'cube_specification': {
            'finalizers': [
                collapse
            ]
        },
        'cube_name': {
            'finalizers': [
                collapse
            ]
        },
        'slicer_specification': {
            'finalizers': [
                collapse
            ]
        },
        'cell_props': {
            'finalizers': [
                collapse
            ]
        },
        'cell_property_list': {
            'finalizers': [
                collapse
            ]
        },
        'cell_property': {
            'finalizers': [
                collapse
            ]
        },
        'mandatory_cell_property': {
            'finalizers': [
                collapse
            ]
        },
        'provider_specific_cell_property': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'value_expression': {
            'finalizers': [
                collapse
            ]
        },
        'value_xor_expression': {
            'finalizers': [
                collapse
            ]
        },
        'value_or_expression': {
            'finalizers': [
                collapse
            ]
        },
        'term5': {
            'finalizers': [
                collapse
            ]
        },
        'term4': {
            'finalizers': [
                collapse
            ]
        },
        'term3': {
            'finalizers': [
                collapse
            ]
        },
        'term2': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'function': {
            'finalizers': [
                collapse
            ]
        },
        'value_expression_primary': {
            'finalizers': [
                collapse
            ]
        },
        'value_expression_primary0': {
            'finalizers': [
                collapse
            ]
        },
        'exp_list': {
            'finalizers': [
                collapse
            ]
        },
        'case_expression': {
            'finalizers': [
                collapse
            ]
        },
        'when_list': {
            'finalizers': [
                collapse
            ]
        },
        'when_clause': {
            'finalizers': [
                collapse
            ]
        },
        'comp_op': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'unquoted_identifier': {
            'finalizers': [
                collapse
            ]
        },
        'amp_quoted_identifier': {
            'finalizers': [
                collapse
            ]
        },
        'quoted_identifier': {
            'finalizers': [
                collapse
            ]
        },
        'keyword': {
            'finalizers': [
                collapse
            ]
        }
    }
};
