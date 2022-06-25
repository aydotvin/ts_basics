// import * as everything from "./15_modules_1";
import x, { name, User as UserClass } from "./15_modules_1";

// console.log(everything); //  imports everything. The default is accessible under "default" property.
// console.log(x); //  default exported value.
// console.log(name);

let u1 = new UserClass("john");
// console.log(u1);
// console.log(u1.greetUser());
