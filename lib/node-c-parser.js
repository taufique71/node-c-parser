/* jshint sub:true */

//var lexer = require("../../node-c-lexer/index");
var lexer = require("node-c-lexer");
module.exports.lexer = lexer;

var rules = require("./rules");
module.exports.rules = rules;

var parse = function(token_stream){
    var arrow = { "pointer": 0 };
    var parse_tree = rules.translation_unit(token_stream, arrow);
    if(arrow.pointer === token_stream.length) return parse_tree;
    else return null;
};
module.exports.parse = parse;
