//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

const student = new Map<number, string>();
student.set(1, "Ali");
student.set(2, "Baber");
student.set(3, "Asad");

student.forEach((name,id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
    
});