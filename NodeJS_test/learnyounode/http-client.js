var http = require('http')
var URL = process.argv[2]

http.get(URL, function callback (response) {
	response.setEncoding('utf8')

	// Bug checking
	// console.log('Got response: ' + response.statusCode)

	response.on("data", function (data){
		console.log(data)
	})
}).on('error', function(error){
	console.log('Got error: ' + error.message)
})

// Official solution:
// var http = require('http')
    
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })