/* jshint sub:true */

/*
 * parameter_declaration -> declaration_specifiers declarator
 *                        | declaration_specifiers abstract_declarator
 *                        | declaration_specifiers
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var declaration_specifiers = require("./declaration_specifiers").declaration_specifiers;
var declarator = require("./declarator").declarator;
var abstract_declarator = require("./abstract_declarator").abstract_declarator;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1) child_2 = declarator(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1) child_2 = abstract_declarator(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var parameter_declaration = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "parameter_declaration";
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
module.exports.parameter_declaration = parameter_declaration;
