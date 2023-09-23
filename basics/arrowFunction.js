// how 'this' works in regular/normal function
function tea() {
    let username = "Arif"
    console.log(this); // output will be global object contains data about node
    /* more explaination about this 
    If a function is called in the global context (i.e., not within any object or specific context), this will refer to the global object, which is window in a browser environment.
    */
    console.log(this.username); // undefined; this only refer variable if its exist in same scope after get called
}
// username = "Arif"; // Arif;  defined in same scope so its returning the value for regular function
tea()

// how 'this' works in ARRROW function
const tea1 = () => {
    let username = "Arif"
    console.log(this);// {}
    console.log(this.username);// undefined
}
username = "Arif2";//undefined; wont work even it is defined in same scope for arrow function
/* more explaination of using 'this' in arrow function

This is because arrow functions do not have their own this context. They inherit the this value from their enclosing (or lexical) context, which in this case is likely the global object (like window in a browser).

*/
tea1();

const addTWo = (num1, num2) =>{
    return (num1 + num2)
}
console.log(addTWo(4, 5)); // 9

// implicit return
const addTWo1 = (num1, num2) => num1 + num2
console.log(addTWo1(4, 5)); // 9

const addTWo2 = (num1, num2) => (num1 + num2)
console.log(addTWo2(4, 5)); // 9

const addTWo3 = num1 => (num1);
console.log(addTWo3(9)); // 9 ; can be ignore brackets if parenthesis is only one

const addTWo4 = num1 => ({username : "Arif"});
console.log(addTWo4())// { username: 'Arif' }

const addTWo5 = num1 => ({username : "Arif" + num1,});// to return object should be use bracket '()'
console.log(addTWo5(3)) // { username: 'Arif3' }