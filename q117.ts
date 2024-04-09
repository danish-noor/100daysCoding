//Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function evaluateGrade (grade:string){
    switch (grade){
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Very Good");
            break;
        case "C":
            console.log("Good");
            break;
        case "D":
            console.log("Fair");
            break;
        default:
            console.log("Invalid grade");
            break;
        }
}
evaluateGrade("A");
evaluateGrade("B");
evaluateGrade("C");
evaluateGrade("D");
evaluateGrade("E");