grammar TreeMatcher;

// Ignore whitespaces
WS
  : [ \t\n\r] + -> skip
  ;

main
  : node
  ;

node
  : (mod_type | mod_terminal)? (mod_store | mod_eq)* (mod_child | mod_children)?
  ;

mod_type
  : ident
  ;
mod_terminal
  : '.' ident
  ;

mod_store
  : ':' ident
  ;

mod_eq
  : '=' (ident | json_string)
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

ident
  : [a-zA-Z0-9_]+
  ;

// JSON string
json_string
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
