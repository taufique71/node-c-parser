/*
 *  function_definition -> declaration_specifiers declarator declaration_list compound_stmt
 *                      |  declaration_specifiers declarator compound_stmt
 *                      |  declarator declaration_list compound_stmt
 *                      |  declarator compound_stmt
 * */

var _ = require("lodash");
var declaration_specifiers = require("./declaration_specifiers").declaration_specifiers;
var declarator = require("./declarator").declarator;
var declaration_list = require("./declaration_list").declaration_list;
var compound_stmt = require("./compound_stmt").compound_stmt;
var iterate_over_rules = require("./commons").iterate_over_rules;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1) child_2 = declarator(token_stream, arrow);
        if(child_2) child_3 = declaration_list(token_stream, arrow);
        if(child_3) child_4 = compound_stmt(token_stream, arrow);
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
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1) child_2 = declarator(token_stream, arrow);
        if(child_2) child_3 = compound_stmt(token_stream, arrow);
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
        child_1 = declarator(token_stream, arrow);
        if(child_1) child_2 = declaration_list(token_stream, arrow);
        if(child_2) child_3 = compound_stmt(token_stream, arrow);
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = declarator(token_stream, arrow);
        if(child_1) child_2 = compound_stmt(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var function_definition = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "function_definition";
    new_node["children"] = [];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
}
module.exports.function_definition = function_definition;
