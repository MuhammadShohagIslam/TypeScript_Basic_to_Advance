"use strict";
/*
    *** Interfaces of TypeScript ***
        => Creates a new type, describing the property name
        and value types of an object.
        => The goal is interface --- define a new type

    *** General Strategy for Resuable Code in TS ***
        ==> Create functions that accept arguments that
        are typed with interfaces
        ==> Objects/Classes can decide to 'implement' a
        given interface to work with a function.
*/
// *** Fixing long annotation ***
// create a object
const fruits = {
    name: "Date",
    calcium: 39,
    isAvailable: true,
};
// create a function
const myFun = (object) => {
    // this type annotation is very long, its to hard to see
    console.log(`My favourite food is ${object.name}`);
    console.log(`It has ${object.calcium} calcium`);
    console.log(`It is available: ${object.isAvailable ? "Yes" : "No"}`);
};
console.log(myFun(fruits));
const myFun1 = ({ name, calcium, isAvailable }) => {
    console.log(`My favourite food is ${name}`);
    console.log(`It has ${calcium} calcium`);
    console.log(`It is available: ${isAvailable ? "Yes" : "No"}`);
};
console.log(myFun(fruits));
const vehicle = {
    name: "ABC",
    year: new Date(),
    isBroken: true,
    summary() {
        return `The old car name is ${this.name}`;
    },
};
const fruits1 = {
    name: "Olive",
    calcium: 39,
    isAvailable: true,
    summary() {
        return `My favourite fruits name is ${this.name}`;
    },
};
const myFun2 = (object) => {
    console.log(object.summary());
};
console.log(myFun2(vehicle));
const myFun3 = (object) => {
    console.log(object.summary());
};
console.log(myFun3(fruits1));
// we can use same interface, if both object has same property and value
const myFun4 = (object) => {
    console.log(object.summary());
};
console.log(myFun4(fruits1));
