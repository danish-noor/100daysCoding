//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    const currentdate = new Date();
    const day = String(currentdate.getDate()).padStart(2, '0');
    const month = String(currentdate.getMonth() + 1).padStart(2, '0');
    const year = currentdate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
}
console.log(getCurrentDate());
export {};
