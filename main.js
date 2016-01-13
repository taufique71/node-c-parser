var parser = require("./index");

parser.readSourceFile("./test/a.c", function(err, text){
    console.log(text);
    var x = parser.getTokenStream(text);
    for(var i = 0; i < x.length; i++){
        console.log(x.lexeme);
    }
});
