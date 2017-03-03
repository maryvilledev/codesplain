grammar TreeMatcher;

// Ignore whitespaces
WS
  : [ \t\n\r] + -> skip
  ;

main
  : node
  ;

node
  : modifier_type? (modifier_store | modifier_eq)* (modifier_child | modifier_children?)
  ;

descend: '/';

modifier_type
  : modifier_type_node
  | modifier_type_terminal
  ;
modifier_type_node
  : ident
  ;
modifier_type_terminal
  : '.' ident
  ;

modifier_store
  : ':' ident
  ;

modifier_eq
  : '=' (ident | json_string)
  ;

modifier_child
  : child
  ;

modifier_children
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
