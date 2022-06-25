function getArray1(items: any[]): any[] {
	return new Array().concat(items);
}

let myNumArr1 = getArray1([100, 200, 300]);
let myStrArr1 = getArray1(["Hello", "World"]);

myNumArr1.push(400); // OK
myStrArr1.push("Hello TypeScript"); // OK

myNumArr1.push("Hi"); // OK
myStrArr1.push(500); // OK

// console.log(myNumArr1); // [100, 200, 300, 400, "Hi"]
// console.log(myStrArr1); // ["Hello", "World", "Hello TypeScript", 500]

/**
 * 1. In the above example, the getArray() function accepts an array of type any. It creates a new array of type any, concats items to it and returns the new array.
 * 2. Since we have used type any for our arguments, we can pass any type of array to the function and any item type to push to the array.
 * 3. This allows pushing numeric element to string array and string element to number array.
 * 4. Generics uses the type variable <T>, a special kind of variable that denotes types. The type variable remembers the type that the user provides and works with that particular type only. This is called preserving the type information.
 * 5. Add <T> while returning will makes sure the returned value will have a defined type and makes sure pushing a different type element will show error.
 */

function getArray2<T>(items: T[]): T[] {
	return new Array<T>().concat(items);
}

let myNumArr2 = getArray2<number>([100, 200, 300]);
let myStrArr2 = getArray2<string>(["Hello", "World"]);

myNumArr2.push(400); // OK
myStrArr2.push("Hello TypeScript"); // OK

// myNumArr2.push("Hi");    // Compiler Error
// myStrArr2.push(500);     // Compiler Error

/**
 * 1. The generic function can also be called without the type. In this case, the type will be asserted from the array elements.
 */

//  ======================================================

//  Multiple Type Variables
let myNumArr3 = getArray2([100, 200, 300]); // OK
let myStrArr3 = getArray2(["Hello", "World"]); // OK

function displayType1<T, U>(id: T, name: U): void {
	console.log(typeof id + ", " + typeof name);
}
displayType1<number, string>(1, "Steve"); // number, string

//  ======================================================

//  Generic type can also be used with other non-generic types.
function displayType2<T>(id: T, name: string): void {
	console.log(typeof id + ", " + typeof name);
}
displayType2<number>(1, "Steve"); // number, string

//  ======================================================

//  GENERIC INTERFACE - https://www.tutorialsteacher.com/typescript/typescript-generic-interface
//  GENERIC CLASS - https://www.tutorialsteacher.com/typescript/typescript-generic-class
//  ======================================================
