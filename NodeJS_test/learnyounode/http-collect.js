var http 	= require('http')
var url 	= process.argv[2]
var bl 		= require('bl')

http.get(url, function callback (response){
	response.pipe(bl(function(err, data){
		if (err){
			return console.error(err)
		}
		console.log(data.toString().length)
		console.log(data.toString())
	}))
})