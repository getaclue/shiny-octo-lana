var path = process.argv[2]
var fs = require('fs')
var outputArray = undefined

// Original way:
// ============================================================================
// fs.readFile(path, 'utf8', function callback(err, data){
// 	outputArray = data.split('\n')
// 	printText(outputArray)
// })

// Second way:
// ============================================================================
fs.readFile(path, function callback(err, data){
	var temp = data.toString()
	outputArray = temp.split('\n')
	printText(outputArray)
})

function printText(message){
	// console.log('All good captain!')
	console.log(outputArray.length - 1)
}