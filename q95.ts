#! /usr/bin/env node

//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

const numbers:number[] =[8, 10, 16, 18, 20, 9, 30];

function filterGreaterThenTen(numbers :number []): number[] {
    return numbers.filter(number => number > 10);
}

console.log(filterGreaterThenTen(numbers));//[16, 18, 20, 30]
