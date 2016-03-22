/*jshint sub:true*/

/*
 * jump_stmt -> GOTO IDENTIFIER ';'
 *            | CONTINUE ';'
 *            | BREAK ';'
 *            | RETURN ';'
 *            | RETURN expr ';'
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var expr = require("./expr").expr;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        child_1 = TERMINAL(token_stream, arrow, "GOTO");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, "IDENTIFIER");
        if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "CONTINUE");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "BREAK");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "RETURN");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        child_1 = TERMINAL(token_stream, arrow, "RETURN");
        if(child_1) child_2 = expr(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    }
];

var jump_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "jump_stmt";
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
module.exports.jump_stmt = jump_stmt;
