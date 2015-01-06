var port = process.argv[2]
var net = require('net')

// Second Solution based on the answer to the exercise
// ////////////////////////////////////////////////////////////////////////////

function zeroed(i){
	return (i < 10 ? '0' : '') + i
}

function dateAndTime(){
	var date = new Date()
	return date.getFullYear() + '-' + 
	zeroed(date.getMonth() + 1) + '-' + 
	zeroed(date.getDate()) + ' ' + 
	zeroed(date.getHours()) + ':' + 
	zeroed(date.getMinutes()) + '\n'
}

var server = net.createServer(function(socket){
	console.log('New client connected!')
	socket.write(dateAndTime())
	socket.end()
})

server.listen(Number(port))

// Initial solution (crude)
// ////////////////////////////////////////////////////////////////////////////
// var server = net.createServer(function(socket){
// 	var date = new Date()
// 	var output = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n'

// 	socket.write(output)
// 	socket.end()
// })

// server.listen(Number(port))