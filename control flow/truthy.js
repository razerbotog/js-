const userEmail = "Arif@google.com"
if(userEmail){
    console.log('Got user email'); // Got user email
} else {
    console.log("Don't have user email");
}

if(!userEmail){
    console.log('Got user email');
} else {
    console.log("Don't have user email"); // Don't have user email
}

const userEmail1 = ""

if(userEmail1){
    console.log('Got user email');
} else {
    console.log("Don't have user email"); // Don't have user email
}
if(!userEmail1){
    console.log('Got user email'); // Got user email
} else {
    console.log("Don't have user email");
}

// js consider some value falsy value
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// js consider some value truthy value
//truthy value
// "0", "false", " ", [], {}, function(){}

console.log(userEmail1.length); //  0
if(userEmail1 == false){
    console.log('userEmail1 is empty');  // userEmail1 is empty
}

const emptyObj = {}
console.log(Object.keys(emptyObj).length) // 0
if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty"); //Object is empty
}
