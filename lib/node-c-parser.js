var helloWorld = function(str){
    return str;
}
module.exports.helloWorld = helloWorld;

var readSourceFile = function(fileName, cb){
    var fs = require('fs');
    fs.readFile(fileName, 'utf8', function(err, data){
        cb(err, data);
    });

}
module.exports.readSourceFile = readSourceFile;

var tokenize = function(){
    var Lexer = require("lex");
    var lexer = new Lexer;
    lexer.addRule(/[a-f\d]+/i, function(lexeme){
        console.log(lexeme);
        return "HEX";
    }).setInput("ab cd ef").lex().lex().lex();
}
module.exports.tokenize = tokenize;
