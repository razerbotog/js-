// syntax

// in array
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    console.log(i);
}

// in strings
const greetings = "Good Morning";
for (const i of greetings) {
    console.log(i);
}


// map object 
const map1 = new Map();
map1.set('IN', 'India')
map1.set('USA', 'United States of America')
map1.set('Fr', 'France')

console.log(map1);
console.log(map1.size); // 3

for(const [i, j] of map1){
    console.log(i,':-' , j);
}

// Object cannot iterable in this way
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for(const i of myObject){
//     console.log(i); 
// } // myObject is not iterable

// it can be done using for_in loop