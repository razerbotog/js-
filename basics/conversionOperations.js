//converting to number data types
let score = "33";
let score1 = "33abc";
let score2 = null;
let score3 = "arif";
let score4 = true;
let score5 = undefined;

console.log(typeof(score));
console.log(typeof(score1));
console.log(typeof(score2));
console.log(typeof(score3));
console.log(typeof(score4));
console.log(typeof(score5));

let valueInScore = Number(score); //converting string to no.
let valueInScore1 = Number(score1); //converting string to no.
let valueInScore2 = Number(score2); //converting object to no.
let valueInScore3 = Number(score3); //converting string to no.
let valueInScore4 = Number(score4); //converting boolean to no.
let valueInScore5 = Number(score5); //converting undefined to no.

console.table([typeof(valueInScore), typeof(valueInScore1), typeof(valueInScore2), typeof(valueInScore3), typeof(valueInScore4), typeof(valueInScore5)]);
console.log(valueInScore1); // output is NaN
console.log(valueInScore2); // output is 0
console.log(valueInScore3); // output is NaN
console.log(valueInScore4); // output is 1
console.log(valueInScore5); // output is NaN


// Notes

/* Converting other data types to number data type. we will always get the data type after that conversion is number data type. But the value will be sometimes in number and sometimes in NaN. */



//converting to boolean data types
let isLoggedIn = 1;
let isLoggedIn2 = "";
let  booleanIsloggedIn = Boolean(isLoggedIn); //converting no. to boolean
let  booleanIsloggedIn2 = Boolean(isLoggedIn2); //converting no. to boolean
console.table([isLoggedIn, booleanIsloggedIn, isLoggedIn2, booleanIsloggedIn2]);
console.table([typeof(isLoggedIn), , typeof(isLoggedIn)]);

// notes
// false in empty string
// true; if we asssign some value

//converting to string data types
let randomNumber = 56;
let stringNumber = String(randomNumber);
console.table([randomNumber, stringNumber]);
console.table([typeof(randomNumber), typeof(stringNumber)]);