/*
*   declaration_list -> declaration declaration_list_p
* */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var declaration = require("./declaration").declaration;
var declaration_list_p = require("./declaration_list_p").declaration_list_p;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = declaration(token_stream, arrow);
        if(child_1) child_2 = declaration_list_p(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var declaration_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration_list";
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
module.exports.declaration_list = declaration_list;
