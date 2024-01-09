// object literal
const user = {
    username : "arif",
    loginCount: 8,
    signedIn: true,
    getUser: function(){
        console.log(this.username);
    }
}
user.getUser();
const user1 = {
    username : "arif",
    loginCount: 8,
    signedIn: true,
    getUser1: function(){
        console.log(this.username);
    }
}
user1.getUser1();

//Constructor function
function User(username, loginCount, isLoggedIn){
    // adding property to this object
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function (){
        console.log(`WELCOME ${this.username}`);
    }
    return this //There is no need to use return this at the end of the constructor. The this keyword is automatically used to refer to the new object being created, and it's returned implicitly when you use new User(...).
}
let user2 = new User("arif", 9, false)
console.log(user2.username); //arif
user2.greeting(); //WELCOME arif
console.log(user2.constructor); //[Function: User]
console.log(user2 instanceof Object) //true
console.log(user2 instanceof User) //true
