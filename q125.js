//Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
const recangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    }
};
console.log(recangle.calculateArea());
export {};
