"use strict";
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
//Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.
var person_cjs_1 = require("./person.cjs");
var alice = new person_cjs_1.Person("Alice");
alice.greet();
