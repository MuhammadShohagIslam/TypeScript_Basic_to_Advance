/*
    *** Type Inference ***
        => TypeScript tries to figure out what type of value a variable refer to.
        => It guesses the type

        -- Varable Declaration ---             --- Varable initialization---
                const color                      =    'Green'
            ===> If declaration and initialization are on the same line, TypeScript will figure out the type of 'color' for us.
    *** When to use ***
        => Always
*/
// string type inference
let firstName = "Muhammad"; // when we hover your mouse on the varable we can see typescript figure out string inference

// number type inference
let a = 10;
console.log(a);

// boolean type inference
let isGood = true;
console.log(isGood);

// array type inference
let b = [1, 3, 4];
console.log(b);

// object literal type inference
let myObject = {
    a: 10,
};
console.log(myObject);

// build in object type inference
let today = new Date();
console.log(today.toLocaleDateString());

// class type inference
class Mobile {}
let mobile = new Mobile();
console.log(mobile);

// function type inference
let isFunction = (a: string) => {
    console.log(a);
};
console.log(isFunction("Yes, It is function"));
