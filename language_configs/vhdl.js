let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'vhdl',
    'grammar_file': 'vhdl.g4',
    'entry_rule': 'ABS',
    'rules': {
        'abstract_literal': {
            'finalizers': [
                collapse
            ]
        },
        'access_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'across_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'actual_designator': {
            'finalizers': [
                collapse
            ]
        },
        'actual_parameter_part': {
            'finalizers': [
                collapse
            ]
        },
        'actual_part': {
            'finalizers': [
                collapse
            ]
        },
        'adding_operator': {
            'finalizers': [
                collapse
            ]
        },
        'aggregate': {
            'finalizers': [
                collapse
            ]
        },
        'alias_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'alias_designator': {
            'finalizers': [
                collapse
            ]
        },
        'alias_indication': {
            'finalizers': [
                collapse
            ]
        },
        'allocator': {
            'finalizers': [
                collapse
            ]
        },
        'architecture_body': {
            'finalizers': [
                collapse
            ]
        },
        'architecture_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'architecture_statement': {
            'finalizers': [
                collapse
            ]
        },
        'architecture_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'array_nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'array_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'assertion': {
            'finalizers': [
                collapse
            ]
        },
        'assertion_statement': {
            'finalizers': [
                collapse
            ]
        },
        'association_element': {
            'finalizers': [
                collapse
            ]
        },
        'association_list': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_designator': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_specification': {
            'finalizers': [
                collapse
            ]
        },
        'base_unit_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'binding_indication': {
            'finalizers': [
                collapse
            ]
        },
        'block_configuration': {
            'finalizers': [
                collapse
            ]
        },
        'block_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'block_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'block_header': {
            'finalizers': [
                collapse
            ]
        },
        'block_specification': {
            'finalizers': [
                collapse
            ]
        },
        'block_statement': {
            'finalizers': [
                collapse
            ]
        },
        'block_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'branch_quantity_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'break_element': {
            'finalizers': [
                collapse
            ]
        },
        'break_list': {
            'finalizers': [
                collapse
            ]
        },
        'break_selector_clause': {
            'finalizers': [
                collapse
            ]
        },
        'break_statement': {
            'finalizers': [
                collapse
            ]
        },
        'case_statement': {
            'finalizers': [
                collapse
            ]
        },
        'case_statement_alternative': {
            'finalizers': [
                collapse
            ]
        },
        'choice': {
            'finalizers': [
                collapse
            ]
        },
        'choices': {
            'finalizers': [
                collapse
            ]
        },
        'component_configuration': {
            'finalizers': [
                collapse
            ]
        },
        'component_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'component_instantiation_statement': {
            'finalizers': [
                collapse
            ]
        },
        'component_specification': {
            'finalizers': [
                collapse
            ]
        },
        'composite_nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'composite_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'concurrent_assertion_statement': {
            'finalizers': [
                collapse
            ]
        },
        'concurrent_break_statement': {
            'finalizers': [
                collapse
            ]
        },
        'concurrent_procedure_call_statement': {
            'finalizers': [
                collapse
            ]
        },
        'concurrent_signal_assignment_statement': {
            'finalizers': [
                collapse
            ]
        },
        'condition': {
            'finalizers': [
                collapse
            ]
        },
        'condition_clause': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_signal_assignment': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_waveforms': {
            'finalizers': [
                collapse
            ]
        },
        'configuration_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'configuration_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'configuration_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'configuration_item': {
            'finalizers': [
                collapse
            ]
        },
        'configuration_specification': {
            'finalizers': [
                collapse
            ]
        },
        'constant_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'constrained_array_definition': {
            'finalizers': [
                collapse
            ]
        },
        'constrained_nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'constraint': {
            'finalizers': [
                collapse
            ]
        },
        'context_clause': {
            'finalizers': [
                collapse
            ]
        },
        'context_item': {
            'finalizers': [
                collapse
            ]
        },
        'delay_mechanism': {
            'finalizers': [
                collapse
            ]
        },
        'design_file': {
            'finalizers': [
                collapse
            ]
        },
        'design_unit': {
            'finalizers': [
                collapse
            ]
        },
        'designator': {
            'finalizers': [
                collapse
            ]
        },
        'direction': {
            'finalizers': [
                collapse
            ]
        },
        'disconnection_specification': {
            'finalizers': [
                collapse
            ]
        },
        'discrete_range': {
            'finalizers': [
                collapse
            ]
        },
        'element_association': {
            'finalizers': [
                collapse
            ]
        },
        'element_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'element_subnature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'element_subtype_definition': {
            'finalizers': [
                collapse
            ]
        },
        'entity_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'entity_class': {
            'finalizers': [
                collapse
            ]
        },
        'entity_class_entry': {
            'finalizers': [
                collapse
            ]
        },
        'entity_class_entry_list': {
            'finalizers': [
                collapse
            ]
        },
        'entity_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'entity_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'entity_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'entity_designator': {
            'finalizers': [
                collapse
            ]
        },
        'entity_header': {
            'finalizers': [
                collapse
            ]
        },
        'entity_name_list': {
            'finalizers': [
                collapse
            ]
        },
        'entity_specification': {
            'finalizers': [
                collapse
            ]
        },
        'entity_statement': {
            'finalizers': [
                collapse
            ]
        },
        'entity_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'entity_tag': {
            'finalizers': [
                collapse
            ]
        },
        'enumeration_literal': {
            'finalizers': [
                collapse
            ]
        },
        'enumeration_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'exit_statement': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'file_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'file_logical_name': {
            'finalizers': [
                collapse
            ]
        },
        'file_open_information': {
            'finalizers': [
                collapse
            ]
        },
        'file_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'formal_parameter_list': {
            'finalizers': [
                collapse
            ]
        },
        'formal_part': {
            'finalizers': [
                collapse
            ]
        },
        'free_quantity_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'generate_statement': {
            'finalizers': [
                collapse
            ]
        },
        'generation_scheme': {
            'finalizers': [
                collapse
            ]
        },
        'generic_clause': {
            'finalizers': [
                collapse
            ]
        },
        'generic_list': {
            'finalizers': [
                collapse
            ]
        },
        'generic_map_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'group_constituent': {
            'finalizers': [
                collapse
            ]
        },
        'group_constituent_list': {
            'finalizers': [
                collapse
            ]
        },
        'group_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'group_template_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'guarded_signal_specification': {
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
        'if_statement': {
            'finalizers': [
                collapse
            ]
        },
        'index_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'index_specification': {
            'finalizers': [
                collapse
            ]
        },
        'index_subtype_definition': {
            'finalizers': [
                collapse
            ]
        },
        'instantiated_unit': {
            'finalizers': [
                collapse
            ]
        },
        'instantiation_list': {
            'finalizers': [
                collapse
            ]
        },
        'interface_constant_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_element': {
            'finalizers': [
                collapse
            ]
        },
        'interface_file_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_signal_list': {
            'finalizers': [
                collapse
            ]
        },
        'interface_port_list': {
            'finalizers': [
                collapse
            ]
        },
        'interface_list': {
            'finalizers': [
                collapse
            ]
        },
        'interface_quantity_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_port_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_signal_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_terminal_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'interface_variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'iteration_scheme': {
            'finalizers': [
                collapse
            ]
        },
        'label_colon': {
            'finalizers': [
                collapse
            ]
        },
        'library_clause': {
            'finalizers': [
                collapse
            ]
        },
        'library_unit': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'logical_name': {
            'finalizers': [
                collapse
            ]
        },
        'logical_name_list': {
            'finalizers': [
                collapse
            ]
        },
        'logical_operator': {
            'finalizers': [
                collapse
            ]
        },
        'loop_statement': {
            'finalizers': [
                collapse
            ]
        },
        'signal_mode': {
            'finalizers': [
                collapse
            ]
        },
        'multiplying_operator': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'name_part': {
            'finalizers': [
                collapse
            ]
        },
        'name_attribute_part': {
            'finalizers': [
                collapse
            ]
        },
        'name_function_call_or_indexed_part': {
            'finalizers': [
                collapse
            ]
        },
        'name_slice_part': {
            'finalizers': [
                collapse
            ]
        },
        'selected_name': {
            'finalizers': [
                collapse
            ]
        },
        'nature_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'nature_element_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'next_statement': {
            'finalizers': [
                collapse
            ]
        },
        'numeric_literal': {
            'finalizers': [
                collapse
            ]
        },
        'object_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'opts': {
            'finalizers': [
                collapse
            ]
        },
        'package_body': {
            'finalizers': [
                collapse
            ]
        },
        'package_body_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'package_body_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'package_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'package_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'package_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_specification': {
            'finalizers': [
                collapse
            ]
        },
        'physical_literal': {
            'finalizers': [
                collapse
            ]
        },
        'physical_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'port_clause': {
            'finalizers': [
                collapse
            ]
        },
        'port_list': {
            'finalizers': [
                collapse
            ]
        },
        'port_map_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'primary': {
            'finalizers': [
                collapse
            ]
        },
        'primary_unit': {
            'finalizers': [
                collapse
            ]
        },
        'procedural_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'procedural_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'procedural_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_call': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_call_statement': {
            'finalizers': [
                collapse
            ]
        },
        'process_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'process_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'process_statement': {
            'finalizers': [
                collapse
            ]
        },
        'process_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'qualified_expression': {
            'finalizers': [
                collapse
            ]
        },
        'quantity_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'quantity_list': {
            'finalizers': [
                collapse
            ]
        },
        'quantity_specification': {
            'finalizers': [
                collapse
            ]
        },
        'range': {
            'finalizers': [
                collapse
            ]
        },
        'explicit_range': {
            'finalizers': [
                collapse
            ]
        },
        'range_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'record_nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'record_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'relation': {
            'finalizers': [
                collapse
            ]
        },
        'relational_operator': {
            'finalizers': [
                collapse
            ]
        },
        'report_statement': {
            'finalizers': [
                collapse
            ]
        },
        'return_statement': {
            'finalizers': [
                collapse
            ]
        },
        'scalar_nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'scalar_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'secondary_unit': {
            'finalizers': [
                collapse
            ]
        },
        'secondary_unit_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'selected_signal_assignment': {
            'finalizers': [
                collapse
            ]
        },
        'selected_waveforms': {
            'finalizers': [
                collapse
            ]
        },
        'sensitivity_clause': {
            'finalizers': [
                collapse
            ]
        },
        'sensitivity_list': {
            'finalizers': [
                collapse
            ]
        },
        'sequence_of_statements': {
            'finalizers': [
                collapse
            ]
        },
        'sequential_statement': {
            'finalizers': [
                collapse
            ]
        },
        'shift_expression': {
            'finalizers': [
                collapse
            ]
        },
        'shift_operator': {
            'finalizers': [
                collapse
            ]
        },
        'signal_assignment_statement': {
            'finalizers': [
                collapse
            ]
        },
        'signal_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'signal_kind': {
            'finalizers': [
                collapse
            ]
        },
        'signal_list': {
            'finalizers': [
                collapse
            ]
        },
        'signature': {
            'finalizers': [
                collapse
            ]
        },
        'simple_expression': {
            'finalizers': [
                collapse
            ]
        },
        'simple_simultaneous_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simultaneous_alternative': {
            'finalizers': [
                collapse
            ]
        },
        'simultaneous_case_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simultaneous_if_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simultaneous_procedural_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simultaneous_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simultaneous_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'source_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'source_quantity_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'step_limit_specification': {
            'finalizers': [
                collapse
            ]
        },
        'subnature_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'subnature_indication': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_body': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_declarative_item': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_declarative_part': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_kind': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_specification': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_specification': {
            'finalizers': [
                collapse
            ]
        },
        'function_specification': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_statement_part': {
            'finalizers': [
                collapse
            ]
        },
        'subtype_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'subtype_indication': {
            'finalizers': [
                collapse
            ]
        },
        'suffix': {
            'finalizers': [
                collapse
            ]
        },
        'target': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'terminal_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'terminal_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'through_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'timeout_clause': {
            'finalizers': [
                collapse
            ]
        },
        'tolerance_aspect': {
            'finalizers': [
                collapse
            ]
        },
        'type_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'unconstrained_array_definition': {
            'finalizers': [
                collapse
            ]
        },
        'unconstrained_nature_definition': {
            'finalizers': [
                collapse
            ]
        },
        'use_clause': {
            'finalizers': [
                collapse
            ]
        },
        'variable_assignment_statement': {
            'finalizers': [
                collapse
            ]
        },
        'variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'wait_statement': {
            'finalizers': [
                collapse
            ]
        },
        'waveform': {
            'finalizers': [
                collapse
            ]
        },
        'waveform_element': {
            'finalizers': [
                collapse
            ]
        }
    }
};
