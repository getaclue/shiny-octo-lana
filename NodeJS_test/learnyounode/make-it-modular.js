var mymodule = require('./modular.js')

mymodule(process.argv[2], process.argv[3], function(err, list){
	if (list.length > 0 ){
		for(var i in list){
			console.log(list[i])
		}
	} else {
		console.log('Sorry. File extension ' + process.argv[3] + ' does not exist.')
	}
})

// https://github.com/nodeschool/discussions/issues/64
// solution.js:

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })