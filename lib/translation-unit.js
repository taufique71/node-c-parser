var clearPreprocessors = function(fileName, cb){
	var lineReader = require('readline').createInterface({
	    input: require('fs').createReadStream(fileName)
	});

	lineReader.on('line', function (line) {
	  console.log('Line from file:', line);
	});
}
module.exports.clearPreprocessors = clearPreprocessors;
