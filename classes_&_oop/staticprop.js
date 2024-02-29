class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const user = new  User('John');
user.logme(); // username is John
// console.log(user.createId()); //123 without static
// console.log(user.createId()); //wont work not access to user

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const user1 = new Teacher("Teacher", 'teacher@gmail.com')
user1.logme()//username is Teacher
// user1.createId()  // wont work not access to user1



// Static methods are associated with the class itself, rather than with instances of the class
console.log ( User.createId () ); // 123