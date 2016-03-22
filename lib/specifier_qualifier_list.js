/* jshint sub:true */

/*
 *  specifier_qualifier_list -> type_specifier specifier_qualifier_list
 *                            | type_specifier
 *                            | type_qualifier specifier_qualifier_list
 *                            | type_qualifier
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var type_specifier = require("./type_specifier").type_specifier;
var type_qualifier = require("./type_qualifier").type_qualifier;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = type_specifier(token_stream, arrow);
        if(child_1) child_2 = specifier_qualifier_list(token_stream, arrow);
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
        child_1 = type_qualifier(token_stream, arrow);
        if(child_1) child_2 = specifier_qualifier_list(token_stream, arrow);
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
    }
];

var specifier_qualifier_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "specifier_qualifier_list";
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
module.exports.specifier_qualifier_list = specifier_qualifier_list;
