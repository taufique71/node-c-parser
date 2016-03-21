/* jshint sub:true */

/*
 *  initializer -> assignment_expr
 *               | '{' initializer_list '}'
 *               | '{' initializer_list ';' '}'
 * */


var _ = require("lodash");
var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var assignment_expr = require("./assignment_expr").assignment_expr;
var initializer_list = require("./initializer_list").initializer_list;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = assignment_expr(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        child_1 = TERMINAL(token_stream, arrow, "{");
        if(child_1) child_2 = initializer_list(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, "}");
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        child_1 = TERMINAL(token_stream, arrow, "{");
        if(child_1) child_2 = initializer_list(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, ";");
        if(child_3) child_4 = TERMINAL(token_stream, arrow, "}");
        if(child_4){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
        }
    }
];

var initializer = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "initializer";
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
module.exports.initializer = initializer;
