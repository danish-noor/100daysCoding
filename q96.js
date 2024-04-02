#! /usr/bin/env node
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var number = [1, 2, 3, 4, 5];
function calculatesum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
console.log(calculatesum(number)); //15
