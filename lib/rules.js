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
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "=");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "MUL_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "DIV_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "MOD_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "ADD_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "SUB_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "LEFT_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "RIGHT_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "AND_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
            child_1 = TERMINAL(token_stream, arrow, "XOR_ASSIGN");
            if(child_1){
                node["children"].push(child_1);
            }
        },
        function(token_stream, arrow, node){
            var child_1 = null;
            var child_2 = null;
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
