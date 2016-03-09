/* jshint sub:true */

/*
 *  type_qualifier_list -> type_qualifier type_qualifier_list_p
 *
 * */

var iterate_over_rules = require("./commons").iterate_over_rules;
var type_qualifier = require("./type_qualifier").type_qualifier;
var type_qualifier_list_p = require("./initializer").initializer;


var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = type_qualifier(token_stream, arrow);
        if(child_1) child_2 = type_qualifier_list_p(token_stream, arrow);
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    }
];

var type_qualifier_list = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "type_qualifier_list";
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
module.exports.type_qualifier_list = type_qualifier_list;
