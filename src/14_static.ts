//  The static members of a class are accessed using the class name and dot notation, without creating an object e.g. <ClassName>.<StaticMember>.

class Circle {
	static pi: number = 3.14;

	static calculateArea(radius: number) {
		return this.pi * radius * radius;
	}
}
// console.log(Circle.pi); // returns 3.14
// console.log(Circle.calculateArea(5)); // returns 78.5

let x = new Circle();
// console.log(x.pi);	//	ERROR

//	=============================================================

//	static and non-static properties with same name is allowed.
class Circle2 {
	static pi = 3.14;
	pi = 3;

	static calculateArea(radius: number) {
		return this.pi * radius * radius;
	}

	calculateCircumference(radius: number): number {
		return 2 * Circle.pi * radius;
	}
}

console.log(Circle2.pi); // returns 3.14
let circleObj = new Circle2();
console.log(circleObj.pi); // returns 3

console.log(Circle.calculateArea(5));	// returns 78.5
console.log(circleObj.calculateCircumference(5));	// returns 31.4000000
// circleObj.calculateArea();	//	ERROR

export {};
