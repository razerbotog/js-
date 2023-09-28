// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// <
// >
// <=
// >=
// ==
// !=
// ===
// !==
// 1 + 2 , the + sign is an operator and 1 is left side operand and 2 is right side operand.


// Nullish coalescing Operator (??)
let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10 ; first value chose
console.log(val1);

//ternary operator
//condition ? true : false
const cup = 100;
cup >= 100 ? console.log("Its right"):console.log("Its Wrong"); // Its right
cup <= 90 ? console.log("Its right"):console.log("Its Wrong"); //Its Wrong