#! /usr/bin/env node

//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.


const words: string[] = ["suzuki","toyota","honda","kawasaki"];

const lenght: number[] = words.map(words => words.length);

console.log(lenght);//[6, 6, 5, 8]
