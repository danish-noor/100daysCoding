//Question 133: Write a JavaScript object and convert it into a JSON string.

const person = {
    name: "danish",
    age: 38,
    city: "wonderland",
};

const jsonString = JSON.stringify(person);

console.log(jsonString);
