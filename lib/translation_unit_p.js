/*
*   translation_unit_p -> external_declaration
*                       | EPSILON
* */

var _ = require("lodash");
var external_declaration = require("./external_declaration").external_declaration;
var EPSILON = require("./commons").EPSILON;

var translation_unit_p = function(token_stream, arrow){
    var new_node = {}, child_1 = null;
    var new_arrow = _.clone(arrow);

    new_node["title"] = "translation_unit_p";
    new_node["children"] = [];

    child_1 = external_declaration(token_stream, new_arrow);
    if(child_1){
        new_node["children"].push_back(child_1);
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        new_arrow["pointer"] = arrow["pointer"];
        child_1 = EPSILON(token_stream, new_arrow);
        if(child_1){
            new_node["children"].push_back(child_1);
            arrow["pointer"] = new_arrow["pointer"];
            return new_node;
        }
        else{
            return;
        }
    }
}
module.exports.translation_unit_p = translation_unit_p;
