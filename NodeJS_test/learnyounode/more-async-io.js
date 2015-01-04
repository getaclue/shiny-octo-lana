// Awesome description of NodeJS, callbacks, and async
// https://github.com/maxogden/art-of-node#callbacks

var fs = require('fs')
var myNumber = undefined

function addOne(callback){
	fs.readFile('number.txt', function doneReading(err, fileContents){
		myNumber = parseInt(fileContents)
		myNumber++
		callback()
	})
}

function logMyNumber(){
	console.log('Finished!')
	console.log(myNumber)
}

console.log('Beginning file reading...')
addOne(logMyNumber)