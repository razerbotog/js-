function SetUsername(username){
    this.username = username;
    console.log("callled");
}

function CreateAccount(username, email, password){
    SetUsername(username) // calling with own context 
    SetUsername.call(this, username); //context set to the current instance of CreateAccount. 
    this.email = email;
    this.password = password
    // return console.log(this); // returns the newly created object.
}

const user1 = new CreateAccount("Arif", "arif@gmail.com",  "123456"); //The new keyword creates a new object, sets its prototype to the constructor's prototype, executes the constructor function with the specified arguments, and returns the newly created object.
console.log(user1)

// now with normal function
function callme(name){
    console.log(name);
    return console.log(name)
}

function parrent(name, email) {
    callme(name)
    callme(email)
}
parrent("arif", "arif@google.com")


// In general, when you're not dealing with methods or constructor functions where this is important, you don't need to use call() or apply() to specify the context, and the function will execute in the default context (usually the global object).