//  Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
//  An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.
//  A class which extends an abstract class MUST call super() in its constructor.

abstract class Person {
	name: string;
	age: number;
	//  Abstract property.
	abstract rank: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}

	//  Abstract method.
	abstract setName(newName: string): void;
}

class Agent extends Person {
	skills: string[];
    //  Abstract property declared in the extending class.
	rank: number;

	constructor(name: string, age: number, skills: string[]) {
		super(name, age);
		this.skills = skills;
		this.rank = 99;
	}

	getSkills() {
		return this.skills;
	}

	//  Abstract method defined in the extending class.
	setName(newName: string): void {
		console.log("setting new name");
		this.name = newName;
	}
}

let agent = new Agent("a1", 23, ["html", "css", "js"]);
// let joe = new Person("joe", 23); //  ERROR - cannot create an instance of an abstract class.

console.log(agent);
agent.setName("agent47");
console.log(agent.getName());

export {};
