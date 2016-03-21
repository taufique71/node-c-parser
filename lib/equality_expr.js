/* jshint sub:true */

/*
 * equality_expr -> relational_expr equality_expr_p
 * */

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var relational_expr = require("./relational_expr").relational_expr;
var equality_expr_p = require("./equality_expr_p").equality_expr_p;

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

var equality_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "equality_expr";
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
module.exports.equality_expr = equality_expr;
