/* jshint sub:true */

/*
 *  conditional_expr -> logical_or_expr
 *                    | logical_or_expr '?' expr ':' conditional_expr
 * */

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;
var logical_or_expr = require("./logical_or_expr").logical_or_expr;
var expr = require("./expr").expr;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = logical_or_expr(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        var child_5 = null;
        child_1 = logical_or_expr(token_stream, arrow);
        if(child_1) child_2 = TERMINAL(token_stream, arrow, '?');
        if(child_2) child_3 = expr(token_stream, arrow);
        if(child_3) child_4 = TERMINAL(token_stream, arrow, ':');
        if(child_4) child_5 = conditional_expr(token_stream, arrow);
        if(child_5){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
            node["children"].push(child_5);
        }
    }
];

var conditional_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "conditional_expr";
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
module.exports.conditional_expr = conditional_expr;
