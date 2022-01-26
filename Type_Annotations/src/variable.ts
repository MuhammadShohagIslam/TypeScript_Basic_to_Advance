/*
    *** Type Annotations ***
        => Code we add to tell TypeScript what type of value a variable will refer to.
        => We (developer) tell TypeScript the type.

    *** When to use ***
        => When we decide a variable on one line then initialize it later
        => When we want a variable to have a type that can't be inferred
        => When a function returns the 'any' type and we need to clarify the value.

*/

/*
 *** Annotation with Variable ***
 */

// string type annotation
let fullName: string = "Muhammad Jhohirul Islam Shohag";
console.log(fullName);

// number type annotation
let age: number = 24;
console.log(age);

// boolean type annotation
let isMarried: boolean = false;
console.log(isMarried);

// null type annotation
let isJob: null = null;

// undefined type annotation
let isIncomeSource: undefined = undefined;
console.log(isIncomeSource);

// array type annotation
const mobileCompany: string[] = ["Samsung", "Apple"];
console.log(mobileCompany);

const mobileSells: number[] = [120, 120];
console.log(mobileCompany);

const mobileIsGood: boolean[] = [true, true];
console.log(mobileCompany);

// build-in object type annotation
let now: Date = new Date();
console.log(now.getFullYear());

// class type annotation
class Car {} // class
let car: Car = new Car();

/*
 *** Object Literal Annotation ***
 */

// object literal type annotation
const fruits: {
    name: string;
    count: number;
} = {
    name: "Date", // we should excet name if want to assign value
    count: 100,
};
console.log(fruits.name);
console.log(fruits.count);

/*
 *** Annotation Around Functions ***
 */

// function type annotation
const myFunction: (i: number) => void = (i: number) => {
    console.log(i);
};

console.log(myFunction(10));

/*
 *** When use type annotation ***
 */
// when a function returns the 'any' type
let json = '{"a":10, "b":20}';

// let parseJson = JSON.parse(json); // it's returns 'any' type
let parseJson: {
    a: number;
    b: number;
} = JSON.parse(json);
console.log(parseJson);

// console.log(parseJson.c) // it is not work, beacuse we change json type
console.log(parseJson.a);

/*
    We decided a variable is on line and initialize later
*/
const ball = [1, 3, 4, 5];
let isball: boolean;

for (let i = 0; i < ball.length; i++) {
    if (ball[i] === 1) {
        isball = false;
    }
}

/*
    Variable whose type can not be inferred correctly
*/
const number = [1, -20, 30];
let numberAboveZero: number | boolean;

for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i];
    } else {
        numberAboveZero = false;
    }
}
