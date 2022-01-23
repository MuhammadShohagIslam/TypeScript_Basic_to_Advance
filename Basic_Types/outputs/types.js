"use strict";
/*
    *** What is Type ***
        => Easy way to refer to the different properties and functions that a value has
            === For Example ===
                'green' what is this
                => It is a string
                => It's a value that has all the properties methods that we assume that a string have

    *** There are two different categories of type ***
        => Primitive Types
                --- number, boolean, void, undefined, string, symbol, null
        => Object Types
                --- function, arrays, object, class

    *** Why do we care about types ***
        =>  Types are used by the TypeScript Compiler to analyze our code for errors
        => Types allow other engineers to understand what values are flowing arround our codebase

    *** Where do we use types? ***
        => Everywhere beacuse it will help us to reduce error of the application
*/
// string type
let fullName = "Muhammad Shohag Islam";
console.log(fullName);
// number type
let age = 10;
console.log(age);
// boolean type
let isWork = true;
console.log(isWork);
const today = new Date();
console.log(today.getDay());
// object type
const personObject = {
    firstName: "Muhammad Shohag",
    age: 24,
};
console.log(personObject.age);
// array type
// only allow to assign number to fruit array
const fruits = [1, 2, 3, 4];
console.log(fruits);
// only allow to assign string to fruit array
const fruitsString = ["1", "2", "3", "4"];
console.log(fruitsString);
// only allow to assign string and boolean value to fruit array
const fruitsUnion = ["apple", "2", true];
console.log(fruitsUnion);
// only allow to assign any value to fruit array
const fruitsAny = ["apple", "2", true, 5, { a: 30 }];
console.log(fruitsAny);
// function type which only allow to work with function
let myFunction;
myFunction = (a, b) => {
    return a + b;
};
console.log(myFunction(10, 20));
