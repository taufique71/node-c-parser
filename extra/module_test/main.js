var parser = require("../../index");

parser.lexer.cppUnit.clearPreprocessors("./b.c", function(err, codeText){
    var tokens = parser.lexer.lexUnit.tokenize(codeText);
    var obj = parser.parse(tokens);
    console.log(JSON.stringify(obj));
    var v = parser.static_analysis(obj);
    console.log(v);
});
