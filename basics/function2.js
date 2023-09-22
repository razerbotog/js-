//rest operator
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice1(1, 2, 3, 4, 5)); // [ 3, 4, 5 ]


// Object in function
const user = {
    name:"soap",
    price:"199"
}
function buyMessage(msg){
    return `you brought ${msg.name} in ${msg.price}`
}
console.log(buyMessage(user)); // you brought soap in 19
console.log(buyMessage({
    name:"soap2",
    price:"299"
})); // you brought soap2 in 299 ; passing object as arguments

// Array in function
const arr = [1,2,3,100]
function buyMessage1(msg){
    return `Buy ${msg[1]}, get ${msg[3]} free`;
}
console.log(buyMessage1(arr)); // Buy 2, get 100 free
console.log(buyMessage1([12,2,4,6,7])); // Buy 2, get 6 free; passing array as arguments