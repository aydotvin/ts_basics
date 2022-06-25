//	Interface with properties and functions.
interface User {
	fname: string;
	lname: string;
	getFullName: (title: string) => string;
	getGreeting(greetText: string): string;
}

let user1: User = {
	fname: "john1",
	lname: "doe1",
	getFullName: function (title) {
		return `${title}. ${this.fname} ${this.lname}`;
	},
	getGreeting: function (text) {
		return `${text} ${this.getFullName("Mr")}`;
	},
};

// console.log(user1.getFullName("Mr"));
// console.log(user1.getGreeting("Morning"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Interface with properties
interface Credentials {
	username: string;
	password: string;
	[key: string]: any; // additional properties allowed. Always keep the value to "any".
	department?: string; // optional property.
	readonly uid: number; // cannot reassign this key to new value after initialising the object.
}
let cred1: Credentials = {
	username: "john",
	password: "23",
	additionalKey: "allowed",
	uid: 987,
};
cred1.username = "john2";
// cred1.uid = 123;	//	ERROR
// console.log(cred1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Interface as function type
interface StringFunction {
	(p1: string, p2: string): string;
}
interface NumberFunction {
	(p1: number, p2: number): number;
}

let strFunc: StringFunction = (p1, p2) => {
	return `${p1} ${p2}`;
};
// console.log(strFunc("join this and", "this"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Interface for arrays
interface StringArray {
	[index: string]: string;
}
let arr1: StringArray = {};
arr1["TS"] = "TypeScript";
arr1["JS"] = "JavaScript";
// console.log(arr1);

interface NumberArray {
	[index: number]: number | string;
}
let arr2: NumberArray = [1, 2, 3, 4, 5, "str"];
// console.log(arr2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Extending Interfaces
interface Person1 {
	fname: string;
	lname: string;
	age: number;
}
interface Employee1 extends Person1 {
	empId: number;
	[k: string]: any;
}

let e1: Employee1 = {
	fname: "john",
	lname: "doe",
	age: 23,
	empId: 98,
	place: "BLR",
};
// console.log(e1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Implementing an Interface
interface IEmployee {
	empCode: number;
	name: string;
	getSalary: (empCode: number) => number;
}
class Employee2 implements IEmployee {
	empCode: number;
	name: string;
	constructor(code: number, name: string) {
		this.empCode = code;
		this.name = name;
	}
	getSalary(something: any): number {
		console.log(something);
		return 100000 - this.empCode + 20000;
	}
}
let emp1 = new Employee2(1, "Steve");
// console.log(emp1);
// console.log(emp1.getSalary("hello"));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Interface cannot be used with primitive values..
// interface Status = string | number	//	This wont work.
// "interface" has to define a structure for an object. But "type" can be used for both primitives and object.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export {};
