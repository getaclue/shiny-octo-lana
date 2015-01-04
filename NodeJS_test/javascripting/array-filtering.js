var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering isn't well described in the tutorial
// There is a discrepancy between the example and the tutorial (the example does not use any naming convention after the function keyword. Whereas the tutorial asks us to name our function evenNumbers)

var filtered = numbers.filter(function evenNumbers(number){
	return number % 2 === 0;
});

console.log(filtered);