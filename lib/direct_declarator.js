/*jshint sub:true*/

/*
 *  direct_declarator -> IDENTIFIER direct_declarator_p
 *                     | '(' declarator ')' direct_declarator_p
 * */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var TERMINAL = require("./commons").TERMINAL;
var direct_declarator_p = require("./direct_declarator_p").direct_declarator_p;
var declarator = require("./declarator").declarator;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "IDENTIFIER");
        if(child_1) child_2 = direct_declarator_p(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        child_1 = TERMINAL(token_stream, arrow, "(");
        if(child_1) child_2 = declarator(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, ")");
        if(child_3) child_4 = direct_declarator_p(token_stream, arrow);
        if(child_4){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
        }
    }
];

var direct_declarator = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "direct_declarator";
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
module.exports.direct_declarator = direct_declarator;
