const user = {
    username: "Arif",
    price: 999,
    welcomeTxt: function() {
        console.log(`${this.username} welcome to website`);
        console.log(`${user.username} welcome to website`);
        console.log(this); // output will be the current context
    }
    
}
user.welcomeTxt();
/* output is
Arif welcome to website
Arif welcome to website*/
user.username = "Arif2" // changed the context here
user.welcomeTxt();
/* output is
Arif2 welcome to website
Arif2 welcome to website
{ username: 'Arif2', price: 999, welcomeTxt: [Function: welcomeTxt] }
*/
// notes
/*
${this.username} welcome to website: This uses the this keyword to refer to the current object (user). It accesses the username property of the user object.

${user.username} welcome to website: This directly accesses the username property of the user object. In this context, user refers to the object itself.
*/

console.log(this) // {} here this refer to global object / in browser it refer to window object bcoz its the global object in browser