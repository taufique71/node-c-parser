var parser = require("../index");

parser.cppUnit.clearPreprocessors("./a.c", function(err, codeText){
    console.log(codeText);
    var tokens = parser.getTokenStream(codeText);
    console.log(tokens);
});
