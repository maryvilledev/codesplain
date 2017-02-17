let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'SQLite',
    'grammar_file': 'SQLite.g4',
    'entry_rule': 'parse',
    'rules': {
        'parse': {
            'finalizers': [
                collapse
            ]
        },
        'error': {
            'finalizers': [
                collapse
            ]
        },
        'sql_stmt_list': {
            'finalizers': [
                collapse
            ]
        },
        'sql_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'alter_table_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'analyze_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'attach_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'begin_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'commit_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'compound_select_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'create_index_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'create_table_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'create_trigger_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'create_view_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'create_virtual_table_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'delete_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'delete_stmt_limited': {
            'finalizers': [
                collapse
            ]
        },
        'detach_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'drop_index_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'drop_table_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'drop_trigger_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'drop_view_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'factored_select_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'insert_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'pragma_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'reindex_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'release_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'rollback_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'savepoint_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'simple_select_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'select_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'select_or_values': {
            'finalizers': [
                collapse
            ]
        },
        'update_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'update_stmt_limited': {
            'finalizers': [
                collapse
            ]
        },
        'vacuum_stmt': {
            'finalizers': [
                collapse
            ]
        },
        'column_def': {
            'finalizers': [
                collapse
            ]
        },
        'type_name': {
            'finalizers': [
                collapse
            ]
        },
        'column_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'conflict_clause': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'foreign_key_clause': {
            'finalizers': [
                collapse
            ]
        },
        'raise_function': {
            'finalizers': [
                collapse
            ]
        },
        'indexed_column': {
            'finalizers': [
                collapse
            ]
        },
        'table_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'with_clause': {
            'finalizers': [
                collapse
            ]
        },
        'qualified_table_name': {
            'finalizers': [
                collapse
            ]
        },
        'ordering_term': {
            'finalizers': [
                collapse
            ]
        },
        'pragma_value': {
            'finalizers': [
                collapse
            ]
        },
        'common_table_expression': {
            'finalizers': [
                collapse
            ]
        },
        'result_column': {
            'finalizers': [
                collapse
            ]
        },
        'table_or_subquery': {
            'finalizers': [
                collapse
            ]
        },
        'join_clause': {
            'finalizers': [
                collapse
            ]
        },
        'join_operator': {
            'finalizers': [
                collapse
            ]
        },
        'join_constraint': {
            'finalizers': [
                collapse
            ]
        },
        'select_core': {
            'finalizers': [
                collapse
            ]
        },
        'compound_operator': {
            'finalizers': [
                collapse
            ]
        },
        'cte_table_name': {
            'finalizers': [
                collapse
            ]
        },
        'signed_number': {
            'finalizers': [
                collapse
            ]
        },
        'literal_value': {
            'finalizers': [
                collapse
            ]
        },
        'unary_operator': {
            'finalizers': [
                collapse
            ]
        },
        'error_message': {
            'finalizers': [
                collapse
            ]
        },
        'module_argument': {
            'finalizers': [
                collapse
            ]
        },
        'column_alias': {
            'finalizers': [
                collapse
            ]
        },
        'keyword': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'function_name': {
            'finalizers': [
                collapse
            ]
        },
        'database_name': {
            'finalizers': [
                collapse
            ]
        },
        'table_name': {
            'finalizers': [
                collapse
            ]
        },
        'table_or_index_name': {
            'finalizers': [
                collapse
            ]
        },
        'new_table_name': {
            'finalizers': [
                collapse
            ]
        },
        'column_name': {
            'finalizers': [
                collapse
            ]
        },
        'collation_name': {
            'finalizers': [
                collapse
            ]
        },
        'foreign_table': {
            'finalizers': [
                collapse
            ]
        },
        'index_name': {
            'finalizers': [
                collapse
            ]
        },
        'trigger_name': {
            'finalizers': [
                collapse
            ]
        },
        'view_name': {
            'finalizers': [
                collapse
            ]
        },
        'module_name': {
            'finalizers': [
                collapse
            ]
        },
        'pragma_name': {
            'finalizers': [
                collapse
            ]
        },
        'savepoint_name': {
            'finalizers': [
                collapse
            ]
        },
        'table_alias': {
            'finalizers': [
                collapse
            ]
        },
        'transaction_name': {
            'finalizers': [
                collapse
            ]
        },
        'any_name': {
            'finalizers': [
                collapse
            ]
        }
    }
};
