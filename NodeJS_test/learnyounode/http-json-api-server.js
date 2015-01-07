var port 	= Number(process.argv[2])
var http	= require('http')
var url 	= require('url')

var server	= http.createServer(function callback(request, response){
	if(request.method != 'GET'){
		return response.end('Please pass a GET request')
	}

	var requestCall = url.parse(request.url, true)
	var requestTime = requestCall.query.iso

	var date = new Date(requestTime)
	var unixDate = Date.parse(requestTime)

	var temp = date.toString()
	console.log(temp)

	// console.log(requestCall['pathname'] == '/api/parsetime')
	// console.log(requestCall.query.iso)
	// console.log(unixDate)
	// console.log(requestTime)

	response.writeHead(200, {'Content-Type': 'application/json'})

	if (requestCall['pathname'] == '/api/parsetime'){
		// do regular JSON
		// response.end((new Date(requestTime)).toJSON())
		// response.end(requestTime)
	}

	if (requestCall['pathname'] == '/api/unixtime'){
		// do UNIX format
		response.end(unixDate)
	}
})

server.listen(port)