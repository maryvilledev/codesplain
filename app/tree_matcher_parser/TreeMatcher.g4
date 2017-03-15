grammar TreeMatcher;

// Ignore whitespaces
WS
  : [ \t\n\r] + -> skip
  ;

main
  : expr
  ;

expr
  : atom ('|' atom)*
  ;

atom
  : expr_atom
  | wildcard
  | search
  | node
  ;

expr_atom
  : '(' expr ')'
  ;
wildcard
  : '?'
  ;
search
  : '/' searchable_atom
  ;

searchable_atom
  : expr_atom
  | node
  ;

node
  : (mod_type | mod_terminal)
    (mod_store | mod_eq_id | mod_eq_json_string)*
    (mod_fixed_children | mod_fixed_child | mod_variable_children | mod_variable_child)?
  ;

mod_type
  : IDENTIFIER
  ;
mod_terminal
  : '.' IDENTIFIER
  ;

mod_store
  : ':' IDENTIFIER
  ;

mod_eq_id
  : '=' IDENTIFIER
  ;
mod_eq_json_string
  : '=' JSON_STRING
  ;

mod_fixed_children
  : '[' expr_list ']'
  ;
mod_fixed_child
  : expr
  ;

mod_variable_children
  : '[' expr_list ',' atom '*' ',' expr_list ']'
  ;
mod_variable_child
  : atom '*'
  ;

expr_list
  : expr (',' expr)*
  | // empty
  ;

IDENTIFIER
  : [a-zA-Z0-9_]+
  ;

// JSON string
JSON_STRING
  : '"' (ESC | ~ ["\\])* '"'
  ;
fragment ESC
  : '\\' (["\\/bfnrt] | UNICODE)
  ;
fragment UNICODE
  : 'u' HEX HEX HEX HEX
  ;
fragment HEX
  : [0-9a-fA-F]
  ;
