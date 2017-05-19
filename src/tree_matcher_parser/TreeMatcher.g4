grammar TreeMatcher;

// Ignore whitespaces
WS
  : [ \t\n\r] + -> skip
  ;

node
  : (mod_type | mod_terminal | mod_wildcard)
    (mod_store | mod_eq_id | mod_eq_json_string | mod_cond)*
    (mod_fixed_children | mod_fixed_child | mod_variable_children | mod_variable_child)?
  ;

mod_type
  : IDENTIFIER
  ;
mod_terminal
  : '.' IDENTIFIER
  ;
mod_wildcard
  : '?'
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

mod_cond
  : '?' JSON_STRING
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

expr
  : atom ('|' atom)*
  ;

atom
  : expr_atom
  | search
  | node
  ;

expr_atom
  : '(' expr ')'
  ;
search
  : '/' searchable_atom
  ;

searchable_atom
  : expr_atom
  | node
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
