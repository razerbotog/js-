//ES6 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('arif', 'arif@gmail.com', '12345');
console.log(user1.encryptPassword()) // 12345abc
console.log(user1.changeUsername()); // ARIF


// without class syntax || behind the seen

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new User('arif akhtar', 'arif@gmail.com', '123456');
console.log(user2.encryptPassword()) // 123456abc
console.log(user2.changeUsername()); // ARIF AKHTAR