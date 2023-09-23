// Nesting in function
function one(){

    const username = "Arif"

    function two(){
        const website = "youtube"
        console.log("two:", username);
    }

    // console.log(website); website is not defined; bcoz it was defined in a local scope

    two(); // to execute this call , parent function should be call too
}
one();

if (true){
    const username = "Arif";
    if(username === "Arif"){
        const website = "Youtube2";
        console.log(website + username); // Youtube2Arif;website is defined in global scope 
    }
    // console.log(website + username); // website is not defined; website is defined in local scope
}

// NOTES
/* 
// closure (local & global variable)
Lobal variable;variables in global scope can be call from anywhere including inside a block

Local variable;variables in local scope cannot be call from anywhere ,they should be call inside that specific scope

 If you define a function directly in file, it will be bound to window object, i.e. it will be global. To make it "private", you have to create an object, which will contain these functions.
*/

// ------------Hoisting Intro----------
console.log(addOne(5)); // 6 ; works fine even this function is called before the function defined
function addOne(num){
return num + 1;
}
console.log(addOne(5)); // 6


// console.log(myFunc(5)); //Cannot access 'myFunc' before initialization; becoz its assigned in a variable cannot be accessed before declaration
const myFunc = function(num){
    return num + 2;
}
console.log(myFunc(5)); // 7