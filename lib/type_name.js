/* jshint sub:true */

/*
 *  type_name -> specifier_qualifier_list
 *             | specifier_qualifier_list abstract_declarator
 * */

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var specifier_qualifier_list = require("./specifier_qualifier_list").specifier_qualifier_list;
var abstract_declarator = require("./abstract_declarator").abstract_declarator;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = specifier_qualifier_list(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        child_1 = specifier_qualifier_list(token_stream, arrow);
        if(child_1) child_2 = abstract_declarator(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var type_name = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "type_name";
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
module.exports.type_name = type_name;
