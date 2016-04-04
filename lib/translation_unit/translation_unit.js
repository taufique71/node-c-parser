/*
*   translation_unit -> external_declaration translation_unit_p
* */

var _ = require("lodash");
var external_declaration = require("./external_declaration").external_declaration;
var translation_unit_p = require("./translation_unit_p").translation_unit_p;

var translation_unit = function(token_stream, arrow){
    var new_node = {}, child_1 = null, child_2 = null;
    var new_arrow = _.clone(arrow);

    new_node["title"] = "translation_unit";
    new_node["children"] = [];

    child_1 = external_declaration(token_stream, new_arrow);
    if(child_1) child_2 = translation_unit_p(token_stream, new_arrow);
    if(child_1 && child_2){
        new_node["children"].push(child_1);
        new_node["children"].push(child_2);
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
}
module.exports.translation_unit = translation_unit;
