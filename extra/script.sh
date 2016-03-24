#!/bin/bash

###### Replace lower case token names with upper case
#sed -i -- 's/"WHILE"/"WHILE"/g' *
#sed -i -- 's/"VOLATILE"/"VOLATILE"/g' *
#sed -i -- 's/"VOID"/"VOID"/g' *
#sed -i -- 's/"UNSIGNED"/"UNSIGNED"/g' *
#sed -i -- 's/"UNION"/"UNION"/g' *
#sed -i -- 's/"TYPEDEF"/"TYPEDEF"/g' *
#sed -i -- 's/"SWITCH"/"SWITCH"/g' *
#sed -i -- 's/"STRUCT"/"STRUCT"/g' *
#sed -i -- 's/"STATIC"/"STATIC"/g' *
#sed -i -- 's/"SIZEOF"/"SIZEOF"/g' *
#sed -i -- 's/"SIGNED"/"SIGNED"/g' *
#sed -i -- 's/"SHORT"/"SHORT"/g' *
#sed -i -- 's/"RETURN"/"RETURN"/g' *
#sed -i -- 's/"REGISTER"/"REGISTER"/g' *
#sed -i -- 's/"LONG"/"LONG"/g' *
#sed -i -- 's/"INT"/"INT"/g' *
#sed -i -- 's/"IF"/"IF"/g' *
#sed -i -- 's/"GOTO"/"GOTO"/g' *
#sed -i -- 's/"FOR"/"FOR"/g' *
#sed -i -- 's/"FLOAT"/"FLOAT"/g' *
#sed -i -- 's/"EXTERN"/"EXTERN"/g' *
#sed -i -- 's/"ENUM"/"ENUM"/g' *
#sed -i -- 's/"ELSE"/"ELSE"/g' *
#sed -i -- 's/"DOUBLE"/"DOUBLE"/g' *
#sed -i -- 's/"DO"/"DO"/g' *
#sed -i -- 's/"DEFAULT"/"DEFAULT"/g' *
#sed -i -- 's/"CONTINUE"/"CONTINUE"/g' *
#sed -i -- 's/"CONST"/"CONST"/g' *
#sed -i -- 's/"CHAR"/"CHAR"/g' *
#sed -i -- 's/"CASE"/"CASE"/g' *
#sed -i -- 's/"BREAK"/"BREAK"/g' *
#sed -i -- 's/"AUTO"/"AUTO"/g' *
#sed -i -- 's/"IDENTIFIER"/"IDENTIFIER"/g' *
#sed -i -- 's/"CONSTANT"/"CONSTANT"/g' *
#sed -i -- 's/"STRING_LITERAL"/"STRING_LITERAL"/g' *
#sed -i -- 's/"ELLIPSIS"/"ELLIPSIS"/g' *
#sed -i -- 's/"RIGHT_ASSIGN"/"RIGHT_ASSIGN"/g' *
#sed -i -- 's/"LEFT_ASSIGN"/"LEFT_ASSIGN"/g' *
#sed -i -- 's/"ADD_ASSIGN"/"ADD_ASSIGN"/g' *
#sed -i -- 's/"SUB_ASSIGN"/"SUB_ASSIGN"/g' *
#sed -i -- 's/"MUL_ASSIGN"/"MUL_ASSIGN"/g' *
#sed -i -- 's/"DIV_ASSIGN"/"DIV_ASSIGN"/g' *
#sed -i -- 's/"MOD_ASSIGN"/"MOD_ASSIGN"/g' *
#sed -i -- 's/"AND_ASSIGN"/"AND_ASSIGN"/g' *
#sed -i -- 's/"XOR_ASSIGN"/"XOR_ASSIGN"/g' *
#sed -i -- 's/"OR_ASSIGN"/"OR_ASSIGN"/g' *
#sed -i -- 's/"RIGHT_OP"/"RIGHT_OP"/g' *
#sed -i -- 's/"LEFT_OP"/"LEFT_OP"/g' *
#sed -i -- 's/"INC_OP"/"INC_OP"/g' *
#sed -i -- 's/"DEC_OP"/"DEC_OP"/g' *
#sed -i -- 's/"PTR_OP"/"PTR_OP"/g' *
#sed -i -- 's/"AND_OP"/"AND_OP"/g' *
#sed -i -- 's/"OR_OP"/"OR_OP"/g' *
#sed -i -- 's/"LE_OP"/"LE_OP"/g' *
#sed -i -- 's/"GE_OP"/"GE_OP"/g' *
#sed -i -- 's/"EQ_OP"/"EQ_OP"/g' *
#sed -i -- 's/"NE_OP"/"NE_OP"/g' *
#sed -i -- 's/"WHITESPACE"/"WHITESPACE"/g' *
#sed -i -- 's/"UNMATCHED"/"UNMATCHED"/g' *



###### Initialize test files for all grammar rules
rule_list=(
    translation_unit
    translation_unit_p
    external_declaration
    function_definition
    declaration
    declaration_specifiers
    declarator
    declaration_list
    declaration_list_p
    compound_stmt
    init_declarator_list
    init_declarator_list_p
    storage_class_specifier
    type_specifier
    type_qualifier
    pointer
    direct_declarator
    direct_declarator_p
    stmt_list
    stmt_list_p
    init_declarator
    struct_or_union_specifier
    enum_specifier
    type_qualifier_list
    type_qualifier_list_p
    constant_expr
    parameter_type_list
    identifier_list
    identifier_list_p
    stmt
    initializer
    struct_or_union
    struct_declaration_list
    struct_declaration_list_p
    enumerator_list
    enumerator_list_p
    conditional_expr
    parameter_list
    parameter_list_p
    labeled_stmt
    expression_stmt
    expression_stmt_p
    selection_stmt
    iteration_stmt
    jump_stmt
    assignment_expr
    initializer_list
    initializer_list_p
    logical_or_expr
    logical_or_expr_p
    expr
    expr_p
    parameter_declaration
    unary_expr
    assignment_operator
    logical_and_expr
    logical_and_expr_p
    abstract_declarator
    postfix_expr
    postfix_expr_p
    unary_operator
    cast_expr
    type_name
    inclusive_or_expr
    inclusive_or_expr_p
    direct_abstract_declarator
    direct_abstract_declarator_p
    primary_expr
    argument_expr_list
    argument_expr_list_p
    specifier_qualifier_list
    exclusive_or_expr
    exclusive_or_expr_p
    and_expr
    and_expr_p
    equality_expr
    equality_expr_p
    relational_expr
    relational_expr_p
    shift_expr
    shift_expr_p
    additive_expr
    additive_expr_p
    multiplicative_expr
    multiplicative_expr_p
    enumerator
    struct_declaration
    struct_declarator_list
    struct_declarator_list_p
    struct_declarator
)

for i in ${rule_list[@]}; do
    source_file=$PWD/test/translation_unit.js
    destination_file=$PWD/test/$i.js
    cp $source_file $destination_file
    sed -i "s/translation_unit/$i/g" "$destination_file"
done
