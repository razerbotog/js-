//primitive
// 7 types: string,number,boolean,null,undefined,symbol,bigInt

// reference (non-primitive)
// 3 types: array, objects, functions
const array = ["Arif", "Arif2", "Arif3",] // array

const object = {
    name:"arif",
    height:6,
    favouriteColor:"blue"
} // object

const myFunction = function() {
    console.log("Hello");
}

myFunction();



const person = () => {
    console.log("this is  a function");
} //arrow function
person();

/* memory in js */
// stack : use by primitive data types (the original value doesn't change but we change the copied version)
// heap: use by reference (non-primitive) data types (the original value can be changed bcoz it use original version)

// ------
let myDomain = "domain.com";

let myAnotherDomain = myDomain;
console.log(myAnotherDomain);

myAnotherDomain = "domain1.com"
console.table([myDomain, myAnotherDomain]) // only changed to which we applied
// ------

let userone = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}
let usertwo = userone;
usertwo.email = "usertwo@gmail.com";

console.table([userone.email, usertwo.email]); //both email got changed