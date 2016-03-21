var parser = require("../index");

parser.lexer.cppUnit.clearPreprocessors("./b.c", function(err, codeText){
    console.log(codeText);
    var tokens = parser.lexer.lexUnit.tokenize(codeText);
    console.log(tokens);
    var obj = parser.parse(tokens);
    console.log(obj);
});
