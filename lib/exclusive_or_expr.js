/* jshint sub:true */

/*
 * exclusive_or_expr -> and_expr exclusive_or_expr_p
 * */

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var and_expr = require("./and_expr").and_expr;
var exclusive_or_expr_p = require("./exclusive_or_expr_p").exclusive_or_expr_p;

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

var exclusive_or_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "exclusive_or_expr";
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
module.exports.exclusive_or_expr = exclusive_or_expr;
