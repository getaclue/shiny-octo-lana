var arguments = process.argv;
var total = 0;

for (var i = 2; i < arguments.length; i++){
	total += +arguments[i];
}

console.log(total);
