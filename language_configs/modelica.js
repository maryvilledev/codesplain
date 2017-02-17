let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'modelica',
    'grammar_file': 'modelica.g4',
    'entry_rule': 'stored_definition',
    'rules': {
        'stored_definition': {
            'finalizers': [
                collapse
            ]
        },
        'class_definition': {
            'finalizers': [
                collapse
            ]
        },
        'class_specifier': {
            'finalizers': [
                collapse
            ]
        },
        'class_prefixes': {
            'finalizers': [
                collapse
            ]
        },
        'long_class_specifier': {
            'finalizers': [
                collapse
            ]
        },
        'short_class_specifier': {
            'finalizers': [
                collapse
            ]
        },
        'der_class_specifier': {
            'finalizers': [
                collapse
            ]
        },
        'base_prefix': {
            'finalizers': [
                collapse
            ]
        },
        'enum_list': {
            'finalizers': [
                collapse
            ]
        },
        'enumeration_literal': {
            'finalizers': [
                collapse
            ]
        },
        'composition': {
            'finalizers': [
                collapse
            ]
        },
        'language_specification': {
            'finalizers': [
                collapse
            ]
        },
        'external_function_call': {
            'finalizers': [
                collapse
            ]
        },
        'element_list': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'import_clause': {
            'finalizers': [
                collapse
            ]
        },
        'import_list': {
            'finalizers': [
                collapse
            ]
        },
        'extends_clause': {
            'finalizers': [
                collapse
            ]
        },
        'constraining_clause': {
            'finalizers': [
                collapse
            ]
        },
        'component_clause': {
            'finalizers': [
                collapse
            ]
        },
        'type_prefix': {
            'finalizers': [
                collapse
            ]
        },
        'type_specifier': {
            'finalizers': [
                collapse
            ]
        },
        'component_list': {
            'finalizers': [
                collapse
            ]
        },
        'component_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'condition_attribute': {
            'finalizers': [
                collapse
            ]
        },
        'declaration': {
            'finalizers': [
                collapse
            ]
        },
        'modification': {
            'finalizers': [
                collapse
            ]
        },
        'class_modification': {
            'finalizers': [
                collapse
            ]
        },
        'argument_list': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'element_modification_or_replaceable': {
            'finalizers': [
                collapse
            ]
        },
        'element_modification': {
            'finalizers': [
                collapse
            ]
        },
        'element_redeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'element_replaceable': {
            'finalizers': [
                collapse
            ]
        },
        'component_clause1': {
            'finalizers': [
                collapse
            ]
        },
        'component_declaration1': {
            'finalizers': [
                collapse
            ]
        },
        'short_class_definition': {
            'finalizers': [
                collapse
            ]
        },
        'equation_section': {
            'finalizers': [
                collapse
            ]
        },
        'algorithm_section': {
            'finalizers': [
                collapse
            ]
        },
        'equation': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'if_equation': {
            'finalizers': [
                collapse
            ]
        },
        'if_statement': {
            'finalizers': [
                collapse
            ]
        },
        'for_equation': {
            'finalizers': [
                collapse
            ]
        },
        'for_statement': {
            'finalizers': [
                collapse
            ]
        },
        'for_indices': {
            'finalizers': [
                collapse
            ]
        },
        'for_index': {
            'finalizers': [
                collapse
            ]
        },
        'while_statement': {
            'finalizers': [
                collapse
            ]
        },
        'when_equation': {
            'finalizers': [
                collapse
            ]
        },
        'when_statement': {
            'finalizers': [
                collapse
            ]
        },
        'connect_clause': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'simple_expression': {
            'finalizers': [
                collapse
            ]
        },
        'logical_expression': {
            'finalizers': [
                collapse
            ]
        },
        'logical_term': {
            'finalizers': [
                collapse
            ]
        },
        'logical_factor': {
            'finalizers': [
                collapse
            ]
        },
        'relation': {
            'finalizers': [
                collapse
            ]
        },
        'rel_op': {
            'finalizers': [
                collapse
            ]
        },
        'arithmetic_expression': {
            'finalizers': [
                collapse
            ]
        },
        'add_op': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'mul_op': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'primary': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'component_reference': {
            'finalizers': [
                collapse
            ]
        },
        'function_call_args': {
            'finalizers': [
                collapse
            ]
        },
        'function_arguments': {
            'finalizers': [
                collapse
            ]
        },
        'named_arguments': {
            'finalizers': [
                collapse
            ]
        },
        'named_argument': {
            'finalizers': [
                collapse
            ]
        },
        'function_argument': {
            'finalizers': [
                collapse
            ]
        },
        'output_expression_list': {
            'finalizers': [
                collapse
            ]
        },
        'expression_list': {
            'finalizers': [
                collapse
            ]
        },
        'array_subscripts': {
            'finalizers': [
                collapse
            ]
        },
        'subscript': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'string_comment': {
            'finalizers': [
                collapse
            ]
        },
        'annotation': {
            'finalizers': [
                collapse
            ]
        }
    }
};
