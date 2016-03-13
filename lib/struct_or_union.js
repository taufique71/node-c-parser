/* jshint sub:true */

/*
 *  struct_or_union -> STRUCT
 *                   | UNION
 * */

var EPSILON = require("./commons").EPSILON;
var TERMINAL = require("./commons").TERMINAL;
var iterate_over_rules = require("./commons").iterate_over_rules;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "struct");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "union");
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var struct_or_union = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "struct_or_union";
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
module.exports.struct_or_union = struct_or_union;
