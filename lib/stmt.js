/*jshint sub:true*/

/*
 *  stmt -> labeled_stmt
 *        | compound_stmt
 *        | expression_stmt
 *        | selection_stmt
 *        | iteration_stmt
 *        | jump_stmt
 * */

var EPSILON = require("./commons").EPSILON;
var iterate_over_rules = require("./commons").iterate_over_rules;
var labeled_stmt = require("./labeled_stmt").labeled_stmt;
var compound_stmt = require("./compound_stmt").compound_stmt;
var expression_stmt = require("./expression_stmt").expression_stmt;
var selection_stmt = require("./selection_stmt").selection_stmt;
var iteration_stmt = require("./iteration_stmt").iteration_stmt;
var jump_stmt = require("./jump_stmt").jump_stmt;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = labeled_stmt(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = compound_stmt(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = expression_stmt(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = selection_stmt(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = iteration_stmt(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = jump_stmt(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "stmt";
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
module.exports.stmt = stmt;
