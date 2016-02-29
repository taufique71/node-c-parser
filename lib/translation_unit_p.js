var _ = require("lodash");
var external_declaration = require("./external_declaration").external_declaration;
var EPSILON = require("./commons").EPSILON;

var translation_unit_p = function(token_stream, arrow){
    var new_node = {}, child_1 = null, arrow_copy = _.clone(arrow);

    new_node["title"] = "translation_unit_p";
    new_node["children"] = [];

    child_1 = external_declaration(token_stream, pointer);
    if(child_1){
        new_node["children"].push_back(child_1);
        return new_node;
    }
    else{
        child_1 = EPSILON(token_stream, pointer);
        new_node["children"].push_back(child_1);
        return new_node;
    }
    else{
        return;
    }
}
module.exports.translation_unit_p = translation_unit_p;
