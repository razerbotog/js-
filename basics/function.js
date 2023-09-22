

function myName () {
    console.log('a');
    console.log('r');
    console.log('i');
    console.log('f');
}
console.log(myName); //[Function: myName]
myName();

function addtwoNum(num1, num2){
    console.log(num1 + num2);
}
addtwoNum(); // NaN
addtwoNum(2, 4); // 6
addtwoNum(2, null); // 2
addtwoNum(2); // NaN

const result = addtwoNum(2, 4); // nothing to store
console.log("result:", result); // undefined

function addtwoNum1(num1, num2){
    return(num1 + num2);
    // return num1 + num2;/
    console.log("arif"); // won't execute after return; rule
}
const result1 = addtwoNum1(2, 4); // storing return value
console.log("result1:", result1); // 6

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage('Arif')); // Arif just logged in
console.log(loginUserMessage()); // undefined just logged in
console.log(loginUserMessage('')); //  just logged in

function loginUserMessage1(username){
    if(username === undefined){
        return `Please Enter your username`
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1()); //Please Enter your username
console.log(loginUserMessage1('arif1'));// arif1 just logged in

function loginUserMessage2(username){
    if(!username){
        return `Please Enter your username`
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2()); //Please Enter your username

console.log(typeof (!"xs")); // boolean
console.log(Boolean(!"xs")); // false
console.log(Boolean(! undefined)); // true
//Note
// js treat undefined value as false , defined value as true

function loginUserMessage3(username = "noname"){
    if(!username){
        return `Please Enter your username`
    }
    return `${username} just logged in`
}
console.log(loginUserMessage3()); // noname just logged in; default value
console.log(loginUserMessage3('Arif2')); // Arif2 just logged in ; default value got override