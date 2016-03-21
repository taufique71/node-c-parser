/*
 *  declaration_specifiers -> storage_class_specifier
 *                          | storage_class_specifier declaration_specifiers
 *                          | type_specifier
 *                          | type_specifier declaration_specifiers
 *                          | type_qualifier
 *                          | type_qualifier declaration_specifiers
 * */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var storage_class_specifier = require("./storage_class_specifier").storage_class_specifier;
var type_specifier = require("./type_specifier").type_specifier;
var type_qualifier = require("./type_qualifier").type_qualifier;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = storage_class_specifier(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = storage_class_specifier(token_stream, arrow);
        if(child_1) child_2 = declaration_specifiers(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = type_specifier(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = type_specifier(token_stream, arrow);
        if(child_1) child_2 = declaration_specifiers(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = type_qualifier(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = type_qualifier(token_stream, arrow);
        if(child_1) child_2 = declaration_specifiers(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var declaration_specifiers = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration";
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
module.exports.declaration_specifiers = declaration_specifiers;
