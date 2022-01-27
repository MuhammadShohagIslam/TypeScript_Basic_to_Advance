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
const myFun = (object: {
    name: string;
    calcium: number;
    isAvailable: boolean;
}): void => {
    // this type annotation is very long, its to hard to see
    console.log(`My favourite food is ${object.name}`);
    console.log(`It has ${object.calcium} calcium`);
    console.log(`It is available: ${object.isAvailable ? "Yes" : "No"}`);
};

console.log(myFun(fruits));

// Fixing long annotation
/* 
    *** Create Interface ***
        => thorugh interface, we can be solve of the long annotation problem
        => When we want to create interface, we have to make sure every each element same type as a object
        => We can assign any type of data, as your wish.
        => TypeScript will iterate through all the properties
        of the interface and make sure define object has the
        properties with the same type.

*/
interface Fruits {
    name: string;
    calcium: number;
    isAvailable: boolean;
}
const myFun1 = ({ name, calcium, isAvailable }: Fruits): void => {
    console.log(`My favourite food is ${name}`);
    console.log(`It has ${calcium} calcium`);
    console.log(`It is available: ${isAvailable ? "Yes" : "No"}`);
};

console.log(myFun(fruits));

/*
 *** Syntax Arround interfaces ***
 */
// interface Vehicles {
//     name: string;
//     year: Date;
//     isBroken: boolean;
//     summary(): string;
// }
interface Fruits1 {
    name: string,
    calcium:number,
    isAvailable:boolean,
    summary(): string;
}
// we can use single interface to describe the shape or the different properties of very different objects.
interface Reportable {
    summary(): string;
}

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

const myFun2 = (object: Reportable): void => {
    console.log(object.summary());
};
console.log(myFun2(vehicle));


const myFun3 = (object: Fruits1): void => {
    console.log(object.summary());
};
console.log(myFun3(fruits1));

// we can use same interface, if both object has same property and value
const myFun4 = (object: Reportable): void => {
    console.log(object.summary());
};
console.log(myFun4(fruits1));


