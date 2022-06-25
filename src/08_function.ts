//	Accepts two params of type number and returns a value of type string.
function addNumbers(a: number, b: number): string {
	return (a + b).toString();
}
let sum = addNumbers(1, 3);
// console.log(sum);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Accepts one param of type string and logs that param. No explicit return, so returns undefined so the return type is void.
//  If nothing is returned, the type can be "void", "any" or no type at all.
function greetUser(user: string): void {
	console.log(`Hello ${user}`);
}

//	+++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Anonymous function. Accepts three params, second one has a default value and third one is optional(? next to the param). Returns a value of type string.
let getColor = (a: string, b: number = 3, c?: boolean): string => {
	return "#cecece";
};

let finalColor = getColor("");

//	+++++++++++++++++++++++++++++++++++++++++++++++++++++

//	When the default parameters precede required parameters in a function, they can be called by passing undefined.
function Greet(greeting: string = "Hello", name: string): string {
	return greeting + " " + name + "!";
}
Greet(undefined, "Steve"); //returns "Hello Steve!"
Greet("Hi", "Steve"); //returns "Hi Steve!".
Greet(undefined, "Bill"); //returns "Hello Bill!"

//	+++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Function overloading.
//	Multiple function declarations with same number of params and different types.
//	One function implementation with "any" as the type.

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
	return a + b;
}

// console.log(add("Hello ", "Steve"));
// console.log(add(10, 20));

//	+++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Rest params.
//	Rest params should come after all the other params.
function addStuff(num1: number, ...nos: number[]) {
	// console.log(num1);	//	first number.
	// console.log(nos); 	//	array containing remaining numbers.
	return num1 + nos.reduce((acc, n) => acc + n, 0);
}

console.log(addStuff(1, 2, 3, 4, 5));
console.log(addStuff(1));

//	+++++++++++++++++++++++++++++++++++++++++++++++++++++
