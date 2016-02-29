var lexer = require("node-c-lexer");
module.exports.lexer = lexer;

var translation_unit = require("./translation_unit").translation_unit;

var parse = function(token_stream){
    var arrow = { "pointer": 1};
    translation_unit(token_stream, arrow);
}
module.exports.parse = parse;
