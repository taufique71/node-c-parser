/* jshint sub:true */

/*
 *  struct_declaration_list -> struct_declaration struct_declaration_list_p
 * */

var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var struct_declaration = require("./struct_declaration").struct_declaration;
var struct_declaration_list_p = require("./struct_declaration_list_p").struct_declaration_list_p;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = struct_declaration(token_stream, arrow);
        if(child_1) child_2 = struct_declaration_list_p(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var struct_declaration_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "struct_declaration_list";
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
module.exports.struct_declaration_list = struct_declaration_list;
