var filePath = process.argv[2];

var fs = require('fs');
var buffer = fs.readFileSync(filePath);
var bufferedStr = buffer.toString();
var outputArray = bufferedStr.split('\n');

console.log(outputArray.length - 1);