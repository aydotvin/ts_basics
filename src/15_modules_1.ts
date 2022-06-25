/**
 * 1. The ts code is written in global scope by default. If we have multiple files in a project, the variables, functions, etc. written in one file are accessible in all the other files.
 * 2. Variables declared in one file can be accessed and modified in another file.
 * 3. Modules are used to create a local scope within the file. So, all variables, classes, functions, etc. that are declared in a module are not accessible outside the module.
 * 4. A module can be created using the keyword export and a module can be used in another module using the keyword import.
 * 5. Compile using --module
 */

const name = "john";
const logSomething = () => {
	console.log("something");
};

class User {
	name: string;

	constructor(_name: string) {
		this.name = _name;
	}

	greetUser() {
		return `Hello ${this.name}`;
	}
}

export { name, logSomething, User };
export default "this is a default export";
