// Array is a object data type
const Array = [0, 1, 2, 3, 4, 5, true, "arif"]; // can store multiple data types 

const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray[4]); // 4

// const myArray1 = new Array("0, 1, 2, 3, 4, 5");
// console.log(myArray1); // not working in node environment 

// Array methods

myArray.push(7, "arif", true); // appends new element
console.log(myArray); // [0, 1, 2, 3, 4, 5, 7, 'arif', true]

myArray.push("akhtar"); // appends new element
console.log(myArray); // [0, 1, 2, 3, 4, 5, 7, 'arif', true, 'akhtar']

myArray.pop() // removes the last element
console.log(myArray); // [0, 1, 2, 3, 4, 5, 7, 'arif']

myArray.unshift(80) // inserts new elements at the start of an array
console.log(myArray); // [80, 0, 1, 2, 3, 4, 5, 7, 'arif', true]

myArray.shift() //  removes the first element
console.log(myArray); // [0, 1, 2, 3, 4, 5, 7, 'arif', true]

console.log(myArray.includes(9)); // false; Determines whether an array includes a certain element

console.log(myArray.indexOf('arif')); // 7; Returns the index of the first occurrence of a value in an array
console.log(myArray.indexOf('akhtar')); // -1; if it is not present.
console.log(typeof(myArray.indexOf('akhtar'))) // number ; data type

const myArray1 = myArray.join() // A string used to separate one element of the array from the next in the resulting string
console.log(myArray1); // 0,1,2,3,4,5,7,arif,true
console.log(typeof myArray1); //string


//  *important slice and splice method with difference
console.log("A", myArray); // A [0,1,2,3,4,5,7,'arif',true]

console.log(myArray.slice(1, 5)); // [ 1, 2, 3, 4 ]; Returns a copy of a section of an array
console.log("B", myArray); // B [0,1,2,3,4,5,7,'arif',true]

console.log(myArray.splice(1,4));// The number of elements to remove.
console.log("C", myArray); // C [ 0, 5, 7, 'arif', true ]