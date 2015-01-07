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

	var temp1 = date.toString()
	var temp2 = temp1.split(' ')
	var temp3 = temp2[4]
	var temp4 = temp3.split(':')
	// console.log(temp4)

	// console.log(date.getTime())
	// console.log(unixDate)

	// console.log(requestCall['pathname'] == '/api/parsetime')
	// console.log(requestCall.query.iso)
	// console.log(requestTime)

	response.writeHead(200, {'Content-Type': 'application/json'})

	if (requestCall['pathname'] == '/api/parsetime'){
		// do regular JSON
		// response.end((new Date(requestTime)).toJSON())
		// response.end(requestTime)
		response.end(JSON.stringify({
									'hour': 	Number(temp4[0]), 
									'minute': 	Number(temp4[1]),
									'second': 	Number(temp4[2])
								}))
	}

	if (requestCall['pathname'] == '/api/unixtime'){
		// do UNIX format
		response.end(JSON.stringify({
									'unixtime': unixDate
		}))
	}
})

server.listen(port)