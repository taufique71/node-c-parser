/* jshint sub:true */

/*
 *  stmt_list_p -> stmt stmt_list_p
 *               | EPSILON
 * */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var stmt_list_p = require("./stmt_list_p").stmt_list_p;
var stmt = require("./stmt").stmt;
var EPSILON = require("./commons").EPSILON;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = stmt(token_stream, arrow);
        if(child_1) child_2 = stmt_list_p(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
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

var stmt_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "stmt_list_p";
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
module.exports.stmt_list_p = stmt_list_p;
