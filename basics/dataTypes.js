"use strict"; //treat all js code as a newer js version
// alert(3 + 4); //wont work, we are using node js environment , not browser

let name = "arif" //string
let place = "" //string
let age = 22 //number
let isLoggedIn = false //boolean
let x = BigInt("123456789012345678901234567890"); //BigInt
let y = null //standalone value ; it means empty only empty
let z; // undefined

const sym1 = Symbol(); //symbol //that's guaranteed to be unique
const sym2 = Symbol("foo"); //symbol //that's guaranteed to be unique

const person = {firstName:"John", lastName:"Doe"}; // Object

const cars = ["Saab", "Volvo", "BMW"]; // Array object


const date = new Date("2022-03-25"); // Date object

console.log(typeof(place));
console.log(typeof(sym1));
console.log(typeof(cars));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));