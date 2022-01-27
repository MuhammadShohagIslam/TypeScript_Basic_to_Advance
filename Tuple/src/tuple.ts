/*
    *** Tuple of TypeScript ***
        => Array-like structure where each element represents
         some property of a record.
         => represent one specific property about some record.
         => Tuple usually contains multiple different properties to describe one single thing.
         => They are a tuple that represents a very specific record inside of application
    *** Why Typle ***
        => If we are going to work with CSV file, tuple is good choice
    
    Note that: If we want to represent some meanigful data, we 
    can not use tuple beacuse it's really hard to for engineer 
    to catch whats going on.
*/
// create a object
const fruits = {
    name: "Date",
    calcium: 39,
    isAvailable: true,
};

// create tuple to the above fruits object
// "date"=> String representing the color
// 39 => Number representing the calcium
// true => Boolean representing the isAvailable
const myTuple = ["Date", 39, true];
// myTuple[0] = 40 // we lost the value
// myTuple[1]= true // we lost the value

// type annotation for tuple
const myTuple1: [string, number, boolean] = ["Date", 39, true];
// myTuple1[0] = 30 // we can not, beacuse type 'number' is not assignable to type 'string'.
// myTuple1[0] = 'Date' // we can beacuse type 'string' is assignable to type 'string'

/*
 *** Use of Type Alias ***
 */
// type alias beacuse it is done code reusable
type Fruits = [string, number, boolean];

// they are a tuple that represents a very specific record inside of application
const myTuple2: Fruits = ["Date", 39, true];
const myTuple3: Fruits = ["Olive", 88, true];
