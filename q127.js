//Question 127: Convert a traditional function expression to an arrow function.
const traditionalFunction = function (a, b) {
    return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(8, 4));
console.log(arrowFunction(8, 4));
export {};
