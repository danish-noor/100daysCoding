//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const countryCapital = new Map();
countryCapital.set("Pakistan", "Islamabad");
countryCapital.set("America", "Washinton dc");
countryCapital.set("Canada", "Ottawa");
console.log(countryCapital);
function cheakforcanada(countryCapital) {
    if (countryCapital.has("Canada")) {
        console.log(`The capital of Canada is: "${countryCapital.get("Canada")}"`);
    }
    else {
        "Canada is not in the Map";
    }
}
cheakforcanada(countryCapital);
export {};
