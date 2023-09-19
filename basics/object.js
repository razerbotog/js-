// singleton
// ----------Object.create()------

// ----------Object literals------
const jsUser = {};
console.table([jsUser, typeof(jsUser)]);// output is 'object';data type
console.log(jsUser); // {}

const mySym = Symbol("Key1");
console.log(typeof mySym); // symbol

const jsUser1 = {
    [mySym]: "mykey1", //at 1st defined mySym
    name:"Arif",
    1:"Akhtar",
    "full name" : "Arif Akhtar",
    "email": "email@google.com", 
    true:"boolean",
    boolean: true,
    arr: [1, 2, 3, 4],
    myfunction : function() {
        console.log("Hello, this is a function");
    }
};

console.log(jsUser1[mySym]); // mykey1
console.log(jsUser1.name); // Arif
console.log(jsUser1["name"]); // Arif ; another method to asses value using key
console.log(jsUser1[1]); // Akhtar
console.log(jsUser1["full name"]); // Arif Akhtar
console.log(jsUser1.email); // email@google.com
console.log(jsUser1[0]); // undefined
console.log(jsUser1.true); // boolean
console.log(jsUser1.boolean) // true
console.log(typeof(jsUser1.boolean)) // boolean
console.log(jsUser1.arr) // [ 1, 2, 3, 4 ]
console.log(jsUser1.myfunction) // [Function: myfunction]
jsUser1.myfunction(); // Hello, this is a function

 jsUser1.email = "newemail@google.com"; // assigned new value
// Object.freeze(jsUser1); // Prevents the modification of existing property
jsUser1.email = "newemail2@google2.com";
console.log(jsUser1); 
/*
Output is
{
  '1': 'Akhtar',
  name: 'Arif',
  'full name': 'Arif Akhtar',
  email: 'newemail@google.com',
  true: 'boolean',
  boolean: true,
  arr: [ 1, 2, 3, 4 ],
  myfunction: [Function: myfunction],
  [Symbol(Key1)]: 'mykey1'
}
*/

jsUser1.greeting = function(){
    console.log("hello js user");
}
jsUser1.greeting2 = myfunction2 = function(){
    console.log("hello js user2");
}
// console.log(jsUser.greeting());
console.log(jsUser1);
/*
output is 
{
  '1': 'Akhtar',
  name: 'Arif',
  'full name': 'Arif Akhtar',
  email: 'newemail2@google2.com',
  true: 'boolean',
  boolean: true,
  arr: [ 1, 2, 3, 4 ],
  myfunction: [Function: myfunction],
  greeting: [Function (anonymous)],
  greeting2: [Function: myfunction2],
  [Symbol(Key1)]: 'mykey1'
}
*/

jsUser1.greeting3 = myfunction3 = function(){
    console.log(`hello ${jsUser1["full name"]} user`)
} 
jsUser1.greeting4 = myfunction3 = function(){
    console.log(`hello ${this["full name"]} user`)
}
jsUser1.greeting3();// hello Arif Akhtar user
jsUser1.greeting4();// hello Arif Akhtar user