//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
export {};
