//  A class can contain constructor, properties and methods.
//  The TypeScript compiler will convert the above class to the JavaScript code using closure.
//  It is not necessary for a class to have a constructor.

//  Sample class.
class Employee {
	empCode: number;
	empName: string;

	constructor(code: number, name: string) {
		this.empName = name;
		this.empCode = code;
	}

	getSalary(): number {
		return 10000;
	}
}
let x = new Employee(23, "john");
// console.log(x);
// console.log(x.getSalary());

//  ==========================================================

//  Inheritance:
class Person1 {
	name: string;
	something: string;

	constructor(name: string) {
		this.name = name;
		this.something = "okay";
	}

	getName(): string {
		return this.name;
	}

	expandAndSetName(): string {
		let newName = this.name.split("").join(" ");
		this.name = newName;
		return newName;
	}
}

class SuperHero extends Person1 {
	secretName: string;
	powerLevel: number;

	constructor(name: string, secretName: string, powerLevel: number) {
		super(name);
		this.secretName = secretName;
		this.powerLevel = powerLevel;
	}

    //  Method Overriding
	getName(): string {
		return `${this.name} San!`;
	}
}

let s1 = new SuperHero("john", "j1", 23);
// console.log(s1);
// console.log(s1.getName());
// console.log(s1.expandAndSetName());
// console.log(s1.getName());

//  ==========================================================

//  Class Implements Interface:
//  Two interfaces with possible different methods. While creating a new object of class, the methods accessible to the instances depend on the interface type that is assigned to the object variable.
interface IAdmin {
	name: string;
	getEmail(): string;
	setEmail(newEmail: string): string;
}

interface IAgent {
	name: string;
	getEmail(): string;
}

class User implements IAdmin, IAgent {
	name: string;
	email: string;

	constructor(name: string) {
		this.name = name;
		this.email = `${name}@gmail.com`;
	}

	getEmail() {
		return this.email;
	}

	setEmail(newEmail: string): string {
		this.email = newEmail;
		return this.email;
	}
}

let user1: IAgent = new User("john1");
// console.log(user1);
// console.log(user1.getEmail());
// // console.log(user1.setEmail("j1@gmail.com")); //  ERROR

let user2: IAdmin = new User("john2");
// console.log(user2);
// console.log(user2.getEmail());
// console.log(user2.setEmail("j2@gmail.com"));
// console.log(user2.getEmail());

//  ==========================================================

//  Interface extends Class
// class Person2 {
// 	name: string;
// 	age: number;
// }

// interface IEmployee extends Person2 {
// 	role: string;
// }

// let p2: IEmployee = { name: "john", age: 23, role: "dev" };
// // console.log(p2);

//  ==========================================================

export {};
