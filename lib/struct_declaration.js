/* jshint sub:true */

/*
 * struct_declaration -> specifier_qualifier_list struct_declarator_list ';'
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var specifier_qualifier_list = require("./specifier_qualifier_list").specifier_qualifier_list;
var struct_declarator_list = require("./struct_declarator_list").struct_declarator_list;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = specifier_qualifier_list(token_stream, arrow);
        if(child_1) child_2 = struct_declarator_list(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    }
];

var struct_declaration = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "struct_declaration";
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
module.exports.struct_declaration = struct_declaration;
