/* jshint sub:true */

/*
 *  constant_expr -> conditional_expr
 * */

var _ = require("lodash");
var iterate_over_rules = require("./commons").iterate_over_rules;
var conditional_expr = require("./commons").conditional_expr;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = conditional_expr(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var constant_expr = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "constant_expr";
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
module.exports.constant_expr = constant_expr;
