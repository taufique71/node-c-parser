/* jshint sub:true */

/*
 * unary_expr -> postfix_expr
 *             | INC_OP unary_expr
 *             | DEC_OP unary_expr
 *             | unary_operator cast_expr
 *             | SIZEOF unary_expr
 *             | SIZEOF '(' type_name ')'
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var postfix_expr = require("./postfix_expr").postfix_expr;
var unary_operator = require("./unary_operator").unary_operator;
var cast_expr = require("./cast_expr").cast_expr;
var type_name = require("./type_name").type_name;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = postfix_expr(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "inc_op");
        if(child_1) child_2 = unary_expr(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "dec_op");
        if(child_1) child_2 = unary_expr(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = unary_operator(token_stream, arrow);
        if(child_1) child_2 = cast_expr(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "sizeof");
        if(child_1) child_2 = unary_expr(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "sizeof");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, "(");
        if(child_2) child_3 = type_name(token_stream, arrow);
        if(child_3) child_4 = TERMINAL(token_stream, arrow, ")");
        if(child_4){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
        }
    }
];

var unary_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "unary_expr";
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
module.exports.unary_expr = unary_expr;
