/*
    *** Type Annotation for Funnction ***
        => Code we add to tell TypeScript what type of arguments a function will
         receive and what type of values it will return
         => Every time we have to use type annotation to the function arguments
         => No type inference for arguments
         => Type inference works out output, but we won't use it.

    *** Type Inference for Functions ***
        => Typescript tries to figure out what type of value a function will return

*/
// type annotation for function
const add = (a: number, b: number) => {
    return a + b;
};
console.log(add(10, 30));

// type annotation for name function
function nameFunction(a: number, b: number): number {
    return a + b;
}
console.log(nameFunction(10, 30));

// type annotation for anonymous function
const anonymousFunction = function (a: number, b: number): number {
    return a + b;
};

console.log(nameFunction(10, 30));

/*
    Void: function can not return anything at all.
*/
const substract = (a: number, b: number): void => {
    a - b; // we we hover through mouse on the substract function we can see, it return void
    // return a - b; // Type 'number' is not assignable to type 'void
}; // that is why use type annotation
console.log(substract(10, 30));

/*
    Never: Never means that we are never going to actually reach the end of this function

*/
const throwError = (message: string): never => {
    throw new Error(message); // it return a error without returning any value
};

// if we want to return both, we have to this way
const throwError1 = (message: string): string => {
    if (!message) {
        throw new Error(message); // it return a error without returning any value
    }
    return message;
};

/*
 *** Destruncting With Annotation ***
 */
const weatherObj = {
    date: new Date(),
    weather: "Cold",
};

// without destruncting function argument
const destrunctingFun = (weatherObj: { date: Date; weather: string }):void => {
    console.log(weatherObj);
};
console.log(destrunctingFun(weatherObj));

// with destruncting
const destrunctingFun1 = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): string=> {
    return `Today date is ${date} and weather is ${weather}`;
};
console.log(destrunctingFun1(weatherObj));



