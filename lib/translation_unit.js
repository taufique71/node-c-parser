var _ = require("lodash");
var external_declaration = require("./external_declaration").external_declaration;
var translation_unit_p = require("./translation_unit_p").translation_unit_p;

var translation_unit = function(token_stream, arrow){
    var new_node = {}, child_1 = null, child_2 = null;

    new_node["title"] = "translation_unit";
    new_node["children"] = [];

    child_1 = external_declaration(token_stream, arrow);
    if(child_1) child_2 = translation_unit_p(token_stream, arrow);
    if(child_1 && child_2){
        new_node["children"].push_back(child_1);
        new_node["children"].push_back(child_2);
        return new_node;
    }
    else{
        return;
    }
}
module.exports.translation_unit = translation_unit;
