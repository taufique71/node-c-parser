/* jshint sub:true */

var lexer = require("node-c-lexer");
module.exports.lexer = lexer;

var translation_unit = require("./rules").translation_unit;

var parse = function(token_stream){
    var arrow = { "pointer": 0};
    var parse_tree = translation_unit(token_stream, arrow);
    return parse_tree;
};
module.exports.parse = parse;
