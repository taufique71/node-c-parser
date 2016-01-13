var readSourceFile = function(fileName, cb){
    var fs = require('fs');
    fs.readFile(fileName, 'utf8', function(err, data){
        cb(err, data);
    });
}
module.exports.readSourceFile = readSourceFile;

var getTokenStream = function(text){
    var scanner = require("./node-c-lexer");
    var streamOfTokens = scanner.tokenize(text);
    return streamOfTokens;
}
module.exports.getTokenStream = getTokenStream;
