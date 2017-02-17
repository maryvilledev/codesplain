let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'tsql',
    'grammar_file': 'tsql.g4',
    'entry_rule': 'tsql_file',
    'rules': {
        'tsql_file': {
            'finalizers': [
                collapse
            ]
        },
        'batch': {
            'finalizers': [
                collapse
            ]
        },
        'sql_clauses': {
            'finalizers': [
                collapse
            ]
        },
        'sql_clause': {
            'finalizers': [
                collapse
            ]
        },
        'dml_clause': {
            'finalizers': [
                collapse
            ]
        },
        'ddl_clause': {
            'finalizers': [
                collapse
            ]
        },
        'cfl_statement': {
            'finalizers': [
                collapse
            ]
        },
        'empty_statement': {
            'finalizers': [
                collapse
            ]
        },
        'another_statement': {
            'finalizers': [
                collapse
            ]
        },
        'delete_statement': {
            'finalizers': [
                collapse
            ]
        },
        'delete_statement_from': {
            'finalizers': [
                collapse
            ]
        },
        'insert_statement': {
            'finalizers': [
                collapse
            ]
        },
        'insert_statement_value': {
            'finalizers': [
                collapse
            ]
        },
        'select_statement': {
            'finalizers': [
                collapse
            ]
        },
        'update_statement': {
            'finalizers': [
                collapse
            ]
        },
        'output_clause': {
            'finalizers': [
                collapse
            ]
        },
        'output_dml_list_elem': {
            'finalizers': [
                collapse
            ]
        },
        'output_column_name': {
            'finalizers': [
                collapse
            ]
        },
        'create_database': {
            'finalizers': [
                collapse
            ]
        },
        'create_index': {
            'finalizers': [
                collapse
            ]
        },
        'create_procedure': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_param': {
            'finalizers': [
                collapse
            ]
        },
        'procedure_option': {
            'finalizers': [
                collapse
            ]
        },
        'create_statistics': {
            'finalizers': [
                collapse
            ]
        },
        'create_table': {
            'finalizers': [
                collapse
            ]
        },
        'create_view': {
            'finalizers': [
                collapse
            ]
        },
        'view_attribute': {
            'finalizers': [
                collapse
            ]
        },
        'alter_table': {
            'finalizers': [
                collapse
            ]
        },
        'alter_database': {
            'finalizers': [
                collapse
            ]
        },
        'database_optionspec': {
            'finalizers': [
                collapse
            ]
        },
        'auto_option': {
            'finalizers': [
                collapse
            ]
        },
        'change_tracking_option': {
            'finalizers': [
                collapse
            ]
        },
        'change_tracking_option_list': {
            'finalizers': [
                collapse
            ]
        },
        'containment_option': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_option': {
            'finalizers': [
                collapse
            ]
        },
        'date_correlation_optimization_option': {
            'finalizers': [
                collapse
            ]
        },
        'db_encryption_option': {
            'finalizers': [
                collapse
            ]
        },
        'db_state_option': {
            'finalizers': [
                collapse
            ]
        },
        'db_update_option': {
            'finalizers': [
                collapse
            ]
        },
        'db_user_access_option': {
            'finalizers': [
                collapse
            ]
        },
        'delayed_durability_option': {
            'finalizers': [
                collapse
            ]
        },
        'external_access_option': {
            'finalizers': [
                collapse
            ]
        },
        'mixed_page_allocation_option': {
            'finalizers': [
                collapse
            ]
        },
        'parameterization_option': {
            'finalizers': [
                collapse
            ]
        },
        'recovery_option': {
            'finalizers': [
                collapse
            ]
        },
        'service_broker_option': {
            'finalizers': [
                collapse
            ]
        },
        'snapshot_option': {
            'finalizers': [
                collapse
            ]
        },
        'sql_option': {
            'finalizers': [
                collapse
            ]
        },
        'target_recovery_time_option': {
            'finalizers': [
                collapse
            ]
        },
        'termination': {
            'finalizers': [
                collapse
            ]
        },
        'drop_index': {
            'finalizers': [
                collapse
            ]
        },
        'drop_procedure': {
            'finalizers': [
                collapse
            ]
        },
        'drop_statistics': {
            'finalizers': [
                collapse
            ]
        },
        'drop_table': {
            'finalizers': [
                collapse
            ]
        },
        'drop_view': {
            'finalizers': [
                collapse
            ]
        },
        'create_type': {
            'finalizers': [
                collapse
            ]
        },
        'drop_type': {
            'finalizers': [
                collapse
            ]
        },
        'rowset_function_limited': {
            'finalizers': [
                collapse
            ]
        },
        'openquery': {
            'finalizers': [
                collapse
            ]
        },
        'opendatasource': {
            'finalizers': [
                collapse
            ]
        },
        'declare_statement': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_statement': {
            'finalizers': [
                collapse
            ]
        },
        'execute_statement': {
            'finalizers': [
                collapse
            ]
        },
        'execute_statement_arg': {
            'finalizers': [
                collapse
            ]
        },
        'execute_var_string': {
            'finalizers': [
                collapse
            ]
        },
        'security_statement': {
            'finalizers': [
                collapse
            ]
        },
        'grant_permission': {
            'finalizers': [
                collapse
            ]
        },
        'set_statement': {
            'finalizers': [
                collapse
            ]
        },
        'transaction_statement': {
            'finalizers': [
                collapse
            ]
        },
        'go_statement': {
            'finalizers': [
                collapse
            ]
        },
        'use_statement': {
            'finalizers': [
                collapse
            ]
        },
        'execute_clause': {
            'finalizers': [
                collapse
            ]
        },
        'declare_local': {
            'finalizers': [
                collapse
            ]
        },
        'table_type_definition': {
            'finalizers': [
                collapse
            ]
        },
        'column_def_table_constraints': {
            'finalizers': [
                collapse
            ]
        },
        'column_def_table_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'column_definition': {
            'finalizers': [
                collapse
            ]
        },
        'column_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'table_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'index_options': {
            'finalizers': [
                collapse
            ]
        },
        'index_option': {
            'finalizers': [
                collapse
            ]
        },
        'declare_cursor': {
            'finalizers': [
                collapse
            ]
        },
        'declare_set_cursor_common': {
            'finalizers': [
                collapse
            ]
        },
        'fetch_cursor': {
            'finalizers': [
                collapse
            ]
        },
        'set_special': {
            'finalizers': [
                collapse
            ]
        },
        'constant_LOCAL_ID': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'constant_expression': {
            'finalizers': [
                collapse
            ]
        },
        'subquery': {
            'finalizers': [
                collapse
            ]
        },
        'with_expression': {
            'finalizers': [
                collapse
            ]
        },
        'common_table_expression': {
            'finalizers': [
                collapse
            ]
        },
        'update_elem': {
            'finalizers': [
                collapse
            ]
        },
        'search_condition_list': {
            'finalizers': [
                collapse
            ]
        },
        'search_condition': {
            'finalizers': [
                collapse
            ]
        },
        'search_condition_and': {
            'finalizers': [
                collapse
            ]
        },
        'search_condition_not': {
            'finalizers': [
                collapse
            ]
        },
        'predicate': {
            'finalizers': [
                collapse
            ]
        },
        'query_expression': {
            'finalizers': [
                collapse
            ]
        },
        'union': {
            'finalizers': [
                collapse
            ]
        },
        'query_specification': {
            'finalizers': [
                collapse
            ]
        },
        'top_clause': {
            'finalizers': [
                collapse
            ]
        },
        'top_percent': {
            'finalizers': [
                collapse
            ]
        },
        'top_count': {
            'finalizers': [
                collapse
            ]
        },
        'order_by_clause': {
            'finalizers': [
                collapse
            ]
        },
        'for_clause': {
            'finalizers': [
                collapse
            ]
        },
        'xml_common_directives': {
            'finalizers': [
                collapse
            ]
        },
        'order_by_expression': {
            'finalizers': [
                collapse
            ]
        },
        'group_by_item': {
            'finalizers': [
                collapse
            ]
        },
        'option_clause': {
            'finalizers': [
                collapse
            ]
        },
        'option': {
            'finalizers': [
                collapse
            ]
        },
        'optimize_for_arg': {
            'finalizers': [
                collapse
            ]
        },
        'select_list': {
            'finalizers': [
                collapse
            ]
        },
        'select_list_elem': {
            'finalizers': [
                collapse
            ]
        },
        'table_sources': {
            'finalizers': [
                collapse
            ]
        },
        'table_source': {
            'finalizers': [
                collapse
            ]
        },
        'table_source_item_joined': {
            'finalizers': [
                collapse
            ]
        },
        'table_source_item': {
            'finalizers': [
                collapse
            ]
        },
        'change_table': {
            'finalizers': [
                collapse
            ]
        },
        'join_part': {
            'finalizers': [
                collapse
            ]
        },
        'table_name_with_hint': {
            'finalizers': [
                collapse
            ]
        },
        'rowset_function': {
            'finalizers': [
                collapse
            ]
        },
        'bulk_option': {
            'finalizers': [
                collapse
            ]
        },
        'derived_table': {
            'finalizers': [
                collapse
            ]
        },
        'function_call': {
            'finalizers': [
                collapse
            ]
        },
        'switch_section': {
            'finalizers': [
                collapse
            ]
        },
        'switch_search_condition_section': {
            'finalizers': [
                collapse
            ]
        },
        'as_table_alias': {
            'finalizers': [
                collapse
            ]
        },
        'table_alias': {
            'finalizers': [
                collapse
            ]
        },
        'with_table_hints': {
            'finalizers': [
                collapse
            ]
        },
        'insert_with_table_hints': {
            'finalizers': [
                collapse
            ]
        },
        'table_hint': {
            'finalizers': [
                collapse
            ]
        },
        'index_value': {
            'finalizers': [
                collapse
            ]
        },
        'column_alias_list': {
            'finalizers': [
                collapse
            ]
        },
        'column_alias': {
            'finalizers': [
                collapse
            ]
        },
        'table_value_constructor': {
            'finalizers': [
                collapse
            ]
        },
        'expression_list': {
            'finalizers': [
                collapse
            ]
        },
        'ranking_windowed_function': {
            'finalizers': [
                collapse
            ]
        },
        'aggregate_windowed_function': {
            'finalizers': [
                collapse
            ]
        },
        'all_distinct_expression': {
            'finalizers': [
                collapse
            ]
        },
        'over_clause': {
            'finalizers': [
                collapse
            ]
        },
        'row_or_range_clause': {
            'finalizers': [
                collapse
            ]
        },
        'window_frame_extent': {
            'finalizers': [
                collapse
            ]
        },
        'window_frame_bound': {
            'finalizers': [
                collapse
            ]
        },
        'window_frame_preceding': {
            'finalizers': [
                collapse
            ]
        },
        'window_frame_following': {
            'finalizers': [
                collapse
            ]
        },
        'create_database_option': {
            'finalizers': [
                collapse
            ]
        },
        'database_filestream_option': {
            'finalizers': [
                collapse
            ]
        },
        'database_file_spec': {
            'finalizers': [
                collapse
            ]
        },
        'file_group': {
            'finalizers': [
                collapse
            ]
        },
        'file_spec': {
            'finalizers': [
                collapse
            ]
        },
        'full_table_name': {
            'finalizers': [
                collapse
            ]
        },
        'table_name': {
            'finalizers': [
                collapse
            ]
        },
        'simple_name': {
            'finalizers': [
                collapse
            ]
        },
        'func_proc_name': {
            'finalizers': [
                collapse
            ]
        },
        'ddl_object': {
            'finalizers': [
                collapse
            ]
        },
        'full_column_name': {
            'finalizers': [
                collapse
            ]
        },
        'column_name_list': {
            'finalizers': [
                collapse
            ]
        },
        'cursor_name': {
            'finalizers': [
                collapse
            ]
        },
        'on_off': {
            'finalizers': [
                collapse
            ]
        },
        'clustered': {
            'finalizers': [
                collapse
            ]
        },
        'null_notnull': {
            'finalizers': [
                collapse
            ]
        },
        'scalar_function_name': {
            'finalizers': [
                collapse
            ]
        },
        'data_type': {
            'finalizers': [
                collapse
            ]
        },
        'default_value': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'sign': {
            'finalizers': [
                collapse
            ]
        },
        'id': {
            'finalizers': [
                collapse
            ]
        },
        'simple_id': {
            'finalizers': [
                collapse
            ]
        },
        'comparison_operator': {
            'finalizers': [
                collapse
            ]
        },
        'assignment_operator': {
            'finalizers': [
                collapse
            ]
        },
        'file_size': {
            'finalizers': [
                collapse
            ]
        }
    }
};
