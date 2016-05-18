var fs = require('fs');
var path = require('path');

var filenames = [];
var filepath = process.argv[2];
var fileext = '.' + process.argv[3];

/*
function writeFileNames() {

	for (i = 0; i < filenames.length; i++ ) {
		console.log(filenames[i]);
	};
};

function txtOnly(name) {
    
    //console.log(path.extname(name));

	if (path.extname(name) == fileext ) {
		return true;
	}
	else {
		return false;
	}
} */

//function writeTxtFiles(filepath, writeFileNames, filterfunc) {

fs.readdir(filepath, function doneReading(err, names){
	names.forEach(function (name){
		if (path.extname(name) == fileext) {
			console.log(name);
		};
	});

//		filenames = names.filter(filterfunc)
//		writeFileNames();

});

//}

//writeTxtFiles(filepath, writeFileNames, txtOnly);