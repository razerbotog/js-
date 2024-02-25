function multiply(num){
    return num*5
}

multiply.power = 2
console.log(multiply(5)); // 25
console.log(multiply.power); // 2
console.log(multiply.prototype); // {}

// In js everything is a an object , including functions!

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
    console.log(this.score);
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const tea = new createUser("tea", 25)
tea.printMe(); // score is 25
tea.increment() // 26

// new keyword
// Constructor: A constructor function is a regular function that is used to create and initialize objects.
// Creating an Instance with new: When you use the new keyword with a constructor function, it creates a new object.
// Returning Object: If the constructor function has a return statement, and the return value is an object, that object will be the result of the new expression.
// Prototype Chain: Objects created with new inherit properties and methods from the constructor's prototype.
