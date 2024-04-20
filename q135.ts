//Question 135: Explain how you can format a JSON string with proper indentation for readability.


const person = {
    name: "danish",
    age: 38,
    city: "wonderland",
};

const jsonString = JSON.stringify(person,null,2);

console.log(jsonString);