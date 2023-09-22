let a = "b";
const a1 = "b1"
var a3 = "b3"
console.table([a, a1, a3])

var a6 = 300;
let a8 = "b8";

if(true){
    console.log(a, a1, a3); // b b1 b3 ; all variable can be access it is not defined inside a {}scope
    let a4 = "b";
    const a5 = "b1"
    var a6 = "b3"
    a7 = "b4"
    let a8 = "b81"; 
}
// console.log(a4); // a4 is not defined
// console.log(a5); // a5 is not defined
console.log(a6); // b3; a6 can be accessed even if it is inside a scope
console.log(a7); // b4; a7 can be accessed even if it is inside a scope
console.log(a8); // b8; 
//NOTES
/*
scope inside is called local scope as well as outside called global scope
globalVariable is accessible both inside and outside
localVariable is only accessible  inside
*/