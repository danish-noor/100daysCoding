//Question 132: Discuss the difference between default and named exports in JavaScript modules.

import { myName,myAge } from "./index.cjs";

import { fatherName } from "./main.cjs";

console.log(`Hello name is ${myName} and my age is ${myAge} and myFather name is ${fatherName}`);