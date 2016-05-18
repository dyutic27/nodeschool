var fs = require('fs') // require is a special function provided by node

var filepath = process.argv[2];

var linecount;

function countLines(filepath, writelog)	{ 
	fs.readFile(filepath, function doneReading(err, buff) {
		linecount = buff.toString().split("\n").length - 1;
 		writelog();
  	});
};


function writeLog() {
	console.log(linecount);
};


countLines(filepath, writeLog);