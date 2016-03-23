var parser = require("../index");

//parser.lexer.cppUnit.clearPreprocessors("./b.c", function(err, codeText){
    //console.log(codeText);
    //var tokens = parser.lexer.lexUnit.tokenize(codeText);
    //console.log(tokens);
    //var obj = parser.parse(tokens);
    //console.log(obj);
//});

var param_type_list = require("../lib/parameter_type_list").parameter_type_list;
console.log(typeof(param_type_list));
console.log(typeof(parser));
