//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    var currentdate = new Date();
    var day = String(currentdate.getDate()).padStart(2, '0');
    var month = String(currentdate.getMonth() + 1).padStart(2, '0');
    var year = currentdate.getFullYear();
    var formattedDate = "".concat(day, "-").concat(month, "-").concat(year);
    return formattedDate;
    //console.log(getCurrentDate());
}
console.log(getCurrentDate());
