let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'IDL',
    'grammar_file': 'IDL.g4',
    'entry_rule': 'specification',
    'rules': {
        'specification': {
            'finalizers': [
                collapse
            ]
        },
        'definition': {
            'finalizers': [
                collapse
            ]
        },
        'module': {
            'finalizers': [
                collapse
            ]
        },
        'interface_or_forward_decl': {
            'finalizers': [
                collapse
            ]
        },
        'interface_decl': {
            'finalizers': [
                collapse
            ]
        },
        'forward_decl': {
            'finalizers': [
                collapse
            ]
        },
        'interface_header': {
            'finalizers': [
                collapse
            ]
        },
        'interface_body': {
            'finalizers': [
                collapse
            ]
        },
        'export': {
            'finalizers': [
                collapse
            ]
        },
        'interface_inheritance_spec': {
            'finalizers': [
                collapse
            ]
        },
        'interface_name': {
            'finalizers': [
                collapse
            ]
        },
        'scoped_name': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'value_forward_decl': {
            'finalizers': [
                collapse
            ]
        },
        'value_box_decl': {
            'finalizers': [
                collapse
            ]
        },
        'value_abs_decl': {
            'finalizers': [
                collapse
            ]
        },
        'value_decl': {
            'finalizers': [
                collapse
            ]
        },
        'value_header': {
            'finalizers': [
                collapse
            ]
        },
        'value_inheritance_spec': {
            'finalizers': [
                collapse
            ]
        },
        'value_name': {
            'finalizers': [
                collapse
            ]
        },
        'value_element': {
            'finalizers': [
                collapse
            ]
        },
        'state_member': {
            'finalizers': [
                collapse
            ]
        },
        'init_decl': {
            'finalizers': [
                collapse
            ]
        },
        'init_param_decls': {
            'finalizers': [
                collapse
            ]
        },
        'init_param_decl': {
            'finalizers': [
                collapse
            ]
        },
        'init_param_attribute': {
            'finalizers': [
                collapse
            ]
        },
        'const_decl': {
            'finalizers': [
                collapse
            ]
        },
        'const_type': {
            'finalizers': [
                collapse
            ]
        },
        'const_exp': {
            'finalizers': [
                collapse
            ]
        },
        'or_expr': {
            'finalizers': [
                collapse
            ]
        },
        'xor_expr': {
            'finalizers': [
                collapse
            ]
        },
        'and_expr': {
            'finalizers': [
                collapse
            ]
        },
        'shift_expr': {
            'finalizers': [
                collapse
            ]
        },
        'add_expr': {
            'finalizers': [
                collapse
            ]
        },
        'mult_expr': {
            'finalizers': [
                collapse
            ]
        },
        'unary_expr': {
            'finalizers': [
                collapse
            ]
        },
        'unary_operator': {
            'finalizers': [
                collapse
            ]
        },
        'primary_expr': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'positive_int_const': {
            'finalizers': [
                collapse
            ]
        },
        'type_decl': {
            'finalizers': [
                collapse
            ]
        },
        'type_declarator': {
            'finalizers': [
                collapse
            ]
        },
        'type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'simple_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'base_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'template_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'constr_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'declarators': {
            'finalizers': [
                collapse
            ]
        },
        'declarator': {
            'finalizers': [
                collapse
            ]
        },
        'simple_declarator': {
            'finalizers': [
                collapse
            ]
        },
        'complex_declarator': {
            'finalizers': [
                collapse
            ]
        },
        'floating_pt_type': {
            'finalizers': [
                collapse
            ]
        },
        'integer_type': {
            'finalizers': [
                collapse
            ]
        },
        'signed_int': {
            'finalizers': [
                collapse
            ]
        },
        'signed_short_int': {
            'finalizers': [
                collapse
            ]
        },
        'signed_long_int': {
            'finalizers': [
                collapse
            ]
        },
        'signed_longlong_int': {
            'finalizers': [
                collapse
            ]
        },
        'unsigned_int': {
            'finalizers': [
                collapse
            ]
        },
        'unsigned_short_int': {
            'finalizers': [
                collapse
            ]
        },
        'unsigned_long_int': {
            'finalizers': [
                collapse
            ]
        },
        'unsigned_longlong_int': {
            'finalizers': [
                collapse
            ]
        },
        'char_type': {
            'finalizers': [
                collapse
            ]
        },
        'wide_char_type': {
            'finalizers': [
                collapse
            ]
        },
        'boolean_type': {
            'finalizers': [
                collapse
            ]
        },
        'octet_type': {
            'finalizers': [
                collapse
            ]
        },
        'any_type': {
            'finalizers': [
                collapse
            ]
        },
        'object_type': {
            'finalizers': [
                collapse
            ]
        },
        'struct_type': {
            'finalizers': [
                collapse
            ]
        },
        'member_list': {
            'finalizers': [
                collapse
            ]
        },
        'member': {
            'finalizers': [
                collapse
            ]
        },
        'union_type': {
            'finalizers': [
                collapse
            ]
        },
        'switch_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'switch_body': {
            'finalizers': [
                collapse
            ]
        },
        'case_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'case_label': {
            'finalizers': [
                collapse
            ]
        },
        'element_spec': {
            'finalizers': [
                collapse
            ]
        },
        'enum_type': {
            'finalizers': [
                collapse
            ]
        },
        'enumerator': {
            'finalizers': [
                collapse
            ]
        },
        'sequence_type': {
            'finalizers': [
                collapse
            ]
        },
        'string_type': {
            'finalizers': [
                collapse
            ]
        },
        'wide_string_type': {
            'finalizers': [
                collapse
            ]
        },
        'array_declarator': {
            'finalizers': [
                collapse
            ]
        },
        'fixed_array_size': {
            'finalizers': [
                collapse
            ]
        },
        'attr_decl': {
            'finalizers': [
                collapse
            ]
        },
        'except_decl': {
            'finalizers': [
                collapse
            ]
        },
        'op_decl': {
            'finalizers': [
                collapse
            ]
        },
        'op_attribute': {
            'finalizers': [
                collapse
            ]
        },
        'op_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_decls': {
            'finalizers': [
                collapse
            ]
        },
        'param_decl': {
            'finalizers': [
                collapse
            ]
        },
        'param_attribute': {
            'finalizers': [
                collapse
            ]
        },
        'raises_expr': {
            'finalizers': [
                collapse
            ]
        },
        'context_expr': {
            'finalizers': [
                collapse
            ]
        },
        'param_type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'fixed_pt_type': {
            'finalizers': [
                collapse
            ]
        },
        'fixed_pt_const_type': {
            'finalizers': [
                collapse
            ]
        },
        'value_base_type': {
            'finalizers': [
                collapse
            ]
        },
        'constr_forward_decl': {
            'finalizers': [
                collapse
            ]
        },
        'import_decl': {
            'finalizers': [
                collapse
            ]
        },
        'imported_scope': {
            'finalizers': [
                collapse
            ]
        },
        'type_id_decl': {
            'finalizers': [
                collapse
            ]
        },
        'type_prefix_decl': {
            'finalizers': [
                collapse
            ]
        },
        'readonly_attr_spec': {
            'finalizers': [
                collapse
            ]
        },
        'readonly_attr_declarator': {
            'finalizers': [
                collapse
            ]
        },
        'attr_spec': {
            'finalizers': [
                collapse
            ]
        },
        'attr_declarator': {
            'finalizers': [
                collapse
            ]
        },
        'attr_raises_expr': {
            'finalizers': [
                collapse
            ]
        },
        'get_excep_expr': {
            'finalizers': [
                collapse
            ]
        },
        'set_excep_expr': {
            'finalizers': [
                collapse
            ]
        },
        'exception_list': {
            'finalizers': [
                collapse
            ]
        },
        'component': {
            'finalizers': [
                collapse
            ]
        },
        'component_forward_decl': {
            'finalizers': [
                collapse
            ]
        },
        'component_decl': {
            'finalizers': [
                collapse
            ]
        },
        'component_header': {
            'finalizers': [
                collapse
            ]
        },
        'supported_interface_spec': {
            'finalizers': [
                collapse
            ]
        },
        'component_inheritance_spec': {
            'finalizers': [
                collapse
            ]
        },
        'component_body': {
            'finalizers': [
                collapse
            ]
        },
        'component_export': {
            'finalizers': [
                collapse
            ]
        },
        'provides_decl': {
            'finalizers': [
                collapse
            ]
        },
        'interface_type': {
            'finalizers': [
                collapse
            ]
        },
        'uses_decl': {
            'finalizers': [
                collapse
            ]
        },
        'emits_decl': {
            'finalizers': [
                collapse
            ]
        },
        'publishes_decl': {
            'finalizers': [
                collapse
            ]
        },
        'consumes_decl': {
            'finalizers': [
                collapse
            ]
        },
        'home_decl': {
            'finalizers': [
                collapse
            ]
        },
        'home_header': {
            'finalizers': [
                collapse
            ]
        },
        'home_inheritance_spec': {
            'finalizers': [
                collapse
            ]
        },
        'primary_key_spec': {
            'finalizers': [
                collapse
            ]
        },
        'home_body': {
            'finalizers': [
                collapse
            ]
        },
        'home_export': {
            'finalizers': [
                collapse
            ]
        },
        'factory_decl': {
            'finalizers': [
                collapse
            ]
        },
        'finder_decl': {
            'finalizers': [
                collapse
            ]
        },
        'event': {
            'finalizers': [
                collapse
            ]
        },
        'event_forward_decl': {
            'finalizers': [
                collapse
            ]
        },
        'event_abs_decl': {
            'finalizers': [
                collapse
            ]
        },
        'event_decl': {
            'finalizers': [
                collapse
            ]
        },
        'event_header': {
            'finalizers': [
                collapse
            ]
        }
    }
};
