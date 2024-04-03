//Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    const defferenceInMillis = nextYear.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(defferenceInMillis / (1000 * 60 * 60 * 24));
    return daysLeft;
}
console.log("Days until New Year. " + daysUntilNewYear());
export {};
