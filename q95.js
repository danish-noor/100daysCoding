#! /usr/bin/env node
//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
var numbers = [8, 10, 16, 18, 20, 9, 30];
function filterGreaterThenTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
console.log(filterGreaterThenTen(numbers)); //[16, 18, 20, 30]
