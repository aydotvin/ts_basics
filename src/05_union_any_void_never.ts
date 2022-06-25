// UNION - when a variable can receive values of multiple data types, union is used.

let username: string | number = "";
username = "john";
username = 23;
// username = true;    //  ERROR
// console.log(username);

// ----------------------------------------------------------

// Unions can also be assigned to a type and that type can be used everywhere.

type Status = string | boolean | undefined;
let isDelivered: Status;
isDelivered = true;
// console.log(isDelivered);

type Username = string | number;
function greet(name: Username) {
	return `Hello ${name}`;
}
// console.log(greet("john"));
// console.log(greet(true));   //  ERROR

// ----------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// ANY - variable can take any value type.
let something: any = "Hello World!";
something = 23;
something = true;
// console.log(something);

let arr: any[] = ["John", 212, true];
arr.push("Smith");
// console.log(arr);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// VOID - this is equivalent to undefined. Usually used in functions that does not return anything. It says a variable is always undefined.
let student: void;
// student = "something";	ERROR

type s1 = void;

function logger(): s1 {
	console.log("hello");
}
// logger();

const logger2 = (): void => {
	console.log("hello2");
};
// logger2();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// NEVER - is used when a function either throws an error or it never ends.

let thisDoesNotHoldAnything: never;
// thisDoesNotHoldAnything = null;		//	ERROR
// thisDoesNotHoldAnything = undefined;	//	ERROR
// console.log(thisDoesNotHoldAnything);

function keepProcessing(): never {
	while (true) {
		console.log("It always does something and never ends.");
	}
}
// keepProcessing();

function throwError(errorMsg: string): never {
	throw new Error(errorMsg);
}
// throwError("something went wrong");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

export {};
