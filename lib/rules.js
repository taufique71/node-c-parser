/*jshint sub:true*/

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;

var abstract_declarator;
var additive_expr;
var additive_expr_p;
var and_expr;
var and_expr_p;
var argument_expr_list;
var argument_expr_list_p;
var assignment_expr;
var assignment_operator;
var cast_expr;
var compound_stmt;
var conditional_expr;
var constant_expr;
var declaration;
var declaration_list;
var declaration_list_p;
var declaration_specifiers;
var declarator;
var direct_abstract_declarator;
var direct_abstract_declarator_p;
var direct_declarator;
var direct_declarator_p;
var enum_specifier;
var enumerator;
var enumerator_list;
var enumerator_list_p;
var equality_expr;
var equality_expr_p;
var exclusive_or_expr;
var exclusive_or_expr_p;
var expr;
var expr_p;
var expression_stmt;
var expression_stmt_p;
var external_declaration;
var function_definition;
var identifier_list;
var identifier_list_p;
var inclusive_or_expr;
var inclusive_or_expr_p;
var init_declarator;
var init_declarator_list;
var init_declarator_list_p;
var initializer;
var initilizer_list;
var initializer_list_p;
var iteration_stmt;
var jump_stmt;
var labeled_stmt;
var logical_and_expr;
var logical_and_expr_p;
var logical_or_expr;
var logical_or_expr_p;
var multiplicative_stmt;
var multiplicative_stmt_p;
var parameter_declaration;
var parameter_list;
var parameter_list_p;
var parameter_type_list;
var pointer;
var postfix_expr;
var postfix_expr_p;
var primary_expr;
var relational_expr;
var relational_expr_p;
var selection_stmt;
var shift_expr;
var shift_expr_p;
var specifier_qualifier_list;
var stmt;
var stmt_list;
var stmt_list_p;
var storage_class_specifier;
var struct_declaration;
var struct_declaration_list;
var struct_declaration_list_p;
var struct_declarator;
var struct_declarator_list;
var struct_declarator_list_p;
var struct_or_union;
var struct_or_union_specifier;
var translation_unit;
var translation_unit_p;
var type_name;
var type_qualifier;
var type_qualifier_list;
var type_qualifier_list_p;
var type_specifier;
var unary_expr;
var unary_operator;

/*
 * abstract_declarator -> pointer
 *                      | direct_abstract_declarator
 *                      | pointer direct_abstract_declarator
 * */
abstract_declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "abstract_declarator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = pointer(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = direct_abstract_declarator(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = pointer(token_stream, arrow);
            if(child_1) child_2 = direct_abstract_declarator(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.abstract_declarator = abstract_declarator;

/*
 * additive_expr -> multiplicative_expr additive_expr_p
 * */
additive_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "additive_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = multiplicative_expr(token_stream, arrow);
            if(child_1) child_2 = additive_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.additive_expr = additive_expr;

/*
 *   additive_expr_p -> '+' multiplicative_expr additive_expr_p
 *                    | '-' multiplicative_expr additive_expr_p
 *                    | EPSILON
 * */
additive_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "additive_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "+");
            if(child_1) child_2 = multiplicative_expr(token_stream, arrow);
            if(child_2) child_3 = additive_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "-");
            if(child_1) child_2 = multiplicative_expr(token_stream, arrow);
            if(child_2) child_3 = additive_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.additive_expr_p = additive_expr_p;

/*
 * and_expr -> equality_expr and_expr_p
 * */
and_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "and_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = equality_expr(token_stream, arrow);
            if(child_1) child_2 = and_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.and_expr = and_expr;

/*
 *   and_expr_p -> '&' equality_expr and_expr_p
 *               | EPSILON
 * */
and_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "and_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "&");
            if(child_1) child_2 = equality_expr(token_stream, arrow);
            if(child_2) child_3 = and_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.and_expr_p = and_expr_p;

/*
 * argument_expr_list -> assignment_expr argument_expr_list_p
 * */
argument_expr_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "argument_expr_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = assignment_expr(token_stream, arrow);
            if(child_1) child_2 = argument_expr_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.argument_expr_list = argument_expr_list;

/*
 *   argument_expr_list_p -> ',' assignment_expr argument_expr_list_p
 *                         | EPSILON
 * */
argument_expr_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "argument_expr_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ",");
            if(child_1) child_2 = assignment_expr(token_stream, arrow);
            if(child_2) child_3 = argument_expr_list_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.argument_expr_list_p = argument_expr_list_p;

/*
 * assignment_expr -> conditional_expr
 *                  | unary_expr assignment_operator assignment_expr
 * */
assignment_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "assignment_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = conditional_expr(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = unary_expr(token_stream, arrow);
            if(child_1) child_2 = assignment_operator(token_stream, arrow);
            if(child_2) child_3 = assignment_expr(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.assignment_expr = assignment_expr;

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
assignment_operator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "assignment_operator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "=");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "MUL_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "DIV_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "MOD_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "ADD_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "SUB_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "LEFT_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "RIGHT_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "AND_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "XOR_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "OR_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.assignment_operator = assignment_operator;

/*
 *  cast_expr -> unary_expr
 *             | '(' type_name ')' cast_expr
 * */
cast_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "cast_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = unary_expr(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = type_name(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = cast_expr(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.cast_expr = cast_expr;

/*
 *  compound_stmt -> '{' '}'
 *                 | '{' stmt_list '}'
 *                 | '{' declaration_list '}'
 *                 | '{' declaration_list stmt_list '}'
 * */
compound_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "compound_stmt";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "{");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "}");
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "{");
            if(child_1) child_2 = stmt_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "}");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "{");
            if(child_1) child_2 = declaration_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "}");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "{");
            if(child_1) child_2 = declaration_list(token_stream, arrow);
            if(child_2) child_3 = stmt_list(token_stream, arrow);
            if(child_3) child_4 = TERMINAL(token_stream, arrow, "}");
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.compound_stmt = compound_stmt;

/*
 *  conditional_expr -> logical_or_expr
 *                    | logical_or_expr '?' expr ':' conditional_expr
 * */
conditional_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "conditional_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = logical_or_expr(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            var child_5 = null;
            child_1 = logical_or_expr(token_stream, arrow);
            if(child_1) child_2 = TERMINAL(token_stream, arrow, '?');
            if(child_2) child_3 = expr(token_stream, arrow);
            if(child_3) child_4 = TERMINAL(token_stream, arrow, ':');
            if(child_4) child_5 = conditional_expr(token_stream, arrow);
            if(child_5){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
                node["children"].push(child_5);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.conditional_expr = conditional_expr;

/*
 *  constant_expr -> conditional_expr
 * */
constant_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "constant_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = conditional_expr(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.constant_expr = constant_expr;

/*
 *  declaration -> declaration_specifiers ';'
 *               | declaration_specifiers init_declarator_list
 * */
declaration = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1) child_2 = init_declarator_list(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.declaration = declaration;

/*
 *   declaration_list -> declaration declaration_list_p
 * */
declaration_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = declaration(token_stream, arrow);
            if(child_1) child_2 = declaration_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.declaration_list = declaration_list;

/*
 *   declaration_list_p -> declaration
 *                       | EPSILON
 * */
declaration_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = declaration(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.declaration_list_p = declaration_list_p;

/*
 *  declaration_specifiers -> storage_class_specifier
 *                          | storage_class_specifier declaration_specifiers
 *                          | type_specifier
 *                          | type_specifier declaration_specifiers
 *                          | type_qualifier
 *                          | type_qualifier declaration_specifiers
 * */
declaration_specifiers = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = storage_class_specifier(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = storage_class_specifier(token_stream, arrow);
            if(child_1) child_2 = declaration_specifiers(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = type_specifier(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = type_specifier(token_stream, arrow);
            if(child_1) child_2 = declaration_specifiers(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = type_qualifier(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = type_qualifier(token_stream, arrow);
            if(child_1) child_2 = declaration_specifiers(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.declaration_specifiers = declaration_specifiers;

/*
 *  declarator -> pointer direct_declarator
 *              | direct_declarator
 * */
declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declarator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = pointer(token_stream, arrow);
            if(child_1) child_2 = direct_declarator(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = direct_declarator(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.declarator = declarator;

/*
 *  direct_abstract_declarator -> '(' abstract_declarator ')' direct_abstract_declarator_p
 *                              | '[' ']' direct_abstract_declarator_p
 *                              | '[' constant_expr ']' direct_abstract_declarator_p
 *                              | '(' ')' direct_abstract_declarator_p
 *                              | '(' parameter_type_list ')' direct_abstract_declarator_p
 * */
direct_abstract_declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "direct_abstract_declarator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = abstract_declarator(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "]");
            if(child_2) child_3 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = constant_expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "]");
            if(child_3) child_4 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ")");
            if(child_2) child_3 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = parameter_type_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.direct_abstract_declarator = direct_abstract_declarator;

/*
 *   direct_abstract_declarator_p -> '[' ']' direct_abstract_declarator_p
 *                                 | '[' constant_expr ']' direct_abstract_declarator_p
 *                                 | '(' ')' direct_abstract_declarator_p
 *                                 | '(' parameter_type_list ')' direct_abstract_declarator_p
 *                                 | EPSILON
 * */
direct_abstract_declarator_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "direct_abstract_declarator_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "]");
            if(child_2) child_3 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = constant_expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "]");
            if(child_3) child_4 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ")");
            if(child_2) child_3 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = parameter_type_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = direct_abstract_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.direct_abstract_declarator_p = direct_abstract_declarator_p;

/*
 *  direct_declarator -> IDENTIFIER direct_declarator_p
 *                     | '(' declarator ')' direct_declarator_p
 * */
direct_declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "direct_declarator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_1) child_2 = direct_declarator_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = declarator(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = direct_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.direct_declarator = direct_declarator;

/*
 *  direct_declarator_p -> '[' constant_expr ']' direct_declarator_p
 *                       | '[' ']' constant_expr direct_declarator_p
 *                       | '(' 'parameter_type_list' ')' direct_declarator_p
 *                       | '(' identifier_list ')' direct_declarator_p
 *                       | '(' ')' direct_declarator_p
 *                       | EPSILON
 * */
var direct_declarator_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "direct_declarator_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = constant_expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "]");
            if(child_3) child_4 = direct_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ']');
            if(child_2) child_3 = constant_expr(token_stream, arrow);
            if(child_3) child_4 = direct_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = parameter_type_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = direct_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = identifier_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = direct_declarator_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ")");
            if(child_2) child_3 = direct_declarator_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.direct_declarator_p = direct_declarator_p;

/*
 *  enum_specifier -> ENUM '{' enumerator_list '}'
 *                  | ENUM IDENTIFIER '{' enumerator_list '}'
 *                  | ENUM IDENTIFIER 
 * */
enum_specifier = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "enum_specifier";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, 'enum');
            if(child_1) child_2 = TERMINAL(token_stream, arrow, '{');
            if(child_2) child_3 = enumerator_list(token_stream, arrow);
            if(child_3) child_4 = TERMINAL(token_stream, arrow, '}');
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            var child_5 = null;
            child_1 = TERMINAL(token_stream, arrow, 'enum');
            if(child_1) child_2 = TERMINAL(token_stream, arrow, 'identifier');
            if(child_2) child_3 = TERMINAL(token_stream, arrow, '{');
            if(child_3) child_4 = enumerator_list(token_stream, arrow);
            if(child_4) child_5 = TERMINAL(token_stream, arrow, '}');
            if(child_5){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
                node["children"].push(child_5);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, 'enum');
            if(child_1) child_2 = TERMINAL(token_stream, arrow, 'identifier');
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.enum_specifier = enum_specifier;

/*
 * enumerator -> IDENTIFIER
 *             | IDENTIFIER '=' constant_expr
 * */
enumerator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "enumerator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "=");
            if(child_2) child_3 = constant_expr(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.enumerator = enumerator;

/*
 *  enumerator_list -> enumerator enumerator_list_p
 * */
enumerator_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "enumerator_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = enumerator(token_stream, arrow);
            if(child_1) child_2 = enumerator_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.enumerator_list = enumerator_list;

/*
 *  enumerator_list_p -> enumerator enumerator_list_p
 *                     | EPSILON
 * */
enumerator_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "enumerator_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ",");
            if(child_1) child_2 = enumerator(token_stream, arrow);
            if(child_2) child_3 = enumerator_list_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.enumerator_list_p = enumerator_list_p;

/*
 * equality_expr -> relational_expr equality_expr_p
 * */
equality_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "equality_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = relational_expr(token_stream, arrow);
            if(child_1) child_2 = equality_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.equality_expr = equality_expr;

/*
 *   equality_expr_p -> EQ_OP relational_expr equality_expr_p
 *                    | NE_OP relational_expr equality_expr_p
 *                    | EPSILON
 * */
equality_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "equality_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "EQ_OP");
            if(child_1) child_2 = relational_expr(token_stream, arrow);
            if(child_2) child_3 = equality_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "NE_OP");
            if(child_1) child_2 = relational_expr(token_stream, arrow);
            if(child_2) child_3 = equality_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.equality_expr_p = equality_expr_p;

/*
 * exclusive_or_expr -> and_expr exclusive_or_expr_p
 * */
exclusive_or_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "exclusive_or_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = and_expr(token_stream, arrow);
            if(child_1) child_2 = exclusive_or_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.exclusive_or_expr = exclusive_or_expr;

/*
 *   exclusive_or_expr_p -> '^' and_expr exclusive_or_expr_p
 *                     | EPSILON
 * */
exclusive_or_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "exclusive_or_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "^");
            if(child_1) child_2 = and_expr(token_stream, arrow);
            if(child_2) child_3 = exclusive_or_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.exclusive_or_expr_p = exclusive_or_expr_p;

/*
 * expr -> assignment_expr expr_p
 * */
expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = assignment_expr(token_stream, arrow);
            if(child_1) child_2 = expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.expr = expr;

/*
 *   expr_p -> ',' assignment_expr expr_p
 *           | EPSILON
 * */
expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = assignment_expr(token_stream, arrow);
            if(child_1) child_2 = expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.expr_p = expr_p;

/*
 *  expression_stmt -> ';' expression_stmt_p
 * */
expression_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "expression_stmt";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, ";");
            if(child_1) child_2 = expression_stmt_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.expression_stmt = expression_stmt;

/*
*   expression_stmt_p -> ';' expression_stmt_p
*                      | EPSILON
* */
expression_stmt_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "expression_stmt_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, ";");
            if(child_1) child_2 = expression_stmt_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.expression_stmt_p = expression_stmt_p;

/*
*   external_declaration -> function_definition
*                         |  declaration
* */
var external_declaration_1 = function(token_stream, arrow, node){
    var child_1 = null;
    child_1 = function_definition(token_stream, arrow);
    if(child_1){
        node["children"].push(child_1);
    }
};
var external_declaration_2 = function(token_stream, arrow, node){
    var child_1 = null;
    child_1 = declaration(token_stream, arrow);
    if(child_1){
        node["children"].push(child_1);
    }
};
external_declaration = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "external_declaration";
    new_node["children"] = [];
    var list_of_rules = [
        external_declaration_1, 
        external_declaration_2
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.external_declaration = external_declaration;

/*
 *  function_definition -> declaration_specifiers declarator declaration_list compound_stmt
 *                      |  declaration_specifiers declarator compound_stmt
 *                      |  declarator declaration_list compound_stmt
 *                      |  declarator compound_stmt
 * */
function_definition = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "function_definition";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1) child_2 = declarator(token_stream, arrow);
            if(child_2) child_3 = declaration_list(token_stream, arrow);
            if(child_3) child_4 = compound_stmt(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1) child_2 = declarator(token_stream, arrow);
            if(child_2) child_3 = compound_stmt(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = declarator(token_stream, arrow);
            if(child_1) child_2 = declaration_list(token_stream, arrow);
            if(child_2) child_3 = compound_stmt(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = declarator(token_stream, arrow);
            if(child_1) child_2 = compound_stmt(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.function_definition = function_definition;

/*
 *  identifier_list -> IDENTIFIER identifier_list_p
 * */
identifier_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "identifier_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_1) child_2 = identifier_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.identifier_list = identifier_list;

/*
 *  identifier_list_p -> ',' IDENTIFIER identifier_list_p
 *                     | EPSILON
 * */
identifier_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "identifier_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ",");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_2) child_3 = identifier_list_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.identifier_list_p = identifier_list_p;

/*
 * inclusive_or_expr -> exclusive_or_expr inclusive_or_expr_p
 * */
inclusive_or_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "inclusive_or_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = exclusive_or_expr(token_stream, arrow);
            if(child_1) child_2 = inclusive_or_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.inclusive_or_expr = inclusive_or_expr;

/*
 *   inclusive_or_expr_p -> '|' exclusive_or_expr inclusive_or_expr_p
 *                        | EPSILON
 * */
inclusive_or_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "inclusive_or_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "|");
            if(child_1) child_2 = exclusive_or_expr(token_stream, arrow);
            if(child_2) child_3 = inclusive_or_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.inclusive_or_expr_p = inclusive_or_expr_p;

/*
 *  init_declarator -> declarator
 *                   | declarator '=' initializer
 * */
init_declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "init_declarator";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = declarator(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = declarator(token_stream, arrow);
            if(child_1) child_2 = TERMINAL(token_stream, arrow, '=');
            if(child_2) child_3 = initializer(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.init_declarator = init_declarator;

/*
 *  init_declarator_list -> init_declarator init_declarator_list_p
 * */
init_declarator_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "init_declarator_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = init_declarator(token_stream, arrow);
            if(child_1) child_2 = init_declarator_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.init_declarator_list = init_declarator_list;

/*
 *  init_declarator_list_p -> ',' init_declarator init_declarator_list_p
 *                          | EPSILON
 * */
init_declarator_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "init_declarator_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ",");
            if(child_1) child_2 = init_declarator(token_stream, arrow);
            if(child_2) child_3 = init_declarator_list_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.init_declarator_list_p = init_declarator_list_p;

/*
 *  initializer -> assignment_expr
 *               | '{' initializer_list '}'
 *               | '{' initializer_list ';' '}'
 * */
initializer = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "initializer";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = assignment_expr(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "{");
            if(child_1) child_2 = initializer_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "}");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "{");
            if(child_1) child_2 = initializer_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
            if(child_3) child_4 = TERMINAL(token_stream, arrow, "}");
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.initializer = initializer;

/*
 * initializer_list -> initializer initializer_list_p
 * */
initializer_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "initializer_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = initializer(token_stream, arrow);
            if(child_1) child_2 = initializer_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.initializer_list = initializer_list;

/*
*   initializer_list_p -> ',' initializer initializer_list_p
*                       | EPSILON
* */
initializer_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "initializer_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = initializer(token_stream, arrow);
            if(child_1) child_2 = initializer_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.initializer_list_p = initializer_list_p;

/*
*   iteration_stmt -> WHILE '(' expr ')' stmt
*                   | DO stmt WHILE '(' expr ')' ';'
*                   | FOR '(' expression_stmt expression_stmt ')' stmt
*                   | FOR '(' expression_stmt expression_stmt expr ')' stmt
* */
iteration_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "iteration_stmt";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            var child_5 = null;
            child_1 = TERMINAL(token_stream, arrow, "WHILE");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "(");
            if(child_2) child_3 = expr(token_stream, arrow);
            if(child_3) child_4 = TERMINAL(token_stream, arrow, ")");
            if(child_4) child_5 = stmt(token_stream, arrow);
            if(child_5){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
                node["children"].push(child_5);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            var child_5 = null;
            var child_6 = null;
            var child_7 = null;
            child_1 = TERMINAL(token_stream, arrow, "DO");
            if(child_1) child_2 = stmt(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "WHILE");
            if(child_3) child_4 = TERMINAL(token_stream, arrow, "(");
            if(child_4) child_5 = expr(token_stream, arrow);
            if(child_5) child_6 = TERMINAL(token_stream, arrow, ")");
            if(child_6) child_7 = TERMINAL(token_stream, arrow, ";");
            if(child_7){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
                node["children"].push(child_5);
                node["children"].push(child_6);
                node["children"].push(child_7);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            var child_5 = null;
            var child_6 = null;
            child_1 = TERMINAL(token_stream, arrow, "FOR");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "(");
            if(child_2) child_3 = expression_stmt(token_stream, arrow);
            if(child_3) child_4 = expression_stmt(token_stream, arrow);
            if(child_4) child_5 = TERMINAL(token_stream, arrow, ")");
            if(child_5) child_6 = stmt(token_stream, arrow);
            if(child_5){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
                node["children"].push(child_5);
                node["children"].push(child_6);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            var child_5 = null;
            var child_6 = null;
            child_1 = TERMINAL(token_stream, arrow, "FOR");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "(");
            if(child_2) child_3 = expression_stmt(token_stream, arrow);
            if(child_3) child_4 = expression_stmt(token_stream, arrow);
            if(child_4) child_5 = expr(token_stream, arrow);
            if(child_5) child_6 = TERMINAL(token_stream, arrow, ")");
            if(child_6) child_7 = stmt(token_stream, arrow);
            if(child_7){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
                node["children"].push(child_5);
                node["children"].push(child_6);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.iteration_stmt = iteration_stmt;

/*
 * jump_stmt -> GOTO IDENTIFIER ';'
 *            | CONTINUE ';'
 *            | BREAK ';'
 *            | RETURN ';'
 *            | RETURN expr ';'
 * */
jump_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "jump_stmt";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "GOTO");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "CONTINUE");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "BREAK");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "RETURN");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "RETURN");
            if(child_1) child_2 = expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.jump_stmt = jump_stmt;

/*
*   labeled_stmt -> IDENTIFIER ':' stmt
*                 | CASE constant_expr ':' stmt
*                 | DEFAULT ':' stmt
* */
labeled_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "labeled_stmt";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ":");
            if(child_2) child_3 = stmt(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "CASE");
            if(child_1) child_2 = constant_expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ":");
            if(child_3) child_4 = stmt(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "DEFAULT");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ":");
            if(child_2) child_3 = stmt(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.labeled_stmt = labeled_stmt;

/*
 * logical_and_expr -> inclusive_or_expr logical_and_expr_p
 * */
logical_and_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "logical_and_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = inclusive_or_expr(token_stream, arrow);
            if(child_1) child_2 = logical_and_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.logical_and_expr = logical_and_expr;

/*
 *   logical_or_expr_p -> OR_OP logical_and_expr logical_or_expr_p
 *                     | EPSILON
 * */
logical_or_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "logical_or_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "OR_OP");
            if(child_1) child_2 = logical_and_expr(token_stream, arrow);
            if(child_2) child_3 = logical_or_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.logical_or_expr_p = logical_or_expr_p;

/*
 * multiplicative_expr -> cast_expr multiplicative_expr_p
 * */
multiplicative_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "multiplicative_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = cast_expr(token_stream, arrow);
            if(child_1) child_2 = multiplicative_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.multiplicative_expr = multiplicative_expr;

/*
 *   multiplicative_expr_p -> '*' cast_expr multiplicative_expr_p
 *                          | '/' cast_expr multiplicative_expr_p
 *                          | '%' cast_expr multiplicative_expr_p
 *                          | EPSILON
 * */
var multiplicative_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "multiplicative_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "*");
            if(child_1) child_2 = cast_expr(token_stream, arrow);
            if(child_2) child_3 = multiplicative_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "/");
            if(child_1) child_2 = cast_expr(token_stream, arrow);
            if(child_2) child_3 = multiplicative_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "%");
            if(child_1) child_2 = cast_expr(token_stream, arrow);
            if(child_2) child_3 = multiplicative_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.multiplicative_expr_p = multiplicative_expr_p;

/*
 * parameter_declaration -> declaration_specifiers declarator
 *                        | declaration_specifiers abstract_declarator
 *                        | declaration_specifiers
 * */
parameter_declaration = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_declaration";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1) child_2 = declarator(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1) child_2 = abstract_declarator(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = declaration_specifiers(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.parameter_declaration = parameter_declaration;

/*
 * parameter_list -> parameter_declaration parameter_list_p
 * */
parameter_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = parameter_declaration(token_stream, arrow);
            if(child_1) child_2 = parameter_list_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.parameter_list = parameter_list;

/*
*   parameter_list_p -> ',' parameter_declaration parameter_list_p
*                     | EPSILON
* */
parameter_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ",");
            if(child_1) child_2 = parameter_declaration(token_stream, arrow);
            if(child_2) child_3 = parameter_list_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.parameter_list_p = parameter_list_p;

/*
 *  parameter_type_list -> parameter_list
 *                       | parameter_list ',' ELLIPSIS
 * */
parameter_type_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_type_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = parameter_list(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = parameter_list(token_stream, arrow);
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ",");
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "ELLIPSIS");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.parameter_type_list = parameter_type_list;

/*
*   parameter_list_p -> ',' parameter_declaration parameter_list_p
*                     | EPSILON
* */
parameter_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_list_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ",");
            if(child_1) child_2 = parameter_declaration(token_stream, arrow);
            if(child_2) child_3 = parameter_list_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.parameter_list_p = parameter_list_p;

/*
 *  parameter_type_list -> parameter_list
 *                       | parameter_list ',' ELLIPSIS
 * */
parameter_type_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_type_list";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = parameter_list(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = parameter_list(token_stream, arrow);
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ",");
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "ELLIPSIS");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.parameter_type_list = parameter_type_list;

/*
 *  pointer -> '*'
 *           | '*' type_qualifier_list
 *           | '*' pointer
 *           | '*' type_qualifier_list pointer
 * */
pointer = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "pointer";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "*");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "*");
            if(child_1) child_2 = type_qualifier_list(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "*");
            if(child_1) child_2 = pointer(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "*");
            if(child_1) child_2 = type_qualifier_list(token_stream, arrow);
            if(child_2) child_3 = pointer(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.pointer = pointer;

/*
 *  postfix_expr -> primary_expr postfix_expr_p
 * */
postfix_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "postfix_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = primary_expr(token_stream, arrow);
            if(child_1) child_2 = postfix_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.postfix_expr = postfix_expr;

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
postfix_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "postfix_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "[");
            if(child_1) child_2 = expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, "]");
            if(child_3) child_4 = postfix_expr_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, ")");
            if(child_2) child_3 = postfix_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            var child_4 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = argument_expr_list(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3) child_4 = postfix_expr_p(token_stream, arrow);
            if(child_4){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
                node["children"].push(child_4);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ".");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_2) child_3 = postfix_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "PTR_OP");
            if(child_1) child_2 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_2) child_3 = postfix_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "INC_OP");
            if(child_1) child_2 = postfix_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "DEC_OP");
            if(child_1) child_2 = postfix_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.postfix_expr_p = postfix_expr_p;

/*
 *  primary_expr -> IDENTIFIER
 *                | CONSTANT
 *                | STRING_LITERAL
 *                | '(' expr ')'
 * */
primary_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "primary_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "CONSTANT");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = TERMINAL(token_stream, arrow, "STRING_LITERAL");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "(");
            if(child_1) child_2 = expr(token_stream, arrow);
            if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.primary_expr = primary_expr;

/*
 * relational_expr -> shift_expr relational_expr_p
 * */
relational_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "relational_expr";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = shift_expr(token_stream, arrow);
            if(child_1) child_2 = relational_expr_p(token_stream, arrow);
            if(child_2){
                node["children"].push(child_1);
                node["children"].push(child_2);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.relational_expr = relational_expr;

/*
 *   relational_expr_p -> '<' shift_expr relational_expr_p
 *                      | '>' shift_expr relational_expr_p
 *                      | LE_OP shift_expr relational_expr_p
 *                      | GE_OP shift_expr relational_expr_p
 *                      | EPSILON
 * */
relational_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "relational_expr_p";
    new_node["children"] = [];
    var list_of_rules = [
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "<");
            if(child_1) child_2 = shift_expr(token_stream, arrow);
            if(child_2) child_3 = relational_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, ">");
            if(child_1) child_2 = shift_expr(token_stream, arrow);
            if(child_2) child_3 = relational_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "LE_OP");
            if(child_1) child_2 = shift_expr(token_stream, arrow);
            if(child_2) child_3 = relational_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            var child_3 = null;
            child_1 = TERMINAL(token_stream, arrow, "GE_OP");
            if(child_1) child_2 = shift_expr(token_stream, arrow);
            if(child_2) child_3 = relational_expr_p(token_stream, arrow);
            if(child_3){
                node["children"].push(child_1);
                node["children"].push(child_2);
                node["children"].push(child_3);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            child_1 = EPSILON(token_stream, arrow);
            if(child_1){
                node["children"].push(child_1);
            }
        }
    ];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.relational_expr_p = relational_expr_p;
