/*jshint sub:true*/

/*
 *  selection_stmt -> IF '(' expr ')' stmt
 *                  | IF '(' expr ')' stmt ELSE stmt
 *                  | SWITCH '(' expr ')' stmt
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var expr = require("./expr").expr;
var stmt = require("./stmt").stmt;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        var child_5 = null;
        child_1 = TERMINAL(token_stream, arrow, "IF");
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
        child_1 = TERMINAL(token_stream, arrow, "IF");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, "(");
        if(child_2) child_3 = expr(token_stream, arrow);
        if(child_3) child_4 = TERMINAL(token_stream, arrow, ")");
        if(child_4) child_5 = stmt(token_stream, arrow);
        if(child_5) child_6 = TERMINAL(token_stream, arrow, "ELSE");
        if(child_6) child_7 = stmt(token_stream, arrow);
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
        child_1 = TERMINAL(token_stream, arrow, "SWITCH");
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
    }
];

var selection_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "selection_stmt";
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
module.exports.selection_stmt = selection_stmt;
