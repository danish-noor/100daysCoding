//Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("involid month");
            break;
    }
}
logSeason(12);
logSeason(1);
logSeason(2);
logSeason(3);
logSeason(4);
logSeason(5);
logSeason(6);
logSeason(7);
logSeason(8);
logSeason(9);
logSeason(10);
logSeason(11);
export {};
