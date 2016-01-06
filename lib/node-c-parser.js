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

var tokenize = function(streamOfText){
    var Lexer = require("lex");
    var lexer = new Lexer;
    var row = 1, col = 1;
    var streamOfTokens = [];
    lexer.addRule(/(while|volatile|void|unsigned|union|typedef|switch|struct|struct|static|sizeof|signed|short|return|register|long|int|if|goto|for|float|extern|enum|else|double|do|default|continue|const|char|case|break|auto)/, function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "KEYWORD";
        token["parent"] = null;
        token["children"] = null;
        col = col + lexeme.length;
        return token;
    });
    lexer.addRule(/[\n]/, function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "NEWLINE";
        token["parent"] = null;
        token["children"] = null;
        col = 1;
        row = row + 1;
        return token;
    });
    lexer.setInput(streamOfText);
    var x = lexer.lex();
    while(x != undefined){
        if(x.tokenClass != "NEWLINE") streamOfTokens.push(x);
        x = lexer.lex();
    };
    return streamOfTokens;
}
module.exports.tokenize = tokenize;
