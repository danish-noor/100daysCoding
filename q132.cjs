"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
var index_cjs_1 = require("./index.cjs");
var main_cjs_1 = require("./main.cjs");
console.log("Hello name is ".concat(index_cjs_1.myName, " and my age is ").concat(index_cjs_1.myAge, " and myFather name is ").concat(main_cjs_1.fatherName));
