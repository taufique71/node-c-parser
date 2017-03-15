# Grammar Rules

```
/*
 * abstract_declarator -> pointer direct_abstract_declarator
 *                      | direct_abstract_declarator
 *                      | pointer
 * */

/*
 * additive_expr -> multiplicative_expr additive_expr_p
 * */

/*
 * additive_expr_p -> '+' multiplicative_expr additive_expr_p
 *                  | '-' multiplicative_expr additive_expr_p
 *                  | EPSILON
 * */

/*
 * and_expr -> equality_expr and_expr_p
 * */

/*
 *   and_expr_p -> '&' equality_expr and_expr_p
 *               | EPSILON
 * */

/*
 * argument_expr_list -> assignment_expr argument_expr_list_p
 * */

/*
 *   argument_expr_list_p -> ',' assignment_expr argument_expr_list_p
 *                         | EPSILON
 * */

/*
 * assignment_expr -> unary_expr assignment_operator assignment_expr
 *                  | conditional_expr
 * */

/*
 *  assignment_operator -> '='
 *                       | MUL_ASSIGN
 *                       | DIV_ASSIGN
 *                       | MOD_ASSIGN
 *                       | ADD_ASSIGN
 *                       | SUB_ASSIGN
 *                       | LEFT_ASSIGN
 *                       | RIGHT_ASSIGN
 *                       | AND_ASSIGN
 *                       | XOR_ASSIGN
 *                       | OR_ASSIGN
 * */

/*
 *  block_item_list -> block_item block_item_list_p
 * */

/*
 *  block_item_list_p -> block_item block_item_list_p
 *                     | EPSILON
 * */

/*
 *  block_item -> stmt
 *              | declaration
 * */

/*
 *  cast_expr -> '(' type_name ')' cast_expr
 *             | unary_expr
 * */

/*
 *  compound_stmt -> '{' block_item_list '}'
 *                 | '{' '}'
 * */

/*
 *  conditional_expr -> logical_or_expr '?' expr ':' conditional_expr
 *                    | logical_or_expr 
 * */

/*
 *  constant_expr -> conditional_expr
 * */

/*
 *  declaration -> declaration_specifiers init_declarator_list ';'
 *               | declaration_specifiers ';'
 *               | type_name init_declarator_list ';'
 * */

/*
 *   declaration_list -> declaration declaration_list_p
 * */

/*
 *   declaration_list_p -> declaration
 *                       | EPSILON
 * */

/*
 *  declaration_specifiers -> storage_class_specifier declaration_specifiers
 *                          | storage_class_specifier 
 *                          | type_specifier declaration_specifiers
 *                          | type_specifier
 *                          | type_qualifier declaration_specifiers
 *                          | type_qualifier
 *                          | function_specifier declaration_specifiers
 *                          | function_specifier
 * */

/*
 *  declarator -> pointer direct_declarator
 *              | direct_declarator
 * */

/*
 *  designation -> designator_list '='
 * */

/*
 *  designator_list -> designator designator_list_p
 * */

/*
 *  designator_list_p -> designator designator_list_p
 *                     | EPSILON
 * */

/*
 *  designator -> '[' constant_expr ']'
 *              | '.' IDENTIFIER
 * */

/*
 *  direct_abstract_declarator -> '(' abstract_declarator ')' direct_abstract_declarator_p
 *                              | '[' ']' direct_abstract_declarator_p
 *                              | '[' assignment_expr ']' direct_abstract_declarator_p
 *                              | '[' '*' ']' direct_abstract_declarator_p
 *                              | '(' ')' direct_abstract_declarator_p
 *                              | '(' parameter_type_list ')' direct_abstract_declarator_p
 * */

/*
 *   direct_abstract_declarator_p -> '[' ']' direct_abstract_declarator_p
 *                                 | '[' assignment_expr ']' direct_abstract_declarator_p
 *                                 | '[' '*' ']' direct_abstract_declarator_p
 *                                 | '(' ')' direct_abstract_declarator_p
 *                                 | '(' parameter_type_list ')' direct_abstract_declarator_p
 *                                 | EPSILON
 * */

/*
 *  direct_declarator -> IDENTIFIER direct_declarator_p
 *                     | '(' declarator ')' direct_declarator_p
 * */

/*
 *  direct_declarator_p -> '[' type_qualifier_list assignment_expr ']' direct_declarator_p
 *                       | '[' type_qualifier_list ']' direct_declarator_p
 *                       | '[' assignment_expr ']' direct_declarator_p
 *                       | '[' STATIC type_qualifier_list assignment_expr ']' direct_declarator_p
 *                       | '[' type_qualifier_list STATIC assignment_expr ']' direct_declarator_p
 *                       | '[' type_qualifier_list '*' ']' direct_declarator_p
 *                       | '[' '*' ']' direct_declarator_p
 *                       | '[' ']' direct_declarator_p
 *                       | '(' 'parameter_type_list' ')' direct_declarator_p
 *                       | '(' identifier_list ')' direct_declarator_p
 *                       | '(' ')' direct_declarator_p
 *                       | EPSILON
 * */

/*
 *  enum_specifier -> ENUM IDENTIFIER '{' enumerator_list '}'
 *                  | ENUM '{' enumerator_list '}'
 *                  | ENUM IDENTIFIER '{' enumerator_list ',' '}'
 *                  | ENUM '{' enumerator_list ',' '}'
 *                  | ENUM IDENTIFIER 
 * */

/*
 * enumerator -> IDENTIFIER '=' constant_expr
 *             | IDENTIFIER
 * */

/*
 *  enumerator_list -> enumerator enumerator_list_p
 * */

/*
 *  enumerator_list_p -> enumerator enumerator_list_p
 *                     | EPSILON
 * */

/*
 * equality_expr -> relational_expr equality_expr_p
 * */

/*
 *   equality_expr_p -> EQ_OP relational_expr equality_expr_p
 *                    | NE_OP relational_expr equality_expr_p
 *                    | EPSILON
 * */

/*
 * exclusive_or_expr -> and_expr exclusive_or_expr_p
 * */

/*
 *   exclusive_or_expr_p -> '^' and_expr exclusive_or_expr_p
 *                        | EPSILON
 * */

/*
 * expr -> assignment_expr expr_p
 * */

/*
 *   expr_p -> ',' assignment_expr expr_p
 *           | EPSILON
 * */

/*
 *  expression_stmt -> ';'
 *                   | expr ';'
 * */

/*
 *   external_declaration -> function_definition
 *                         | declaration
 * */

/*
 *  function_definition -> declaration_specifiers declarator declaration_list compound_stmt
 *                       | declaration_specifiers declarator compound_stmt
 * */

/*
 *  function_specifier -> INLINE
 * */

/*
 *  identifier_list -> IDENTIFIER identifier_list_p
 * */

/*
 *  identifier_list_p -> ',' IDENTIFIER identifier_list_p
 *                     | EPSILON
 * */

/*
 * inclusive_or_expr -> exclusive_or_expr inclusive_or_expr_p
 * */

/*
 *   inclusive_or_expr_p -> '|' exclusive_or_expr inclusive_or_expr_p
 *                        | EPSILON
 * */

/*
 *  init_declarator -> declarator '=' initializer
 *                   | declarator
 * */

/*
 *  init_declarator_list -> init_declarator init_declarator_list_p
 * */

/*
 *  init_declarator_list_p -> ',' init_declarator init_declarator_list_p
 *                          | EPSILON
 * */

/*
 *  initializer -> assignment_expr
 *               | '{' initializer_list '}'
 *               | '{' initializer_list ';' '}'
 * */

/*
 * initializer_list -> initializer initializer_list_p
 *                   | designation initializer initializer_list_p
 * */

/*
*   initializer_list_p -> ',' initializer initializer_list_p
*                       | ',' designation initializer initializer_list_p
*                       | EPSILON
* */

/*
*   iteration_stmt -> WHILE '(' expr ')' stmt
*                   | DO stmt WHILE '(' expr ')' ';'
*                   | FOR '(' expression_stmt expression_stmt ')' stmt
*                   | FOR '(' expression_stmt expression_stmt expr ')' stmt
*                   | FOR '(' declaration expression_stmt ')' stmt
*                   | FOR '(' declaration expression_stmt expr ')' stmt
* */

/*
 * jump_stmt -> GOTO IDENTIFIER ';'
 *            | CONTINUE ';'
 *            | BREAK ';'
 *            | RETURN ';'
 *            | RETURN expr ';'
 * */

/*
 *   labeled_stmt -> IDENTIFIER ':' stmt
 *                 | CASE constant_expr ':' stmt
 *                 | DEFAULT ':' stmt
 * */

/*
 * logical_and_expr -> inclusive_or_expr logical_and_expr_p
 * */

/*
 *   logical_and_expr_p -> AND_OP inclusive_or_expr logical_and_expr_p
 *                       | EPSILON
 * */

/*
 * logical_or_expr -> logical_and_expr logical_or_expr_p
 * */

/*
 *   logical_or_expr_p -> OR_OP logical_and_expr logical_or_expr_p
 *                      | EPSILON
 * */

/*
 * multiplicative_expr -> cast_expr multiplicative_expr_p
 * */

/*
 *   multiplicative_expr_p -> '*' cast_expr multiplicative_expr_p
 *                          | '/' cast_expr multiplicative_expr_p
 *                          | '%' cast_expr multiplicative_expr_p
 *                          | EPSILON
 * */

/*
 * parameter_declaration -> declaration_specifiers declarator
 *                        | declaration_specifiers abstract_declarator
 *                        | declaration_specifiers
 * */

/*
 * parameter_list -> parameter_declaration parameter_list_p
 * */

/*
 *   parameter_list_p -> ',' parameter_declaration parameter_list_p
 *                     | EPSILON
 * */

/*
 *  parameter_type_list -> parameter_list ',' ELLIPSIS
 *                       | parameter_list
 * */

/*
 *   parameter_list_p -> ',' parameter_declaration parameter_list_p
 *                     | EPSILON
 * */

/*
 *  pointer -> '*' type_qualifier_list pointer
 *           | '*' type_qualifier_list
 *           | '*' pointer
 *           | '*' 
 * */

/*
 *  postfix_expr -> primary_expr postfix_expr_p
 *                | '(' type_name ')' '{' initializer_list '}' postfix_expr_p
 *                | '(' type_name ')' '{' initializer_list ',' '}' postfix_expr_p
 * */

/*
 *  postfix_expr_p -> '[' expr ']' postfix_expr_p
 *                  | '(' ')' postfix_expr_p
 *                  | '(' argument_expr_list ')' postfix_expr_p
 *                  | '.' IDENTIFIER postfix_expr_p
 *                  | PTR_OP IDENTIFIER postfix_expr_p
 *                  | INC_OP postfix_expr_p
 *                  | DEC_OP postfix_expr_P
 *                  | EPSILON
 * */

/*
 *  primary_expr -> IDENTIFIER
 *                | CONSTANT
 *                | STRING_LITERAL
 *                | '(' expr ')'
 * */

/*
 * relational_expr -> shift_expr relational_expr_p
 * */

/*
 *   relational_expr_p -> '<' shift_expr relational_expr_p
 *                      | '>' shift_expr relational_expr_p
 *                      | LE_OP shift_expr relational_expr_p
 *                      | GE_OP shift_expr relational_expr_p
 *                      | EPSILON
 * */

/*
 *  selection_stmt -> IF '(' expr ')' stmt ELSE stmt
 *                  | IF '(' expr ')' stmt
 *                  | SWITCH '(' expr ')' stmt
 * */

/*
 * shift_expr -> additive_expr shift_expr_p
 * */

/*
 *   shift_expr_p -> LEFT_OP additive_expr shift_expr_p
 *                 | RIGHT_OP additive_expr shift_expr_p
 *                 | EPSILON
 * */

/*
 *  specifier_qualifier_list -> type_specifier specifier_qualifier_list
 *                            | type_specifier
 *                            | type_qualifier specifier_qualifier_list
 *                            | type_qualifier
 * */

/*
 *  stmt -> labeled_stmt
 *        | compound_stmt
 *        | expression_stmt
 *        | selection_stmt
 *        | iteration_stmt
 *        | jump_stmt
 * */

/*
 *  storage_class_specifier -> TYPEDEF
 *                           | EXTERN
 *                           | STATIC
 *                           | AUTO
 *                           | REGISTER
 * */

/*
 * struct_declaration -> specifier_qualifier_list struct_declarator_list ';'
 * */

/*
 *  struct_declaration_list -> struct_declaration struct_declaration_list_p
 * */

/*
 *  struct_declaration_list_p -> struct_declaration struct_declaration_list_p
 *                             | EPSILON
 * */

/*
 *  struct_declarator -> declarator ':' constant_expr
 *                     | ':' constant_expr
 *                     | declarator
 * */

/*
 * struct_declarator_list -> struct_declarator struct_declarator_list_p
 * */

/*
 *   struct_declarator_list_p -> struct_declarator struct_declarator_list_p
 *                             | EPSILON
 * */

/*
 *  struct_or_union -> STRUCT
 *                   | UNION
 * */

/*
 *  struct_or_union_specifier -> struct_or_union IDENTIFIER '{' struct_declaration_list '}'
 *                             | struct_or_union '{' struct_declaration_list '}'
 *                             | struct_or_union IDENTIFIER
 * */

/*
 *   translation_unit -> external_declaration translation_unit_p
 * */

/*
 *   translation_unit_p -> external_declaration translation_unit_p
 *                       | EPSILON
 * */

/*
 *  type_name -> specifier_qualifier_list abstract_declarator
 *             | specifier_qualifier_list
 *             | IDENTIFIER abstract_declarator
 *             | IDENTIFIER
 * */

/*
 *  type_qualifier -> CONST
 *                  | VOLATILE
 *                  | RESTRICT
 * */

/*
 *  type_qualifier_list -> type_qualifier type_qualifier_list_p
 *
 * */

/*
 *  type_qualifier_list_p -> type_qualifier type_qualifier_list_p
 *                         | EPSILON
 *
 * */

/*
 *  type_specifier -> VOID
 *                  | CHAR
 *                  | SHORT
 *                  | INT
 *                  | LONG
 *                  | FLOAT
 *                  | DOUBLE
 *                  | SIGNED
 *                  | UNSIGNED
 *                  | BOOL
 *                  | COMPLEX
 *                  | IMAGINARY
 *                  | struct_or_union_specifier
 *                  | enum_specifier
 *          
 * */

/*
 * unary_expr -> postfix_expr
 *             | INC_OP unary_expr
 *             | DEC_OP unary_expr
 *             | unary_operator cast_expr
 *             | SIZEOF unary_expr
 *             | SIZEOF '(' type_name ')'
 * */

/*
 *  unary_operator -> '&'
 *                  | '*'
 *                  | '+'
 *                  | '-'
 *                  | '~'
 *                  | '!'
 * */
```
                expect(validate(resulting_json)).to.equal(true);
