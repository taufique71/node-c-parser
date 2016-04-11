/* jshint sub:true */

var lexer = require("node-c-lexer");
module.exports.lexer = lexer;

var translation_unit = require("./rules").translation_unit;

var parse = function(token_stream){
    var arrow = { "pointer": 1};
    var resulting_json = translation_unit(token_stream, arrow);
    return resulting_json;
};
module.exports.parse = parse;
