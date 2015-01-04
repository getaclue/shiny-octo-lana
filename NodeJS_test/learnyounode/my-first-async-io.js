var path = process.argv[2]
var fs = require('fs')

fs.readFile(path, 'utf8', printText)

function printText(){
	console.log('All good captain!')
}