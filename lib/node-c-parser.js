/* jshint sub:true */

var lexer = require("node-c-lexer");
module.exports.lexer = lexer;

var translation_unit = require("./rules").translation_unit;

var parse = function(token_stream){
    var arrow = { "pointer": 0 };
    var parse_tree = translation_unit(token_stream, arrow);
    return parse_tree;
};
module.exports.parse = parse;

var static_analysis = function(parse_tree){
    var info = {};
    var parse_tree_analyzer = require("./parse-tree-analyzer");

    info["variables"] = parse_tree_analyzer.extract_variable_count(parse_tree);
    return info;
};
module.exports.static_analysis = static_analysis;
