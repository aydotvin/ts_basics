//  TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.
//  Read-only members can be accessed outside the class, but their value cannot be changed.
//  Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.

class User1 {
	name: string;
	readonly uid: string;
	//  Can be initialised here or in constructor.
	//  readonly initialisation.
	readonly something: string = "hello";

	constructor(name: string) {
		this.name = name;
		//  readonly initialisation.
		this.uid = "987";
	}

	getSomething() {
		return this.something;
	}

	// changeUid() {
	// 	this.uid = '654';    //  ERROR
	// }
}
let u1 = new User1("vinay1");
// console.log(u1.uid);
// console.log(u1.getSomething());

//  =================================================

//  readonly in interface.
//  For readonly, we can assign a value at the time of creating an object but not after wards.
interface IPerson {
	readonly username: string;
	name: string;
}
class Employee implements IPerson {
	username: string;
	name: string;

	constructor(name: string) {
		this.name = name;
		this.username = name + "_u1";
	}
}
let e1: IPerson = new Employee("vinay");
// console.log(e1);
// e1.username = "new"; //  ERROR

//  =================================================

//  Readonly type
interface IEmployee {
	empCode: number;
	empName: string;
}

let emp1: Readonly<IEmployee> = {
	empCode: 1,
	empName: "Steve",
};

// emp1.empCode = 100;     // Compiler Error: Cannot change readonly 'empCode'
// emp1.empName = "Bill";  // Compiler Error: Cannot change readonly 'empName'

let emp2: IEmployee = {
	empCode: 1,
	empName: "Steve",
};

emp2.empCode = 100; // OK
emp2.empName = "Bill"; // OK

//  =================================================

export {};
