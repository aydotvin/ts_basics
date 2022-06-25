let name = "vinay"; //  infers this as string
let users = ["user1", "user2", "user3"]; //  infers this as array of string
let evenNumbers1 = [2, 4, 6, 8, 10]; //  infers this as array of number
let evenNumbers2 = [2, 4, 6, 8, 10, "18"]; //  infers this as array of (number | string)
let evenNumbers3 = [2, 4, 6, 8, 10, "18", false]; //  infers this as array of (number | string | boolean)

function getGreeting(name: string) {
	//  infers the return type as string
	return `hello ${name}`;
}

let greeting1: string = getGreeting("john1");
// let greeting2: number = getGreeting("john2"); //  ERROR

export {};
