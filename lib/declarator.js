/*
 *  declarator -> pointer direct_declarator
 *              | direct_declarator
 * */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var pointer = require("./pointer").pointer;
var direct_declarator = require("./direct_declarator").direct_declarator;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = pointer(token_stream, arrow);
        if(child_1) child_2 = direct_declarator(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = direct_declarator(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declarator";
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
module.exports.declarator = declarator;
