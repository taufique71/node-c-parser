var exec = require("child_process").exec;

var clearPreprocessors = function(fileName, cb){
    var cppFileName = "y";
    var commandToExecute = "cpp" + " " + fileName + " " + cppFileName;
    exec(commandToExecute, function(err, stdout, stderr){
        if(!err){
            var lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(cppFileName)
            });

            lineReader.on('line', function (line) {
                console.log(line);
            });
            cb(null);
        }
        else{
            cb(err);
        }
    });
}
module.exports.clearPreprocessors = clearPreprocessors;
