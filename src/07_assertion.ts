//  Type assertion is used when you are not sure what the external variable contains, but you know what the new variable type should be.
//  If the original variable returns a string and you have the type assertion as <number>, it will NOT convert the value's type to string.
//  In JSX, only "as" keyword must be used as it already uses angular bracket syntax for elements/components.

let code: any = 123;
let employeeCode1 = <number>code;
let employeeCode2 = code as number;
// console.log(typeof employeeCode1);
// console.log(typeof employeeCode2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// TYPE ASSERTION IN OBJECTS
interface Employee {
	name: string;
	code: number;
}

let employee = <Employee>{};
// console.log(employee); //  Empty object

employee.name = "John";
employee.code = 123;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
export {};
