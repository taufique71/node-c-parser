/* jshint sub:true */

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

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var postfix_expr_p = require("./postfix_expr_p").postfix_expr_p;
var expr = require("./expr").expr;
var argument_expr_list = require("./argument_expr_list").argument_expr_list;

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
        if(child_1) child_2 = TERMINAL(token_stream, arrow, "identifier");
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
        child_1 = TERMINAL(token_stream, arrow, "ptr_op");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, "identifier");
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
        child_1 = TERMINAL(token_stream, arrow, "inc_op");
        if(child_1) child_2 = postfix_expr_p(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "dec_op");
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

var postfix_expr_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "postfix_expr_p";
    new_node["children"] = [];
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
