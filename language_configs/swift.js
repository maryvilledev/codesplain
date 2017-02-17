let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Swift',
    'grammar_file': 'Swift.g4',
    'entry_rule': 'top_level',
    'rules': {
        'top_level': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'statements': {
            'finalizers': [
                collapse
            ]
        },
        'loop_statement': {
            'finalizers': [
                collapse
            ]
        },
        'for_statement': {
            'finalizers': [
                collapse
            ]
        },
        'for_init': {
            'finalizers': [
                collapse
            ]
        },
        'for_in_statement': {
            'finalizers': [
                collapse
            ]
        },
        'while_statement': {
            'finalizers': [
                collapse
            ]
        },
        'condition_clause': {
            'finalizers': [
                collapse
            ]
        },
        'condition_list': {
            'finalizers': [
                collapse
            ]
        },
        'condition': {
            'finalizers': [
                collapse
            ]
        },
        'case_condition': {
            'finalizers': [
                collapse
            ]
        },
        'optional_binding_condition': {
            'finalizers': [
                collapse
            ]
        },
        'optional_binding_head': {
            'finalizers': [
                collapse
            ]
        },
        'optional_binding_continuation_list': {
            'finalizers': [
                collapse
            ]
        },
        'optional_binding_continuation': {
            'finalizers': [
                collapse
            ]
        },
        'repeat_while_statement': {
            'finalizers': [
                collapse
            ]
        },
        'branch_statement': {
            'finalizers': [
                collapse
            ]
        },
        'if_statement': {
            'finalizers': [
                collapse
            ]
        },
        'else_clause': {
            'finalizers': [
                collapse
            ]
        },
        'guard_statement': {
            'finalizers': [
                collapse
            ]
        },
        'switch_statement': {
            'finalizers': [
                collapse
            ]
        },
        'switch_cases': {
            'finalizers': [
                collapse
            ]
        },
        'switch_case': {
            'finalizers': [
                collapse
            ]
        },
        'case_label': {
            'finalizers': [
                collapse
            ]
        },
        'case_item_list': {
            'finalizers': [
                collapse
            ]
        },
        'default_label': {
            'finalizers': [
                collapse
            ]
        },
        'where_clause': {
            'finalizers': [
                collapse
            ]
        },
        'where_expression': {
            'finalizers': [
                collapse
            ]
        },
        'labeled_statement': {
            'finalizers': [
                collapse
            ]
        },
        'statement_label': {
            'finalizers': [
                collapse
            ]
        },
        'label_name': {
            'finalizers': [
                collapse
            ]
        },
        'control_transfer_statement': {
            'finalizers': [
                collapse
            ]
        },
        'break_statement': {
            'finalizers': [
                collapse
            ]
        },
        'continue_statement': {
            'finalizers': [
                collapse
            ]
        },
        'fallthrough_statement': {
            'finalizers': [
                collapse
            ]
        },
        'return_statement': {
            'finalizers': [
                collapse
            ]
        },
        'availability_condition': {
            'finalizers': [
                collapse
            ]
        },
        'availability_arguments': {
            'finalizers': [
                collapse
            ]
        },
        'availability_argument': {
            'finalizers': [
                collapse
            ]
        },
        'throw_statement': {
            'finalizers': [
                collapse
            ]
        },
        'defer_statement': {
            'finalizers': [
                collapse
            ]
        },
        'do_statement': {
            'finalizers': [
                collapse
            ]
        },
        'catch_clauses': {
            'finalizers': [
                collapse
            ]
        },
        'catch_clause': {
            'finalizers': [
                collapse
            ]
        },
        'compiler_control_statement': {
            'finalizers': [
                collapse
            ]
        },
        'build_configuration_statement': {
            'finalizers': [
                collapse
            ]
        },
        'build_configuration_elseif_clauses': {
            'finalizers': [
                collapse
            ]
        },
        'build_configuration_elseif_clause': {
            'finalizers': [
                collapse
            ]
        },
        'build_configuration_else_clause': {
            'finalizers': [
                collapse
            ]
        },
        'build_configuration': {
            'finalizers': [
                collapse
            ]
        },
        'platform_testing_function': {
            'finalizers': [
                collapse
            ]
        },
        'operating_system': {
            'finalizers': [
                collapse
            ]
        },
        'architecture': {
            'finalizers': [
                collapse
            ]
        },
        'line_control_statement': {
            'finalizers': [
                collapse
            ]
        },
        'line_number': {
            'finalizers': [
                collapse
            ]
        },
        'file_name': {
            'finalizers': [
                collapse
            ]
        },
        'generic_parameter_clause': {
            'finalizers': [
                collapse
            ]
        },
        'generic_parameter_list': {
            'finalizers': [
                collapse
            ]
        },
        'generic_parameter': {
            'finalizers': [
                collapse
            ]
        },
        'requirement_clause': {
            'finalizers': [
                collapse
            ]
        },
        'requirement_list': {
            'finalizers': [
                collapse
            ]
        },
        'requirement': {
            'finalizers': [
                collapse
            ]
        },
        'conformance_requirement': {
            'finalizers': [
                collapse
            ]
        },
        'same_type_requirement': {
            'finalizers': [
                collapse
            ]
        },
        'generic_argument_clause': {
            'finalizers': [
                collapse
            ]
        },
        'generic_argument_list': {
            'finalizers': [
                collapse
            ]
        },
        'generic_argument': {
            'finalizers': [
                collapse
            ]
        },
        'declaration': {
            'finalizers': [
                collapse
            ]
        },
        'declarations': {
            'finalizers': [
                collapse
            ]
        },
        'top_level_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'code_block': {
            'finalizers': [
                collapse
            ]
        },
        'import_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'import_kind': {
            'finalizers': [
                collapse
            ]
        },
        'import_path': {
            'finalizers': [
                collapse
            ]
        },
        'import_path_identifier': {
            'finalizers': [
                collapse
            ]
        },
        'constant_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'pattern_initializer_list': {
            'finalizers': [
                collapse
            ]
        },
        'pattern_initializer': {
            'finalizers': [
                collapse
            ]
        },
        'initializer': {
            'finalizers': [
                collapse
            ]
        },
        'variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'variable_declaration_head': {
            'finalizers': [
                collapse
            ]
        },
        'variable_name': {
            'finalizers': [
                collapse
            ]
        },
        'getter_setter_block': {
            'finalizers': [
                collapse
            ]
        },
        'getter_clause': {
            'finalizers': [
                collapse
            ]
        },
        'setter_clause': {
            'finalizers': [
                collapse
            ]
        },
        'setter_name': {
            'finalizers': [
                collapse
            ]
        },
        'getter_setter_keyword_block': {
            'finalizers': [
                collapse
            ]
        },
        'getter_keyword_clause': {
            'finalizers': [
                collapse
            ]
        },
        'setter_keyword_clause': {
            'finalizers': [
                collapse
            ]
        },
        'willSet_didSet_block': {
            'finalizers': [
                collapse
            ]
        },
        'willSet_clause': {
            'finalizers': [
                collapse
            ]
        },
        'didSet_clause': {
            'finalizers': [
                collapse
            ]
        },
        'typealias_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'typealias_head': {
            'finalizers': [
                collapse
            ]
        },
        'typealias_name': {
            'finalizers': [
                collapse
            ]
        },
        'typealias_assignment': {
            'finalizers': [
                collapse
            ]
        },
        'function_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'function_head': {
            'finalizers': [
                collapse
            ]
        },
        'function_name': {
            'finalizers': [
                collapse
            ]
        },
        'function_signature': {
            'finalizers': [
                collapse
            ]
        },
        'function_result': {
            'finalizers': [
                collapse
            ]
        },
        'function_body': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_clauses': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_clause': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_list': {
            'finalizers': [
                collapse
            ]
        },
        'parameter': {
            'finalizers': [
                collapse
            ]
        },
        'external_parameter_name': {
            'finalizers': [
                collapse
            ]
        },
        'local_parameter_name': {
            'finalizers': [
                collapse
            ]
        },
        'default_argument_clause': {
            'finalizers': [
                collapse
            ]
        },
        'enum_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'union_style_enum': {
            'finalizers': [
                collapse
            ]
        },
        'union_style_enum_members': {
            'finalizers': [
                collapse
            ]
        },
        'union_style_enum_member': {
            'finalizers': [
                collapse
            ]
        },
        'union_style_enum_case_clause': {
            'finalizers': [
                collapse
            ]
        },
        'union_style_enum_case_list': {
            'finalizers': [
                collapse
            ]
        },
        'union_style_enum_case': {
            'finalizers': [
                collapse
            ]
        },
        'enum_name': {
            'finalizers': [
                collapse
            ]
        },
        'enum_case_name': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_style_enum': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_style_enum_members': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_style_enum_member': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_style_enum_case_clause': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_style_enum_case_list': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_style_enum_case': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_assignment': {
            'finalizers': [
                collapse
            ]
        },
        'raw_value_literal': {
            'finalizers': [
                collapse
            ]
        },
        'struct_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'struct_name': {
            'finalizers': [
                collapse
            ]
        },
        'struct_body': {
            'finalizers': [
                collapse
            ]
        },
        'class_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'class_name': {
            'finalizers': [
                collapse
            ]
        },
        'class_body': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_name': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_body': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_member_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_member_declarations': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_property_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_method_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_initializer_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_subscript_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_associated_type_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'initializer_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'initializer_head': {
            'finalizers': [
                collapse
            ]
        },
        'initializer_body': {
            'finalizers': [
                collapse
            ]
        },
        'deinitializer_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'extension_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'extension_body': {
            'finalizers': [
                collapse
            ]
        },
        'subscript_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'subscript_head': {
            'finalizers': [
                collapse
            ]
        },
        'subscript_result': {
            'finalizers': [
                collapse
            ]
        },
        'operator_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'prefix_operator_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'postfix_operator_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'infix_operator_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'infix_operator_attributes': {
            'finalizers': [
                collapse
            ]
        },
        'precedence_clause': {
            'finalizers': [
                collapse
            ]
        },
        'precedence_level': {
            'finalizers': [
                collapse
            ]
        },
        'associativity_clause': {
            'finalizers': [
                collapse
            ]
        },
        'associativity': {
            'finalizers': [
                collapse
            ]
        },
        'declaration_modifier': {
            'finalizers': [
                collapse
            ]
        },
        'declaration_modifiers': {
            'finalizers': [
                collapse
            ]
        },
        'access_level_modifier': {
            'finalizers': [
                collapse
            ]
        },
        'pattern': {
            'finalizers': [
                collapse
            ]
        },
        'wildcard_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'identifier_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'value_binding_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_pattern_element_list': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_pattern_element': {
            'finalizers': [
                collapse
            ]
        },
        'enum_case_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'optional_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'expression_pattern': {
            'finalizers': [
                collapse
            ]
        },
        'attribute': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_name': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_argument_clause': {
            'finalizers': [
                collapse
            ]
        },
        'attributes': {
            'finalizers': [
                collapse
            ]
        },
        'balanced_tokens': {
            'finalizers': [
                collapse
            ]
        },
        'balanced_token': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'expression_list': {
            'finalizers': [
                collapse
            ]
        },
        'prefix_expression': {
            'finalizers': [
                collapse
            ]
        },
        'in_out_expression': {
            'finalizers': [
                collapse
            ]
        },
        'try_operator': {
            'finalizers': [
                collapse
            ]
        },
        'binary_expression': {
            'finalizers': [
                collapse
            ]
        },
        'binary_expressions': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_operator': {
            'finalizers': [
                collapse
            ]
        },
        'type_casting_operator': {
            'finalizers': [
                collapse
            ]
        },
        'primary_expression': {
            'finalizers': [
                collapse
            ]
        },
        'implicit_member_expression': {
            'finalizers': [
                collapse
            ]
        },
        'literal_expression': {
            'finalizers': [
                collapse
            ]
        },
        'array_literal': {
            'finalizers': [
                collapse
            ]
        },
        'array_literal_items': {
            'finalizers': [
                collapse
            ]
        },
        'array_literal_item': {
            'finalizers': [
                collapse
            ]
        },
        'dictionary_literal': {
            'finalizers': [
                collapse
            ]
        },
        'dictionary_literal_items': {
            'finalizers': [
                collapse
            ]
        },
        'dictionary_literal_item': {
            'finalizers': [
                collapse
            ]
        },
        'self_expression': {
            'finalizers': [
                collapse
            ]
        },
        'superclass_expression': {
            'finalizers': [
                collapse
            ]
        },
        'superclass_method_expression': {
            'finalizers': [
                collapse
            ]
        },
        'superclass_subscript_expression': {
            'finalizers': [
                collapse
            ]
        },
        'superclass_initializer_expression': {
            'finalizers': [
                collapse
            ]
        },
        'closure_expression': {
            'finalizers': [
                collapse
            ]
        },
        'closure_signature': {
            'finalizers': [
                collapse
            ]
        },
        'capture_list': {
            'finalizers': [
                collapse
            ]
        },
        'capture_list_items': {
            'finalizers': [
                collapse
            ]
        },
        'capture_list_item': {
            'finalizers': [
                collapse
            ]
        },
        'capture_specifier': {
            'finalizers': [
                collapse
            ]
        },
        'parenthesized_expression': {
            'finalizers': [
                collapse
            ]
        },
        'expression_element_list': {
            'finalizers': [
                collapse
            ]
        },
        'expression_element': {
            'finalizers': [
                collapse
            ]
        },
        'wildcard_expression': {
            'finalizers': [
                collapse
            ]
        },
        'selector_expression': {
            'finalizers': [
                collapse
            ]
        },
        'postfix_expression': {
            'finalizers': [
                collapse
            ]
        },
        'argument_names': {
            'finalizers': [
                collapse
            ]
        },
        'argument_name': {
            'finalizers': [
                collapse
            ]
        },
        'trailing_closure': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'type_annotation': {
            'finalizers': [
                collapse
            ]
        },
        'type_identifier': {
            'finalizers': [
                collapse
            ]
        },
        'type_name': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_type': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_type_body': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_type_element_list': {
            'finalizers': [
                collapse
            ]
        },
        'tuple_type_element': {
            'finalizers': [
                collapse
            ]
        },
        'element_name': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_composition_type': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_identifier_list': {
            'finalizers': [
                collapse
            ]
        },
        'protocol_identifier': {
            'finalizers': [
                collapse
            ]
        },
        'type_inheritance_clause': {
            'finalizers': [
                collapse
            ]
        },
        'type_inheritance_list': {
            'finalizers': [
                collapse
            ]
        },
        'class_requirement': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'identifier_list': {
            'finalizers': [
                collapse
            ]
        },
        'context_sensitive_keyword': {
            'finalizers': [
                collapse
            ]
        },
        'assignment_operator': {
            'finalizers': [
                collapse
            ]
        },
        'negate_prefix_operator': {
            'finalizers': [
                collapse
            ]
        },
        'build_AND': {
            'finalizers': [
                collapse
            ]
        },
        'build_OR': {
            'finalizers': [
                collapse
            ]
        },
        'arrow_operator': {
            'finalizers': [
                collapse
            ]
        },
        'range_operator': {
            'finalizers': [
                collapse
            ]
        },
        'same_type_equals': {
            'finalizers': [
                collapse
            ]
        },
        'binary_operator': {
            'finalizers': [
                collapse
            ]
        },
        'prefix_operator': {
            'finalizers': [
                collapse
            ]
        },
        'postfix_operator': {
            'finalizers': [
                collapse
            ]
        },
        'operator': {
            'finalizers': [
                collapse
            ]
        },
        'operator_character': {
            'finalizers': [
                collapse
            ]
        },
        'operator_head': {
            'finalizers': [
                collapse
            ]
        },
        'dot_operator_head': {
            'finalizers': [
                collapse
            ]
        },
        'dot_operator_character': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'numeric_literal': {
            'finalizers': [
                collapse
            ]
        },
        'boolean_literal': {
            'finalizers': [
                collapse
            ]
        },
        'nil_literal': {
            'finalizers': [
                collapse
            ]
        },
        'integer_literal': {
            'finalizers': [
                collapse
            ]
        },
        'string_literal': {
            'finalizers': [
                collapse
            ]
        }
    }
};
