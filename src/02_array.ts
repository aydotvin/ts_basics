// SQUARE BRACKET DECLARATION
let ages1: number[] = [];
ages1.push(23);
// age.push("24"); //  ERROR
ages1[ages1.length] = 25;
// console.log(ages1);

let ages2: number[]; //  ages2 is undefined here, so .push and bracket notation assignment won't work until the array is initialised.
ages2 = [99, 98, 97];
// console.log(ages2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Array typpe
type StrArr = (string | number)[];
let arr2: StrArr = [2, 3, 4, 5, "str"];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// GENERIC ARRAY TYPE DECLARATION
let fruits: Array<string> = ["orange", "mango", "pineapple"];
// let fruits: Array<string> = ["orange", "mango", "pineapple", 98];   //  ERROR
// console.log("fruits", fruits);

let userIds: Array<number>; //  userIds is undefined here.
// userIds.push(100);  //  This won't work. Cannot directly use .push or use bracket notation to assign values.
userIds = [99, 98, 97];
// userIds = [99, 98, 97, "string here"];  //  ERROR
// console.log("userIds", userIds);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// MULTI TYPE ARRAY
let extraInfo1: (string | number)[] = ["india", "ka", 25];
// let extraInfo1: (string | number)[] = ["india", "ka", 25, true]; //  ERROR
// console.log("extraInfo1", extraInfo1);

let extraInfo2: (string | number)[];
extraInfo2 = ["john", 23];
// extraInfo2 = ["john", 23, true];  //  ERROR
// extraInfo2.push(true);    //  ERROR
// console.log("extraInfo2", extraInfo2);

let extraInfo3: Array<string | boolean>;
extraInfo3 = ["john", true];
// extraInfo3 = ['john', 23, true];    //  ERROR
// console.log(extraInfo3);

let extraInfo4: Array<string | boolean> = ["john", true];
// extraInfo4 = ['john', 23, true];    //  ERROR
// console.log(extraInfo4);

export {};
