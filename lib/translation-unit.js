var exec = require("child_process").exec;

var clearPreprocessors = function(fileName, cb){
    var cppFileName = "y";
    var commandToExecute = "cpp" + " " + fileName + " " + cppFileName;
    exec(commandToExecute, function(err, stdout, stderr){
        if(!err){
            var lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(cppFileName)
            });
            
            var codeText = "";
            var startFlag = false;
            var onOffFlag = false;

            lineReader.on('line', function (line) {
                var tokens = line.split(" ");
                if(tokens[0] == "#"){
                    var fileNameToMatch = '"' + fileName + '"';
                    if(tokens[2] == fileNameToMatch){
                        if(startFlag == false){
                            startFlag = true;
                        }
                        else{
                            onOffFlag = true;
                        }
                    }
                    else{
                        if(onOffFlag == true){
                            codeText += "\n";
                        }
                        onOffFlag = false;
                    }
                }
                else{
                    if(startFlag && onOffFlag){
                        codeText += line;
                        codeText += "\n";
                    }
                }
                console.log(codeText);
            });
            //console.log(codeText);
            commandToExecute = "rm " + cppFileName;
            exec(commandToExecute, function(err, stdout, stderr){
                cb(null);
            });
        }
        else{
            cb(err);
        }
    });
}
module.exports.clearPreprocessors = clearPreprocessors;
