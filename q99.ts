//Question 99: Generate a date object representing your next birthday and log it to the console.

function getNextBirthday(month: number, day: number): Date{
    const currentDay = new Date();
    
    let year = currentDay.getFullYear();
    
    const birthday = new Date(year, month - 1, day);

    if (birthday < currentDay) {

        birthday.setFullYear(year + 1);
    }

     return birthday;
}
const nextBirthday = getNextBirthday(3, 29);

console.log("Next birthday on:", nextBirthday.toLocaleDateString());