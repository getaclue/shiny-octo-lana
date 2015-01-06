// My solution
// ////////////////////////////////////////////////////////////////////////////

var dirPath = process.argv[2]
var fileXtension = process.argv[3]

var fs = require('fs')
var path = require('path')
var result = []

fs.readdir(dirPath, function callback(err, list){
	for (var i = 0; i < list.length; i++){
		var fileExtension = new String(path.extname(list[i]));
		// console.log('extension of ' + list[i] + ' == ' + fileExtension)
		if (fileExtension.indexOf(fileXtension) == 1){
			result.push(list[i])
		}
	}
	if (result.length > 0){
		for (var i = 0; i < result.length; i++){
			console.log(result[i])
		}
	} else {
		console.log('Sorry, files with ' + fileXtension + ' file extension do not exist.')
	}
})

// Solution to exercise:
// var fs = require('fs')
// var path = require('path')
    
//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })