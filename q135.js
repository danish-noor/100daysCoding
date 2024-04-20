//Question 135: Explain how you can format a JSON string with proper indentation for readability.
var person = {
    name: "danish",
    age: 38,
    city: "wonderland",
};
var jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
