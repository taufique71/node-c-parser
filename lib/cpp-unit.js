var exec = require("child_process").exec;
var uuid = require("uuid");
var fs = require("fs");

var clearPreprocessors = function(fileName, cb){
    var cppFileName = uuid.v1();
    //var cppFileName = "y";
    var commandToExecute = "cpp" + " " + fileName + " " + cppFileName;
    exec(commandToExecute, function(err, stdout, stderr){
        if(!err){
            var lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(cppFileName)
            });
            
            var onOffFlag = false;
            var listOfLines = [];
            var codeText = "";
            var prevLine = "";
            var currentMainFileLine = 0;
            var currentlyReadLine = 0;
            var currentlyWrittenLine = 0;

            lineReader.on('line', function (line) {
                currentlyReadLine += 1;
                var tokens = line.split(" ");
                if(tokens[0] == "#"){
                    var fileNameToMatch = '"' + fileName + '"';
                    if((tokens[2] == fileNameToMatch)){
                        onOffFlag = true;
                        currentMainFileLine = parseInt(tokens[1]);
                        if((currentMainFileLine - currentlyWrittenLine) >= 2){
                            listOfLines.push("");
                            currentlyWrittenLine += 1;
                        }
                        else if(currentMainFileLine <= currentlyWrittenLine){
                            listOfLines.pop();
                            currentlyWrittenLine -= 1;
                        }
                    }
                    else{
                        onOffFlag = false;
                    }
                }
                else if(onOffFlag){
                    listOfLines.push(line);
                    currentlyWrittenLine += 1;
                }
                prevLine = line;
            });

            lineReader.on('close', function() {
                //fs.writeFile("z", codeText, function(err) {
				//});
                commandToExecute = "rm " + cppFileName;
                exec(commandToExecute, function(err, stdout, stderr){
                    cb(null, listOfLines.join("\n"));
                });
            });
        }
        else{
            cb(err);
        }
    });
}
module.exports.clearPreprocessors = clearPreprocessors;
