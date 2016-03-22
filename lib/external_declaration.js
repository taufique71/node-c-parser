/*
*   external_declaration -> function_definition
*                         |  declaration
* */

var _ = require("lodash");
var async = require("async");
var function_definition = require("./function_definition").function_definition;
var declaration = require("./declaration").declaration;
var iterate_over_rules = require("./commons").iterate_over_rules;

var external_declaration_1 = function(token_stream, arrow, node){
    var child_1 = null;
    child_1 = function_definition(token_stream, arrow);
    if(child_1){
        node["children"].push(child_1);
    }
};

var external_declaration_2 = function(token_stream, arrow, node){
    var child_1 = null;
    child_1 = declaration(token_stream, arrow);
    if(child_1){
        node["children"].push(child_1);
    }
};

var list_of_rules = [
    external_declaration_1, 
    external_declaration_2
];

var external_declaration = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "external_declaration";
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
module.exports.external_declaration = external_declaration;
