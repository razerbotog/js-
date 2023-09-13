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