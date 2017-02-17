let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'plsql',
    'grammar_file': 'plsql.g4',
    'entry_rule': 'swallow_to_semi',
    'rules': {
        'swallow_to_semi': {
            'finalizers': [
                collapse
            ]
        },
        'compilation_unit': {
            'finalizers': [
                collapse
            ]
        },
        'sql_script': {
            'finalizers': [
                collapse
            ]
        },
        'unit_statement': {
            'finalizers': [
                collapse
            ]
        },
        'drop_function': {
            'finalizers': [
                collapse
            ]
        },
        'alter_function': {
            'finalizers': [
                collapse
            ]
        },
        'create_function_body': {
            'finalizers': [
                collapse
            ]
        },
        'parallel_enable_clause': {
            'finalizers': [
                collapse
            ]
        },
        'partition_by_clause': {
            'finalizers': [
                collapse
            ]
        },
        'result_cache_clause': {
            'finalizers': [
                collapse
            ]
        },
        'relies_on_part': {
            'finalizers': [
                collapse
            ]
        },
        'streaming_clause': {
            'finalizers': [
                collapse
            ]
        },
        'drop_package': {
            'finalizers': [
                collapse
            ]
        },
        'alter_package': {
            'finalizers': [
                collapse
            ]
        },
        'create_package': {
            'finalizers': [
                collapse
            ]
        },
        'package_body': {
            'finalizers': [
                collapse
            ]
        },
        'package_spec': {
            'finalizers': [
                collapse
            ]
        },
        'package_obj_spec': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_spec': {
            'finalizers': [
                collapse
            ]
        },
        'function_spec': {
            'finalizers': [
                collapse
            ]
        },
        'package_obj_body': {
            'finalizers': [
                collapse
            ]
        },
        'drop_procedure': {
            'finalizers': [
                collapse
            ]
        },
        'alter_procedure': {
            'finalizers': [
                collapse
            ]
        },
        'create_procedure_body': {
            'finalizers': [
                collapse
            ]
        },
        'drop_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'alter_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'create_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'trigger_follows_clause': {
            'finalizers': [
                collapse
            ]
        },
        'trigger_when_clause': {
            'finalizers': [
                collapse
            ]
        },
        'simple_dml_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'for_each_row': {
            'finalizers': [
                collapse
            ]
        },
        'compound_dml_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'non_dml_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'trigger_body': {
            'finalizers': [
                collapse
            ]
        },
        'routine_clause': {
            'finalizers': [
                collapse
            ]
        },
        'compound_trigger_block': {
            'finalizers': [
                collapse
            ]
        },
        'timing_point_section': {
            'finalizers': [
                collapse
            ]
        },
        'non_dml_event': {
            'finalizers': [
                collapse
            ]
        },
        'dml_event_clause': {
            'finalizers': [
                collapse
            ]
        },
        'dml_event_element': {
            'finalizers': [
                collapse
            ]
        },
        'dml_event_nested_clause': {
            'finalizers': [
                collapse
            ]
        },
        'referencing_clause': {
            'finalizers': [
                collapse
            ]
        },
        'referencing_element': {
            'finalizers': [
                collapse
            ]
        },
        'drop_type': {
            'finalizers': [
                collapse
            ]
        },
        'alter_type': {
            'finalizers': [
                collapse
            ]
        },
        'compile_type_clause': {
            'finalizers': [
                collapse
            ]
        },
        'replace_type_clause': {
            'finalizers': [
                collapse
            ]
        },
        'alter_method_spec': {
            'finalizers': [
                collapse
            ]
        },
        'alter_method_element': {
            'finalizers': [
                collapse
            ]
        },
        'alter_attribute_definition': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_definition': {
            'finalizers': [
                collapse
            ]
        },
        'alter_collection_clauses': {
            'finalizers': [
                collapse
            ]
        },
        'dependent_handling_clause': {
            'finalizers': [
                collapse
            ]
        },
        'dependent_exceptions_part': {
            'finalizers': [
                collapse
            ]
        },
        'create_type': {
            'finalizers': [
                collapse
            ]
        },
        'type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'object_type_def': {
            'finalizers': [
                collapse
            ]
        },
        'object_as_part': {
            'finalizers': [
                collapse
            ]
        },
        'object_under_part': {
            'finalizers': [
                collapse
            ]
        },
        'nested_table_type_def': {
            'finalizers': [
                collapse
            ]
        },
        'sqlj_object_type': {
            'finalizers': [
                collapse
            ]
        },
        'type_body': {
            'finalizers': [
                collapse
            ]
        },
        'type_body_elements': {
            'finalizers': [
                collapse
            ]
        },
        'map_order_func_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'subprog_decl_in_type': {
            'finalizers': [
                collapse
            ]
        },
        'proc_decl_in_type': {
            'finalizers': [
                collapse
            ]
        },
        'func_decl_in_type': {
            'finalizers': [
                collapse
            ]
        },
        'constructor_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'modifier_clause': {
            'finalizers': [
                collapse
            ]
        },
        'object_member_spec': {
            'finalizers': [
                collapse
            ]
        },
        'sqlj_object_type_attr': {
            'finalizers': [
                collapse
            ]
        },
        'element_spec': {
            'finalizers': [
                collapse
            ]
        },
        'element_spec_options': {
            'finalizers': [
                collapse
            ]
        },
        'subprogram_spec': {
            'finalizers': [
                collapse
            ]
        },
        'type_procedure_spec': {
            'finalizers': [
                collapse
            ]
        },
        'type_function_spec': {
            'finalizers': [
                collapse
            ]
        },
        'constructor_spec': {
            'finalizers': [
                collapse
            ]
        },
        'map_order_function_spec': {
            'finalizers': [
                collapse
            ]
        },
        'pragma_clause': {
            'finalizers': [
                collapse
            ]
        },
        'pragma_elements': {
            'finalizers': [
                collapse
            ]
        },
        'type_elements_parameter': {
            'finalizers': [
                collapse
            ]
        },
        'drop_sequence': {
            'finalizers': [
                collapse
            ]
        },
        'alter_sequence': {
            'finalizers': [
                collapse
            ]
        },
        'create_sequence': {
            'finalizers': [
                collapse
            ]
        },
        'sequence_spec': {
            'finalizers': [
                collapse
            ]
        },
        'sequence_start_clause': {
            'finalizers': [
                collapse
            ]
        },
        'invoker_rights_clause': {
            'finalizers': [
                collapse
            ]
        },
        'compiler_parameters_clause': {
            'finalizers': [
                collapse
            ]
        },
        'call_spec': {
            'finalizers': [
                collapse
            ]
        },
        'java_spec': {
            'finalizers': [
                collapse
            ]
        },
        'c_spec': {
            'finalizers': [
                collapse
            ]
        },
        'c_agent_in_clause': {
            'finalizers': [
                collapse
            ]
        },
        'c_parameters_clause': {
            'finalizers': [
                collapse
            ]
        },
        'parameter': {
            'finalizers': [
                collapse
            ]
        },
        'default_value_part': {
            'finalizers': [
                collapse
            ]
        },
        'declare_spec': {
            'finalizers': [
                collapse
            ]
        },
        'variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'subtype_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_spec': {
            'finalizers': [
                collapse
            ]
        },
        'exception_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'pragma_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'record_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'record_type_dec': {
            'finalizers': [
                collapse
            ]
        },
        'field_spec': {
            'finalizers': [
                collapse
            ]
        },
        'record_var_dec': {
            'finalizers': [
                collapse
            ]
        },
        'table_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'table_type_dec': {
            'finalizers': [
                collapse
            ]
        },
        'table_indexed_by_part': {
            'finalizers': [
                collapse
            ]
        },
        'varray_type_def': {
            'finalizers': [
                collapse
            ]
        },
        'table_var_dec': {
            'finalizers': [
                collapse
            ]
        },
        'seq_of_statements': {
            'finalizers': [
                collapse
            ]
        },
        'label_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'assignment_statement': {
            'finalizers': [
                collapse
            ]
        },
        'continue_statement': {
            'finalizers': [
                collapse
            ]
        },
        'exit_statement': {
            'finalizers': [
                collapse
            ]
        },
        'goto_statement': {
            'finalizers': [
                collapse
            ]
        },
        'if_statement': {
            'finalizers': [
                collapse
            ]
        },
        'elsif_part': {
            'finalizers': [
                collapse
            ]
        },
        'else_part': {
            'finalizers': [
                collapse
            ]
        },
        'loop_statement': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_loop_param': {
            'finalizers': [
                collapse
            ]
        },
        'forall_statement': {
            'finalizers': [
                collapse
            ]
        },
        'bounds_clause': {
            'finalizers': [
                collapse
            ]
        },
        'between_bound': {
            'finalizers': [
                collapse
            ]
        },
        'lower_bound': {
            'finalizers': [
                collapse
            ]
        },
        'upper_bound': {
            'finalizers': [
                collapse
            ]
        },
        'null_statement': {
            'finalizers': [
                collapse
            ]
        },
        'raise_statement': {
            'finalizers': [
                collapse
            ]
        },
        'return_statement': {
            'finalizers': [
                collapse
            ]
        },
        'function_call': {
            'finalizers': [
                collapse
            ]
        },
        'body': {
            'finalizers': [
                collapse
            ]
        },
        'exception_handler': {
            'finalizers': [
                collapse
            ]
        },
        'trigger_block': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'sql_statement': {
            'finalizers': [
                collapse
            ]
        },
        'execute_immediate': {
            'finalizers': [
                collapse
            ]
        },
        'dynamic_returning_clause': {
            'finalizers': [
                collapse
            ]
        },
        'data_manipulation_language_statements': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_manipulation_statements': {
            'finalizers': [
                collapse
            ]
        },
        'close_statement': {
            'finalizers': [
                collapse
            ]
        },
        'open_statement': {
            'finalizers': [
                collapse
            ]
        },
        'fetch_statement': {
            'finalizers': [
                collapse
            ]
        },
        'open_for_statement': {
            'finalizers': [
                collapse
            ]
        },
        'transaction_control_statements': {
            'finalizers': [
                collapse
            ]
        },
        'set_transaction_command': {
            'finalizers': [
                collapse
            ]
        },
        'set_constraint_command': {
            'finalizers': [
                collapse
            ]
        },
        'commit_statement': {
            'finalizers': [
                collapse
            ]
        },
        'write_clause': {
            'finalizers': [
                collapse
            ]
        },
        'rollback_statement': {
            'finalizers': [
                collapse
            ]
        },
        'savepoint_statement': {
            'finalizers': [
                collapse
            ]
        },
        'explain_statement': {
            'finalizers': [
                collapse
            ]
        },
        'select_statement': {
            'finalizers': [
                collapse
            ]
        },
        'subquery_factoring_clause': {
            'finalizers': [
                collapse
            ]
        },
        'factoring_element': {
            'finalizers': [
                collapse
            ]
        },
        'search_clause': {
            'finalizers': [
                collapse
            ]
        },
        'cycle_clause': {
            'finalizers': [
                collapse
            ]
        },
        'subquery': {
            'finalizers': [
                collapse
            ]
        },
        'subquery_operation_part': {
            'finalizers': [
                collapse
            ]
        },
        'subquery_basic_elements': {
            'finalizers': [
                collapse
            ]
        },
        'query_block': {
            'finalizers': [
                collapse
            ]
        },
        'selected_element': {
            'finalizers': [
                collapse
            ]
        },
        'from_clause': {
            'finalizers': [
                collapse
            ]
        },
        'select_list_elements': {
            'finalizers': [
                collapse
            ]
        },
        'table_ref_list': {
            'finalizers': [
                collapse
            ]
        },
        'table_ref': {
            'finalizers': [
                collapse
            ]
        },
        'table_ref_aux': {
            'finalizers': [
                collapse
            ]
        },
        'join_clause': {
            'finalizers': [
                collapse
            ]
        },
        'join_on_part': {
            'finalizers': [
                collapse
            ]
        },
        'join_using_part': {
            'finalizers': [
                collapse
            ]
        },
        'outer_join_type': {
            'finalizers': [
                collapse
            ]
        },
        'query_partition_clause': {
            'finalizers': [
                collapse
            ]
        },
        'flashback_query_clause': {
            'finalizers': [
                collapse
            ]
        },
        'pivot_clause': {
            'finalizers': [
                collapse
            ]
        },
        'pivot_element': {
            'finalizers': [
                collapse
            ]
        },
        'pivot_for_clause': {
            'finalizers': [
                collapse
            ]
        },
        'pivot_in_clause': {
            'finalizers': [
                collapse
            ]
        },
        'pivot_in_clause_element': {
            'finalizers': [
                collapse
            ]
        },
        'pivot_in_clause_elements': {
            'finalizers': [
                collapse
            ]
        },
        'unpivot_clause': {
            'finalizers': [
                collapse
            ]
        },
        'unpivot_in_clause': {
            'finalizers': [
                collapse
            ]
        },
        'unpivot_in_elements': {
            'finalizers': [
                collapse
            ]
        },
        'hierarchical_query_clause': {
            'finalizers': [
                collapse
            ]
        },
        'start_part': {
            'finalizers': [
                collapse
            ]
        },
        'group_by_clause': {
            'finalizers': [
                collapse
            ]
        },
        'group_by_elements': {
            'finalizers': [
                collapse
            ]
        },
        'rollup_cube_clause': {
            'finalizers': [
                collapse
            ]
        },
        'grouping_sets_clause': {
            'finalizers': [
                collapse
            ]
        },
        'grouping_sets_elements': {
            'finalizers': [
                collapse
            ]
        },
        'having_clause': {
            'finalizers': [
                collapse
            ]
        },
        'model_clause': {
            'finalizers': [
                collapse
            ]
        },
        'cell_reference_options': {
            'finalizers': [
                collapse
            ]
        },
        'return_rows_clause': {
            'finalizers': [
                collapse
            ]
        },
        'reference_model': {
            'finalizers': [
                collapse
            ]
        },
        'main_model': {
            'finalizers': [
                collapse
            ]
        },
        'model_column_clauses': {
            'finalizers': [
                collapse
            ]
        },
        'model_column_partition_part': {
            'finalizers': [
                collapse
            ]
        },
        'model_column_list': {
            'finalizers': [
                collapse
            ]
        },
        'model_column': {
            'finalizers': [
                collapse
            ]
        },
        'model_rules_clause': {
            'finalizers': [
                collapse
            ]
        },
        'model_rules_part': {
            'finalizers': [
                collapse
            ]
        },
        'model_rules_element': {
            'finalizers': [
                collapse
            ]
        },
        'cell_assignment': {
            'finalizers': [
                collapse
            ]
        },
        'model_iterate_clause': {
            'finalizers': [
                collapse
            ]
        },
        'until_part': {
            'finalizers': [
                collapse
            ]
        },
        'order_by_clause': {
            'finalizers': [
                collapse
            ]
        },
        'order_by_elements': {
            'finalizers': [
                collapse
            ]
        },
        'for_update_clause': {
            'finalizers': [
                collapse
            ]
        },
        'for_update_of_part': {
            'finalizers': [
                collapse
            ]
        },
        'for_update_options': {
            'finalizers': [
                collapse
            ]
        },
        'update_statement': {
            'finalizers': [
                collapse
            ]
        },
        'update_set_clause': {
            'finalizers': [
                collapse
            ]
        },
        'column_based_update_set_clause': {
            'finalizers': [
                collapse
            ]
        },
        'delete_statement': {
            'finalizers': [
                collapse
            ]
        },
        'insert_statement': {
            'finalizers': [
                collapse
            ]
        },
        'single_table_insert': {
            'finalizers': [
                collapse
            ]
        },
        'multi_table_insert': {
            'finalizers': [
                collapse
            ]
        },
        'multi_table_element': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_insert_clause': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_insert_when_part': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_insert_else_part': {
            'finalizers': [
                collapse
            ]
        },
        'insert_into_clause': {
            'finalizers': [
                collapse
            ]
        },
        'values_clause': {
            'finalizers': [
                collapse
            ]
        },
        'merge_statement': {
            'finalizers': [
                collapse
            ]
        },
        'merge_update_clause': {
            'finalizers': [
                collapse
            ]
        },
        'merge_element': {
            'finalizers': [
                collapse
            ]
        },
        'merge_update_delete_part': {
            'finalizers': [
                collapse
            ]
        },
        'merge_insert_clause': {
            'finalizers': [
                collapse
            ]
        },
        'selected_tableview': {
            'finalizers': [
                collapse
            ]
        },
        'lock_table_statement': {
            'finalizers': [
                collapse
            ]
        },
        'wait_nowait_part': {
            'finalizers': [
                collapse
            ]
        },
        'lock_table_element': {
            'finalizers': [
                collapse
            ]
        },
        'lock_mode': {
            'finalizers': [
                collapse
            ]
        },
        'general_table_ref': {
            'finalizers': [
                collapse
            ]
        },
        'static_returning_clause': {
            'finalizers': [
                collapse
            ]
        },
        'error_logging_clause': {
            'finalizers': [
                collapse
            ]
        },
        'error_logging_into_part': {
            'finalizers': [
                collapse
            ]
        },
        'error_logging_reject_part': {
            'finalizers': [
                collapse
            ]
        },
        'dml_table_expression_clause': {
            'finalizers': [
                collapse
            ]
        },
        'table_collection_expression': {
            'finalizers': [
                collapse
            ]
        },
        'subquery_restriction_clause': {
            'finalizers': [
                collapse
            ]
        },
        'sample_clause': {
            'finalizers': [
                collapse
            ]
        },
        'seed_part': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_expression': {
            'finalizers': [
                collapse
            ]
        },
        'expression_list': {
            'finalizers': [
                collapse
            ]
        },
        'condition': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'logical_or_expression': {
            'finalizers': [
                collapse
            ]
        },
        'logical_and_expression': {
            'finalizers': [
                collapse
            ]
        },
        'negated_expression': {
            'finalizers': [
                collapse
            ]
        },
        'equality_expression': {
            'finalizers': [
                collapse
            ]
        },
        'multiset_expression': {
            'finalizers': [
                collapse
            ]
        },
        'multiset_type': {
            'finalizers': [
                collapse
            ]
        },
        'relational_expression': {
            'finalizers': [
                collapse
            ]
        },
        'compound_expression': {
            'finalizers': [
                collapse
            ]
        },
        'relational_operator': {
            'finalizers': [
                collapse
            ]
        },
        'like_type': {
            'finalizers': [
                collapse
            ]
        },
        'like_escape_part': {
            'finalizers': [
                collapse
            ]
        },
        'in_elements': {
            'finalizers': [
                collapse
            ]
        },
        'between_elements': {
            'finalizers': [
                collapse
            ]
        },
        'concatenation': {
            'finalizers': [
                collapse
            ]
        },
        'additive_expression': {
            'finalizers': [
                collapse
            ]
        },
        'multiply_expression': {
            'finalizers': [
                collapse
            ]
        },
        'datetime_expression': {
            'finalizers': [
                collapse
            ]
        },
        'interval_expression': {
            'finalizers': [
                collapse
            ]
        },
        'model_expression': {
            'finalizers': [
                collapse
            ]
        },
        'model_expression_element': {
            'finalizers': [
                collapse
            ]
        },
        'single_column_for_loop': {
            'finalizers': [
                collapse
            ]
        },
        'for_like_part': {
            'finalizers': [
                collapse
            ]
        },
        'for_increment_decrement_type': {
            'finalizers': [
                collapse
            ]
        },
        'multi_column_for_loop': {
            'finalizers': [
                collapse
            ]
        },
        'unary_expression': {
            'finalizers': [
                collapse
            ]
        },
        'case_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simple_case_statement': {
            'finalizers': [
                collapse
            ]
        },
        'simple_case_when_part': {
            'finalizers': [
                collapse
            ]
        },
        'searched_case_statement': {
            'finalizers': [
                collapse
            ]
        },
        'searched_case_when_part': {
            'finalizers': [
                collapse
            ]
        },
        'case_else_part': {
            'finalizers': [
                collapse
            ]
        },
        'atom': {
            'finalizers': [
                collapse
            ]
        },
        'expression_or_vector': {
            'finalizers': [
                collapse
            ]
        },
        'vector_expr': {
            'finalizers': [
                collapse
            ]
        },
        'quantified_expression': {
            'finalizers': [
                collapse
            ]
        },
        'standard_function': {
            'finalizers': [
                collapse
            ]
        },
        'over_clause_keyword': {
            'finalizers': [
                collapse
            ]
        },
        'within_or_over_clause_keyword': {
            'finalizers': [
                collapse
            ]
        },
        'standard_prediction_function_keyword': {
            'finalizers': [
                collapse
            ]
        },
        'over_clause': {
            'finalizers': [
                collapse
            ]
        },
        'windowing_clause': {
            'finalizers': [
                collapse
            ]
        },
        'windowing_type': {
            'finalizers': [
                collapse
            ]
        },
        'windowing_elements': {
            'finalizers': [
                collapse
            ]
        },
        'using_clause': {
            'finalizers': [
                collapse
            ]
        },
        'using_element': {
            'finalizers': [
                collapse
            ]
        },
        'collect_order_by_part': {
            'finalizers': [
                collapse
            ]
        },
        'within_or_over_part': {
            'finalizers': [
                collapse
            ]
        },
        'cost_matrix_clause': {
            'finalizers': [
                collapse
            ]
        },
        'xml_passing_clause': {
            'finalizers': [
                collapse
            ]
        },
        'xml_attributes_clause': {
            'finalizers': [
                collapse
            ]
        },
        'xml_namespaces_clause': {
            'finalizers': [
                collapse
            ]
        },
        'xml_table_column': {
            'finalizers': [
                collapse
            ]
        },
        'xml_general_default_part': {
            'finalizers': [
                collapse
            ]
        },
        'xml_multiuse_expression_element': {
            'finalizers': [
                collapse
            ]
        },
        'xmlroot_param_version_part': {
            'finalizers': [
                collapse
            ]
        },
        'xmlroot_param_standalone_part': {
            'finalizers': [
                collapse
            ]
        },
        'xmlserialize_param_enconding_part': {
            'finalizers': [
                collapse
            ]
        },
        'xmlserialize_param_version_part': {
            'finalizers': [
                collapse
            ]
        },
        'xmlserialize_param_ident_part': {
            'finalizers': [
                collapse
            ]
        },
        'sql_plus_command': {
            'finalizers': [
                collapse
            ]
        },
        'whenever_command': {
            'finalizers': [
                collapse
            ]
        },
        'set_command': {
            'finalizers': [
                collapse
            ]
        },
        'exit_command': {
            'finalizers': [
                collapse
            ]
        },
        'prompt_command': {
            'finalizers': [
                collapse
            ]
        },
        'show_errors_command': {
            'finalizers': [
                collapse
            ]
        },
        'partition_extension_clause': {
            'finalizers': [
                collapse
            ]
        },
        'column_alias': {
            'finalizers': [
                collapse
            ]
        },
        'table_alias': {
            'finalizers': [
                collapse
            ]
        },
        'alias_quoted_string': {
            'finalizers': [
                collapse
            ]
        },
        'where_clause': {
            'finalizers': [
                collapse
            ]
        },
        'current_of_clause': {
            'finalizers': [
                collapse
            ]
        },
        'into_clause': {
            'finalizers': [
                collapse
            ]
        },
        'xml_column_name': {
            'finalizers': [
                collapse
            ]
        },
        'cost_class_name': {
            'finalizers': [
                collapse
            ]
        },
        'attribute_name': {
            'finalizers': [
                collapse
            ]
        },
        'savepoint_name': {
            'finalizers': [
                collapse
            ]
        },
        'rollback_segment_name': {
            'finalizers': [
                collapse
            ]
        },
        'table_var_name': {
            'finalizers': [
                collapse
            ]
        },
        'schema_name': {
            'finalizers': [
                collapse
            ]
        },
        'routine_name': {
            'finalizers': [
                collapse
            ]
        },
        'package_name': {
            'finalizers': [
                collapse
            ]
        },
        'implementation_type_name': {
            'finalizers': [
                collapse
            ]
        },
        'parameter_name': {
            'finalizers': [
                collapse
            ]
        },
        'reference_model_name': {
            'finalizers': [
                collapse
            ]
        },
        'main_model_name': {
            'finalizers': [
                collapse
            ]
        },
        'aggregate_function_name': {
            'finalizers': [
                collapse
            ]
        },
        'query_name': {
            'finalizers': [
                collapse
            ]
        },
        'constraint_name': {
            'finalizers': [
                collapse
            ]
        },
        'label_name': {
            'finalizers': [
                collapse
            ]
        },
        'type_name': {
            'finalizers': [
                collapse
            ]
        },
        'sequence_name': {
            'finalizers': [
                collapse
            ]
        },
        'exception_name': {
            'finalizers': [
                collapse
            ]
        },
        'function_name': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_name': {
            'finalizers': [
                collapse
            ]
        },
        'trigger_name': {
            'finalizers': [
                collapse
            ]
        },
        'variable_name': {
            'finalizers': [
                collapse
            ]
        },
        'index_name': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_name': {
            'finalizers': [
                collapse
            ]
        },
        'record_name': {
            'finalizers': [
                collapse
            ]
        },
        'collection_name': {
            'finalizers': [
                collapse
            ]
        },
        'link_name': {
            'finalizers': [
                collapse
            ]
        },
        'column_name': {
            'finalizers': [
                collapse
            ]
        },
        'tableview_name': {
            'finalizers': [
                collapse
            ]
        },
        'char_set_name': {
            'finalizers': [
                collapse
            ]
        },
        'keep_clause': {
            'finalizers': [
                collapse
            ]
        },
        'function_argument': {
            'finalizers': [
                collapse
            ]
        },
        'function_argument_analytic': {
            'finalizers': [
                collapse
            ]
        },
        'function_argument_modeling': {
            'finalizers': [
                collapse
            ]
        },
        'respect_or_ignore_nulls': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'type_spec': {
            'finalizers': [
                collapse
            ]
        },
        'datatype': {
            'finalizers': [
                collapse
            ]
        },
        'precision_part': {
            'finalizers': [
                collapse
            ]
        },
        'native_datatype_element': {
            'finalizers': [
                collapse
            ]
        },
        'bind_variable': {
            'finalizers': [
                collapse
            ]
        },
        'general_element': {
            'finalizers': [
                collapse
            ]
        },
        'general_element_part': {
            'finalizers': [
                collapse
            ]
        },
        'table_element': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'numeric': {
            'finalizers': [
                collapse
            ]
        },
        'numeric_negative': {
            'finalizers': [
                collapse
            ]
        },
        'quoted_string': {
            'finalizers': [
                collapse
            ]
        },
        'id': {
            'finalizers': [
                collapse
            ]
        },
        'id_expression': {
            'finalizers': [
                collapse
            ]
        },
        'not_equal_op': {
            'finalizers': [
                collapse
            ]
        },
        'greater_than_or_equals_op': {
            'finalizers': [
                collapse
            ]
        },
        'less_than_or_equals_op': {
            'finalizers': [
                collapse
            ]
        },
        'concatenation_op': {
            'finalizers': [
                collapse
            ]
        },
        'outer_join_sign': {
            'finalizers': [
                collapse
            ]
        },
        'regular_id': {
            'finalizers': [
                collapse
            ]
        }
    }
};
