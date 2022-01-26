/*
 *** Type Annotation for Object ***
 */
const person = {
    myFullName: "Muhammad Jhohirul Islam Shohag",
    myAge: 24,
    like: {
        favfruits: "Date",
    },
    details(age: number): string {
        this.myAge = age;
        return `My name is ${this.myFullName}. My age is ${this.myAge}. My favourite fruits ${this.like.favfruits}`;
    },
};
console.log(person.details(23));

// const { myage }: { myage: number } = person;
const { myFullName, myAge }: { myFullName: string; myAge: number } = person;
const {
    like: { favfruits },
}: { like: { favfruits: string } } = person;

console.log(favfruits);
