//  There are three types of access modifiers in TypeScript: public, private and protected.

//  PUBLIC: By default, all members of a class in TypeScript are public. All the public members can be accessed anywhere without any restrictions.
class User1 {
	name: string;
	public username: string;

	constructor(name: string, username: string) {
		this.name = name;
		this.username = username;
	}
}

let u1 = new User1("vinay", "vp");

// console.log(u1);
// console.log(u1.username);

//  ==========================================================================

//  PRIVATE: The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class. Not accessible even in the sub classes.
class User2 {
	name: string;
	private uid: string;

	constructor(name: string) {
		this.name = name;
		this.uid = name + "_haha";
	}
}

class Agent extends User2 {
	agentId: number;
	constructor(name: string, agentId: number) {
		super(name);
		this.agentId = agentId;
	}

	// getUid() {
	//     return this.uid;    //  ERROR
	// }
}
let u2 = new User2("vinay");
// console.log(u2);
// console.log(u2.uid);    //  ERROR

//  ==========================================================================

//  PROTECTED: The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.
class User3 {
	name: string;
	protected uid: string;

	constructor(name: string) {
		this.name = name;
		this.uid = name + "_haha";
	}
}
class Agent3 extends User3 {
	agentId: number;
	constructor(name: string, agentId: number) {
		super(name);
		this.agentId = agentId;
	}

	getUid() {
		return this.uid;    //  Accessible in the sub class.
	}
}
let u3 = new Agent3("vinay3", 23);
// console.log(u3.uid);    //  ERROR
// console.log(u3.getUid());

//  ==========================================================================

export {};
