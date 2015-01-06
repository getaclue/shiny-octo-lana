var port 	= Number(process.argv[2])
var map 	= require('through2-map')
var http 	= require('http')

var server = http.createServer(function callback(request, response){
	if (request.method != 'POST'){
		return response.end('Please send a POST request\n')
	}
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(response)
})

server.listen(port)