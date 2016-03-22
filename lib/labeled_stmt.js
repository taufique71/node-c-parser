/* jshint sub:true */

/*
*   labeled_stmt -> IDENTIFIER ':' stmt
*                 | CASE constant_expr ':' stmt
*                 | DEFAULT ':' stmt
* */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var constant_expr = require("./constant_expr").constant_expr;
var stmt = require("./expr").expr;

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

var labeled_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "labeled_stmt";
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
module.exports.labeled_stmt = labeled_stmt;
