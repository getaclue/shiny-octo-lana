var port 	= Number(process.argv[2])
var file 	= process.argv[3]

var fs 		= require('fs')
var http 	= require('http')

// Modified solution

var server 	= http.createServer(function callback(request, response){
	response.writeHead(200, {'content-type': 'text/plain'})
	var sourceFile = fs.createReadStream(file)
	sourceFile.pipe(response)
})

server.listen(port)

// Initial Solution
// ////////////////////////////////////////////////////////////////////////////
// var server 	= http.createServer(function callback(request, response){
// 
// 	var sourceFile = fs.createReadStream(file)
// 	sourceFile.pipe(response)
// })

// server.listen(port)