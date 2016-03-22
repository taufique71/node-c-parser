/*
 *  declaration -> declaration_specifiers ';'
 *               | declaration_specifiers init_declarator_list
 * */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var declaration_specifiers = require("./declaration_specifiers").declaration_specifiers;
var init_declarator_list = require("./init_declarator_list").init_declarator_list;
var TERMINAL = require("./commons").TERMINAL;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1) child_2 = TERMINAL(token_stream, arrow, ";");
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = declaration_specifiers(token_stream, arrow);
        if(child_1) child_2 = init_declarator_list(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var declaration = function(token_stream, arrow){
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
};
module.exports.declaration = declaration;
