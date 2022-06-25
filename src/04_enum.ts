/**
 * -    Enums are a collection of related values that can be numeric or string values.
 * -    Basically an object with key value pairs that are related to eachother.
 *
 */

// NUMERIC ENUM - enum values are initialised with numbers
// Value starts from 0 and increments by 1.
enum PrintMedia1 {
	Newspaper,
	Newsletter,
	Magazine,
	Book,
}
// console.log(PrintMedia1);
// This will create the following object.
// {
//     '0': 'Newspaper',
//     '1': 'Newsletter',
//     '2': 'Magazine',
//     '3': 'Book',
//     Newspaper: 0,
//     Newsletter: 1,
//     Magazine: 2,
//     Book: 3
// }

// ----------------------------------------------------------

// The first value can be changed to any number and the next values will be incremented by 1.
enum PrintMedia2 {
	Newspaper = 67,
	Newsletter,
	Magazine,
	Book,
}
// console.log(PrintMedia2);
// This will create the following object.
// {
//     '67': 'Newspaper',
//     '68': 'Newsletter',
//     '69': 'Magazine',
//     '70': 'Book',
//     Newspaper: 67,
//     Newsletter: 68,
//     Magazine: 69,
//     Book: 70
// }

// ----------------------------------------------------------

// Custom values can be assigned to all the enum members.
enum PrintMedia3 {
	Newspaper = 21,
	Newsletter = 76,
	Magazine = 45,
	Book = 19,
}
// console.log(PrintMedia3);
// This will create the following object.
// {
//     '19': 'Book',
//     '21': 'Newspaper',
//     '45': 'Magazine',
//     '76': 'Newsletter',
//     Newspaper: 21,
//     Newsletter: 76,
//     Magazine: 45,
//     Book: 19
// }

// ----------------------------------------------------------

// COMPUTED ENUMS
// Enum values can be computed based on previous enum member values.
enum PrintMedia4 {
	Newspaper = 21,
	Newsletter = getValue4("newsletter"),
	Magazine = Newsletter * 2,
	Book = 19,
}

function getValue4(mediaType: string) {
	if (mediaType == "newsletter") {
		return 31;
	}
	return 0; //  A number HAS to be returned by the computing method.
}
// console.log(PrintMedia4);
// This will create the following object.
// {
//     '19': 'Book',
//     '21': 'Newspaper',
//     '31': 'Newsletter',
//     '45': 'Magazine',
//     Newspaper: 21,
//     Newsletter: 31,
//     Magazine: 45,
//     Book: 19
// }

// ----------------------------------------------------------

// NOTE: Uninitiated enum member must come in the begining or after other initialised member with numeric constant.
enum PrintMedia5 {
	Newspape, //  Valid - coming in the begining.
	Newsletter = getValue4("newsletter"),
	Magazine = 45,
	Book, //  Valid - coming after other initialised member.
}
// console.log(PrintMedia5);
// This will create the following object.
// {
//     '0': 'Newspape',
//     '31': 'Newsletter',
//     '45': 'Magazine',
//     '46': 'Book',
//     Newspape: 0,
//     Newsletter: 31,
//     Magazine: 45,
//     Book: 46
// }

enum PrintMedia6 {
	Newspape, //  Valid - coming in the begining.
	Newsletter = getValue4("newsletter"),
	// Book,       //  Not Valid - coming after a non initialised member.
	Magazine = 45,
}
// console.log(PrintMedia6);
// This will create the following object.
// {
//     '0': 'Newspape',
//     '31': 'Newsletter',
//     '45': 'Magazine',
//     Newspape: 0,
//     Newsletter: 31,
//     Book: undefined,
//     undefined: 'Book',
//     Magazine: 45
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// STRING ENUM - enum values are initialized with string literals
// -   All the string enums must be initialised with a string value

enum PrintMedia7 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// console.log(PrintMedia7);
// This will create the following object.
// {
//     Newspaper: 'NEWSPAPER',
//     Newsletter: 'NEWSLETTER',
//     Magazine: 'MAGAZINE',
//     Book: 'BOOK'
// }

// ----------------------------------------------------------

/**
 * - Uninitiated enum member must come in the begining or has to be initialised with string literal.
 * - Uninitiated enum member among string enums will create a HETEROGENEOUS ENUM.
 */
enum PrintMedia8 {
    Newspaper,
    Newsletter,
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// console.log(PrintMedia8);
// This will create the following object.
// {
//     '0': 'Newspaper',
//     '1': 'Newsletter',
//     Newspaper: 0,
//     Newsletter: 1,
//     Magazine: 'MAGAZINE',
//     Book: 'BOOK'
// }

// enum PrintMedia9 {
//     Newspaper = "NEWSPAPER",
//     Newsletter, //  NOT valid as NEWSPAPER cannot be incremented.
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }

// ----------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// HETEROGENEOUS ENUM - mixture of string and numeric enums.
enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}
// console.log(Status);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// REVERSE MAPPING
// -   Accessing enums using their values
// -   This is only supported for enums with numeric values
enum PrintMedia10 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
// console.log(PrintMedia10["Newsletter"]);    //  2
// console.log(PrintMedia10[3]);               //  Magazine

// ----------------------------------------------------------

export {};
