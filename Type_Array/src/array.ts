/*
    *** Type Arrays ***
        => Arrays where each element is some consistent type of value
        => We have to avoid any type into the array
*/
// type annotation for array
// in the number[], we can only store number in this array
const myArray: number[] = [1, 3, 4, 5];
// myArray.push('a') // we can not, beacuse it is a number array

// two dimensional array
const twoDimensionalArray: number[][] = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
];
// twoDimensionalArray.push(1) //  we can not, beacuse it is two dimensional array
twoDimensionalArray.push([0, 3, 4, 3]); //
console.log(twoDimensionalArray);

/*
    *** Why do we Care ***
        => TS can do type inference when extracting values from an array.
        => TS can prevent us from adding incompatible values to the array.
        => We can get help with map, forEach, reducer, function
        => Flexible array can still contain multiple different types
*/

// TS can do type inference when extracting values from an array
const myArray1 = [1, 3, 4, 5, 6];
const one = myArray1[0];
console.log(one);

const myArray2 = ["1", "3", "4"];
const two = myArray2[0];
console.log(two);

// TS can prevent us from adding incompatible values to the array
const myArray3 = [10, 20, 30];
// myArray3.push("a"); // we can not, beacuse TS is preventing to push wrong way

myArray3.push(25); // we can, beacuse it is same type as the array type annotation

// we can get help with map, forEach, reducer function
const myArray4 = [1, 3, 4, 5, 6];

// we use output variable beacuse 'map' function return new array
const output = myArray4.map((value: number, index: number): number => {
    // console.log(value * 2, index);
    return value;
});
console.log(myArray4);

// type annotation for 'forEach' function
const output1 = myArray4.forEach((value: number): void => {
    console.log(value * 2);
    // return value*2
});
console.log(output1);

// type annotation for 'reduce' function
const output2 = myArray4.reduce((value: number, another: number): number => {
    console.log(value * another);
    return value * another;
});
console.log(output2);

// Flexible array can still contain multiple different types
type obj = {
    a: number;
};
const flexibleArray: (string | number | Date | boolean | obj)[] = [
    "a",
    2,
    4,
    new Date(),
    true,
    { a: 1 },
];
