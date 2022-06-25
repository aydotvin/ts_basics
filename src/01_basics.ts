// Types (pascal name case)
type Car =
	| "Yamaha"
	| "Honda"
	| {
			make: "Yamaha" | "Honda";
	  };

let sty: Car = {
	make: "Honda",
};

type Student = {
	name: string;
	roll: number;
	grade: number;
};
let s1: Student = {
	name: "john1",
	roll: 23,
	// roll: "23",	//	ERROR
	grade: 12,
};
// console.log(s1);

// ++++++++++++++++++++++++++++++++++

export { s1 };
