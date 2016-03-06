/*
 *  compount_stmt -> '{' '}'
 *                 | '{' stmt_list '}'
 *                 | '{' declaration_list '}'
 *                 | '{' declaration_list stmt_list '}'
 * */

var iterate_over_rules = require("./commons").iterate_over_rules;
var declaration_list = require("./declaration_list").declaration_list;
var stmt_list = require("./stmt_list").stmt_list;
var TERMINAL = require("./commons").TERMINAL;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = declaration(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = EPSILON(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var compound_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "declaration_list_p";
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
module.exports.compound_stmt = compound_stmt;
