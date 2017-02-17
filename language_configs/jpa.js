let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'JPA',
    'grammar_file': 'JPA.g4',
    'entry_rule': 'ql_statement',
    'rules': {
        'ql_statement': {
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
        'delete_statement': {
            'finalizers': [
                collapse
            ]
        },
        'from_clause': {
            'finalizers': [
                collapse
            ]
        },
        'identification_variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'range_variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'join': {
            'finalizers': [
                collapse
            ]
        },
        'fetch_join': {
            'finalizers': [
                collapse
            ]
        },
        'join_spec': {
            'finalizers': [
                collapse
            ]
        },
        'join_association_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'join_collection_valued_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'join_single_valued_association_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'collection_member_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'single_valued_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'state_field_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'single_valued_association_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'collection_valued_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'state_field': {
            'finalizers': [
                collapse
            ]
        },
        'update_clause': {
            'finalizers': [
                collapse
            ]
        },
        'update_item': {
            'finalizers': [
                collapse
            ]
        },
        'new_value': {
            'finalizers': [
                collapse
            ]
        },
        'delete_clause': {
            'finalizers': [
                collapse
            ]
        },
        'select_clause': {
            'finalizers': [
                collapse
            ]
        },
        'select_expression': {
            'finalizers': [
                collapse
            ]
        },
        'constructor_expression': {
            'finalizers': [
                collapse
            ]
        },
        'constructor_item': {
            'finalizers': [
                collapse
            ]
        },
        'aggregate_expression': {
            'finalizers': [
                collapse
            ]
        },
        'where_clause': {
            'finalizers': [
                collapse
            ]
        },
        'groupby_clause': {
            'finalizers': [
                collapse
            ]
        },
        'groupby_item': {
            'finalizers': [
                collapse
            ]
        },
        'having_clause': {
            'finalizers': [
                collapse
            ]
        },
        'orderby_clause': {
            'finalizers': [
                collapse
            ]
        },
        'orderby_item': {
            'finalizers': [
                collapse
            ]
        },
        'subquery': {
            'finalizers': [
                collapse
            ]
        },
        'subquery_from_clause': {
            'finalizers': [
                collapse
            ]
        },
        'subselect_identification_variable_declaration': {
            'finalizers': [
                collapse
            ]
        },
        'association_path_expression': {
            'finalizers': [
                collapse
            ]
        },
        'simple_select_clause': {
            'finalizers': [
                collapse
            ]
        },
        'simple_select_expression': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_expression': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_term': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_factor': {
            'finalizers': [
                collapse
            ]
        },
        'conditional_primary': {
            'finalizers': [
                collapse
            ]
        },
        'simple_cond_expression': {
            'finalizers': [
                collapse
            ]
        },
        'between_expression': {
            'finalizers': [
                collapse
            ]
        },
        'in_expression': {
            'finalizers': [
                collapse
            ]
        },
        'in_item': {
            'finalizers': [
                collapse
            ]
        },
        'like_expression': {
            'finalizers': [
                collapse
            ]
        },
        'null_comparison_expression': {
            'finalizers': [
                collapse
            ]
        },
        'empty_collection_comparison_expression': {
            'finalizers': [
                collapse
            ]
        },
        'collection_member_expression': {
            'finalizers': [
                collapse
            ]
        },
        'exists_expression': {
            'finalizers': [
                collapse
            ]
        },
        'all_or_any_expression': {
            'finalizers': [
                collapse
            ]
        },
        'comparison_expression': {
            'finalizers': [
                collapse
            ]
        },
        'comparison_operator': {
            'finalizers': [
                collapse
            ]
        },
        'arithmetic_expression': {
            'finalizers': [
                collapse
            ]
        },
        'simple_arithmetic_expression': {
            'finalizers': [
                collapse
            ]
        },
        'arithmetic_term': {
            'finalizers': [
                collapse
            ]
        },
        'arithmetic_factor': {
            'finalizers': [
                collapse
            ]
        },
        'arithmetic_primary': {
            'finalizers': [
                collapse
            ]
        },
        'string_expression': {
            'finalizers': [
                collapse
            ]
        },
        'string_primary': {
            'finalizers': [
                collapse
            ]
        },
        'datetime_expression': {
            'finalizers': [
                collapse
            ]
        },
        'datetime_primary': {
            'finalizers': [
                collapse
            ]
        },
        'boolean_expression': {
            'finalizers': [
                collapse
            ]
        },
        'boolean_primary': {
            'finalizers': [
                collapse
            ]
        },
        'enum_expression': {
            'finalizers': [
                collapse
            ]
        },
        'enum_primary': {
            'finalizers': [
                collapse
            ]
        },
        'entity_expression': {
            'finalizers': [
                collapse
            ]
        },
        'simple_entity_expression': {
            'finalizers': [
                collapse
            ]
        },
        'functions_returning_numerics': {
            'finalizers': [
                collapse
            ]
        },
        'functions_returning_datetime': {
            'finalizers': [
                collapse
            ]
        },
        'functions_returning_strings': {
            'finalizers': [
                collapse
            ]
        },
        'trim_specification': {
            'finalizers': [
                collapse
            ]
        },
        'numeric_literal': {
            'finalizers': [
                collapse
            ]
        },
        'pattern_value': {
            'finalizers': [
                collapse
            ]
        },
        'input_parameter': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'constructor_name': {
            'finalizers': [
                collapse
            ]
        },
        'enum_literal': {
            'finalizers': [
                collapse
            ]
        },
        'boolean_literal': {
            'finalizers': [
                collapse
            ]
        },
        'simple_state_field': {
            'finalizers': [
                collapse
            ]
        },
        'embedded_class_state_field': {
            'finalizers': [
                collapse
            ]
        },
        'single_valued_association_field': {
            'finalizers': [
                collapse
            ]
        },
        'collection_valued_association_field': {
            'finalizers': [
                collapse
            ]
        },
        'abstract_schema_name': {
            'finalizers': [
                collapse
            ]
        }
    }
};
