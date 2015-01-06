var http 	= require('http')
var bl		= require('bl')

// Original Solution:
// ////////////////////////////////////////////////////////////////////////////

// var url1 	= process.argv[2]
// var url2 	= process.argv[3]
// var url3	= process.argv[4]

// http.get(url1, function callback(response){
// 	response.pipe(bl(function(err, data){
// 		if (err){
// 			return console.error(err)
// 		}
// 		http.get(url2, function callback(response){
// 			response.pipe(bl(function(err, data){
// 				if (err){
// 					return console.error(err)
// 				}
// 				http.get(url3, function callback(response){
// 					response.pipe(bl(function(err, data){
// 						if (err){
// 							return console.error(err)
// 						}
// 						console.log(data.toString())
// 					}))
// 				})
// 				console.log(data.toString())
// 			}))
// 		})
// 		console.log(data.toString())
// 	}))
// })

// Modified Solution
// ////////////////////////////////////////////////////////////////////////////
var results	= []
var count	= 0

function httpGet(index){
	http.get(process.argv[2 + index], function callback(response){
		response.pipe(bl(function(err, data){
			if (err){
				return console.error(err)
			}

			results[index] = data.toString()
			count++

			if(count == 3){
				for(var i = 0; i < 3; i++)
					console.log(results[i])
			}
		}))
	})
}

for (var i = 0; i < 3; i++){
	httpGet(i)
}