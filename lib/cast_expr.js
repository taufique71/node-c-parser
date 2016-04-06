/* jshint sub:true */

/*
 *  cast_expr -> unary_expr
 *             | '(' type_name ')' cast_expr
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var unary_expr = require("./unary_expr").unary_expr;
var type_name = require("./type_name").type_name;

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

var cast_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "cast_expr";
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
module.exports.cast_expr = cast_expr;
