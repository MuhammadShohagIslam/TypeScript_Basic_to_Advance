"use strict";
/*
 *** Type Annotation for Object ***
 */
const person = {
    myFullName: "Muhammad Jhohirul Islam Shohag",
    myAge: 24,
    like: {
        favfruits: "Date",
    },
    details(age) {
        this.myAge = age;
        return `My name is ${this.myFullName}. My age is ${this.myAge}. My favourite fruits ${this.like.favfruits}`;
    },
};
console.log(person.details(23));
// const { myage }: { myage: number } = person;
const { myFullName, myAge } = person;
const { like: { favfruits }, } = person;
console.log(favfruits);
