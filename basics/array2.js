const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// by using push
console.log(marvel_heros.push(dc_heroes)); // 4; considering dc_heroes as 1 element and modify to that same array.

marvel_heros.push(dc_heroes);
console.log(marvel_heros); 
/* output is
 [
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  [ 'superman', 'flash', 'batman' ]
] */ 
console.log(marvel_heros[3][2]); // batman

//by using concat
const marvel_heros1 = ["thor", "ironman", "spiderman"];
const concatArr = marvel_heros1.concat(dc_heroes); // returns a new array without modifying any existing arrays. 
console.log(concatArr); //  [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// by using spread operator
const marvel_heros2 = ["thor", "ironman", "spiderman"];
const allHeroes = [...marvel_heros2, ...dc_heroes];
console.log(allHeroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// explaination of above method
/* 
This line of code is using the spread operator (...) to combine two arrays, marvel_heros2 and dc_heroes, into a single array called allHeroes.

Here's the breakdown:

...marvel_heros2: This spreads out all the elements in the marvel_heros2 array. Essentially, it takes each element from marvel_heros2 and adds them to the new array.

...dc_heroes: Similarly, this spreads out all the elements in the dc_heroes array.

Putting it together, const allHeroes = [...marvel_heros2, ...dc_heroes]; means that allHeroes will be an array that contains all the elements from marvel_heros2 followed by all the elements from dc_heroes.
*/

// by using flat
const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]];
const newArray1 = newArray.flat(Infinity);// Returns a new array with all sub-array elements
console.log(newArray1);// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ] 

console.log(Array.isArray("Hitesh")); // false
console.log(Array.isArray(newArray1)); // true
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ]