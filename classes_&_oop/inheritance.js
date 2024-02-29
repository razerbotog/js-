class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher  extends User{
    constructor(username, email, password){
        // this.username = username
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New course is added by ${this.username}`);
    }
}

const user = new Teacher("Arif", 'arif@gmail.com', '23724')
user.addCourse() // New course is added by Arif

const user1 = new User( "John")
user1.logme() // username is John
user.logme() // username is Arif

console.log(user1 instanceof User); //true
console.log(user instanceof User); //true
console.log(user instanceof Teacher); //true
console.log(user1 instanceof Teacher); //false