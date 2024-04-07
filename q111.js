//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age >= 13 && age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
;
console.log(categorizeAge(11));
console.log(categorizeAge(16));
console.log(categorizeAge(24));
export {};
