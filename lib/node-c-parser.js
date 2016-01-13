var readSourceFile = function(fileName, cb){
    var fs = require('fs');
    fs.readFile(fileName, 'utf8', function(err, data){
        cb(err, data);
    });

}
module.exports.readSourceFile = readSourceFile;
