/*jshint sub:true*/

/*
 *  direct_declarator_p -> '[' constant_expr ']' direct_declarator_p
 *                       | '[' ']' constant_expr direct_declarator_p
 *                       | '(' 'param_type_list' ')' direct_declarator_p
 *                       | '(' identifier_list ')' direct_declarator_p
 *                       | '(' ')' direct_declarator_p
 *                       | EPSILON
 * */


var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var TERMINAL = require("./commons").TERMINAL;
var EPSILON = require("./commons").EPSILON;
var direct_declarator_p = require("./direct_declarator_p").direct_declarator_p;
var constant_expr = require("./constant_expr").constant_expr;
var parameter_type_list = require("./parameter_type_list").paramete_type_list;
var identifier_list = require("./identifier_list").identifier_list;

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

var direct_declarator_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "direct_declarator_p";
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
module.exports.direct_declarator_p = direct_declarator_p;
