if(true) {
    console.log('This will execute bcoz is true'); //This will execute bcoz is true
}
if(false) {
    console.log("This won't execute bcoz is false"); // no otput
}

const isUserLoggedIn = true;

if (isUserLoggedIn == 1){
    console.log('isUserLoggedIn is equal to 1'); // isUserLoggedIn is equal to 1
}
if(2**2 == "4"){
    console.log("Its equal"); //Its equal
}

if(2**2 === "4"){
    console.log("Its equal"); //Its equal
} else {
    console.log("Not same data type"); // Its equal Not same data type
}

const temp = 41;

if (temp < "50"){
    console.log("Less than 50"); // Less than 50
}

const score = 200;
if (score > 100){
    const power = "fly"
    console.log(`User power: ${score}`) // User power: 200
    console.log(power); // fly
}
// console.log(power); // error ; power is not defined bcoz it was defined in local scope


// implicit
const balance = 1000;

if (balance > 1) console.log("Balance is greater") // Balance is greater

if (balance > 1) console.log("Balance is greater"),console.log("This is multiline implicit");
//output is 
// Balance is greater
// This is multiline implicit

if (balance < 500){
    console.log('Less than 500');
} else if(balance < 400){
    console.log('Less than 400');
} else if(balance < 300){
    console.log('Less than 300');
} else if(balance < 200){
    console.log('Less than 200');
} else{
    console.log('Less than 4000'); // Less than 4000
}

const userLoggedIn = true;
const debitCard = true;
const walletAmount = 200;
if (userLoggedIn && debitCard){
    console.log("&&: Allowed to buy courses") ; //&&: Allowed to buy courses
}
if (debitCard || walletAmount) {
    console.log("OR: Allowed to buy courses"); // OR: Allowed to buy courses
}