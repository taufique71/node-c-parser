/* jshint sub:true */

/*
 * argument_expr_list -> assignment_expr argument_expr_list_p
 * */

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var assignment_expr = require("./assignment_expr").assignment_expr;
var argument_expr_list_p = require("./argument_expr_list_p").argument_expr_list_p;

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

var argument_expr_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "argument_expr_list";
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
module.exports.argument_expr_list = argument_expr_list;
