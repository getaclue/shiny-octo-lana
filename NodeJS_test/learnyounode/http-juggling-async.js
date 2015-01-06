var http 	= require('http')
var bl		= require('bl')

var url1 	= process.argv[2]
var url2 	= process.argv[3]
var url3	= process.argv[4]

http.get(url1, function callback(response){
	response.pipe(bl(function(err, data){
		if (err){
			return console.error(err)
		}
		http.get(url2, function callback(response){
			response.pipe(bl(function(err, data){
				if (err){
					return console.error(err)
				}
				http.get(url3, function callback(response){
					response.pipe(bl(function(err, data){
						if (err){
							return console.error(err)
						}
						console.log(data.toString())
					}))
				})
				console.log(data.toString())
			}))
		})
		console.log(data.toString())
	}))
})