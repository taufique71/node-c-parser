var lexer = require("node-c-lexer");
var fs = require("fs");
var jsonfile = require("jsonfile");
jsonfile.spaces = 2;

var code_file           =   __dirname + "/case_2.c";
var token_stream_file   =   __dirname + "/case_2.js";

lexer.cppUnit.clearPreprocessors(code_file, function (err, code_text) {
  if (err) {
	return console.log(err);
  }
    else{
        var tokens = lexer.lexUnit.tokenize(code_text);
        jsonfile.writeFile(token_stream_file, tokens, function (err) {
            if(err){
                console.log(err);
            }
		})
    }
});
