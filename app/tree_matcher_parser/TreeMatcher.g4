grammar TreeMatcher;

// Ignore whitespaces
WS
  : [ \t\n\r] + -> skip
  ;

main
  : node
  ;

node
  : (mod_type | mod_terminal) (mod_store | mod_eq_id | mod_eq_json_string)* (mod_child | mod_children)?
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

mod_child
  : child
  ;

mod_children
  : '[' child (',' child)* ']'
  | '[' ']'
  ;

child
  : node
  | node_search
  ;
node_search
  : '/' node
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
