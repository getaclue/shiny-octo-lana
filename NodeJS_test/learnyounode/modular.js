module.exports = function(dir, ext, callback){
	var fs = require('fs')
	var path = require('path')

	var result = []

	fs.readdir(dir, function(err, list){
		if (err) {
			return callback(err)
		} else {
			for (var i = 0; i < list.length; i++){
				var temp = path.extname(list[i])
				if (temp.indexOf(ext) == 1) {
					result.push(list[i])
				}
			}
			return callback(null, result)
		}
	})
}

// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
    
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }