#! /usr/bin/env node
//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["suzuki", "toyota", "honda", "kawasaki"];
var lenght = words.map(function (words) { return words.length; });
console.log(lenght); //[6, 6, 5, 8]
