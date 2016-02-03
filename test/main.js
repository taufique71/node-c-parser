var parser = require("../index");

parser.cppUnit.clearPreprocessors("./b.c", function(err, codeText){
    //console.log(codeText);
    //var tokens = parser.getTokenStream(codeText);
    //console.log(tokens);
});
