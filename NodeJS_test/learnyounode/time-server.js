var port = process.argv[2]
var net = require('net')

var server = net.createServer(function(socket){
	var date = new Date()
	var output = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n'

	socket.write(output)
	socket.end()
})

server.listen(Number(port))