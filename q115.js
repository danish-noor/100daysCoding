//Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function logDaysOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednessday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid number");
            break;
    }
}
logDaysOfWeek(1);
logDaysOfWeek(2);
logDaysOfWeek(3);
logDaysOfWeek(4);
logDaysOfWeek(5);
logDaysOfWeek(6);
logDaysOfWeek(7);
logDaysOfWeek(8);
export {};
