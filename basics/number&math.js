const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

const toString = balance.toString();
console.log(typeof(toString));
console.log(toString.length);
console.log(toString.concat("654"));

console.log(balance.toFixed(2));

const newNumber = 34.8756;
console.log(newNumber.toPrecision(3)); // 34.9
console.log(newNumber.toPrecision(2)); // 35

const newNumber1 = 34.345;
console.log(newNumber1.toPrecision(2)); // 34

const newNumber2 = 3445.3458;
console.log(newNumber2.toPrecision(2)); // 3.4e+3

const num1 = 10000000000;
console.log(num1.toLocaleString()); // 10,000,000,000
console.log(num1.toLocaleString("en-IN")); // 10,00,00,00,000


// -------------Math Object--------------
// The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 ;retuns positive no. only
console.log(Math.round(40.98)); // 41 ;retuns round figure value
console.log(Math.ceil(40.98)); // 41 ; retuns highest value
console.log(Math.floor(40.98)); // 40 ;retuns lowest value
console.log(Math.min(40.98, 41.98, 42.98, 43.98)); // 40.98;retuns  minimum value
console.log(Math.max(40.98, 41.98, 42.98, 43.98)); // 43.98;retuns  maximum value

console.log(Math.random()); // returns random no.
console.log((Math.random() * 5) + 1); // returns round no. greater than 1
console.log(Math.floor((Math.random() * 5) + 1));  // returns round no. with floor method

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min));// this syntax returns a random no. between min and max value.