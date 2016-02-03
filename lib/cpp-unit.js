var exec = require("child_process").exec;
var uuid = require("uuid");
var fs = require("fs");

var clearPreprocessors = function(fileName, cb){
    //var cppFileName = uuid.v1();
    var cppFileName = "y";
    var commandToExecute = "cpp" + " " + fileName + " " + cppFileName;
    exec(commandToExecute, function(err, stdout, stderr){
        if(!err){
            var lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(cppFileName)
            });
            
            var startFlag = false;
            var onOffFlag = false;
            var codeText = "";
            var prevLine = ""

            lineReader.on('line', function (line) {
                //console.log(line);
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
                            console.log("Point", 1);
                            codeText += "\n";
                            console.log("prevLine", prevLine);
                            console.log("line", line);
                        }
                        onOffFlag = false;
                    }
                }
                else{
                    if(startFlag && onOffFlag){
                        console.log("Point", 2);
                        codeText += line;
                        codeText += "\n";
                        console.log("prevLine", prevLine);
                        console.log("line", line);
                    }
                }
                prevLine = line;
            });

            lineReader.on('close', function() {
                fs.writeFile("z", codeText, function(err) {
				});
				//commandToExecute = "rm " + cppFileName;
				//exec(commandToExecute, function(err, stdout, stderr){
					//cb(null, codeText);
				//});
            });
        }
        else{
            cb(err);
        }
    });
}
module.exports.clearPreprocessors = clearPreprocessors;
