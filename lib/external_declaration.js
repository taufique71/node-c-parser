/*
*   external_declaration -> function_definition
*                        |  declaration
* */

var _ = require("lodash");
var async = require("async");
var function_definition = require("./function_definition").function_definition;
var declaration = require("./declaration").declaration;
var iterate_over_rules = require("./commons").iterate_over_rules;

var external_declaration_1 = function(token_stream, arrow, child){
    return;
}

var external_declaration_2 = function(token_stream, arrow, child){
    return;
}

var list_of_rules = [
    external_declaration_1, 
    external_declaration_2
];

var external_declaration = function(token_stream, arrow){
    var new_node = {}, child_1 = null;
    var new_arrow = _.clone(arrow);
    new_node["title"] = "external_declaration";
    new_node["children"] = [];
    iterate_over_rules(token_streams, arrow, list_of_rules, child_1);
}
module.exports.external_declaration = external_declaration;
