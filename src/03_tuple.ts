//  TUPLE - An array of multiple data types that are pre defined. Defining a structure for an array.
let user1: [string, number, boolean] = ["john", 23, true];
// console.log("user", user1);

let user2: [string, number, boolean];
user2 = ["john", 23, true];
// console.log("user2", user2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// CREATING A TUPLE TYPE
type User = [string, number, boolean];

let user3: User = ["john", 23, true];
// console.log(user3);
// let user4: User = ["john", "23", true]; //  ERROR
let user5: User;
// user5 =  ["john", 23, "true"];  //  ERROR
user5 = ["john", 23, true];
// console.log(user5);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//  OPTIONAL
type Person = [string?, number?, boolean?];
//  By adding question marks in the type declaration, they are set as optional so they can be added at a later time.
//  But it breaks the type check when using .push().

let jane: Person = [];
jane.push("jane");
// jane[1] = "23";	//	This gives type error
// jane.push("23");	//	This does not give the type error
jane.push(true);
// console.log(jane);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//  TUPLE ARRAY
let employees: Person[] = [
	["john1", 22, true],
	["john2", 23, true],
];
// let employees: Person[] = [["john1", 22, true], ["john2", "23", true]]; //  ERROR
employees.push(["john3", 24, true]);
employees[employees.length] = ["jane1", 24, true];
// employees[employees.length] = ["jane2", 24, "true"];    //  ERROR
// employees.push(["john4", "25", true]);  //  ERROR
// console.log("employees", employees);

export {};
