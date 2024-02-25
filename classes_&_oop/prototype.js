// let myName =  "John Doe   ";
// console.log(myName.length); //11
// console.log(myName.trim().length);//8

// console.log(myName.trueLength);
//------------------

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",
    getSpiderPower: function () {
        console.log(`Spider-Man's power is ${this.spiderman}`);
    }
}
heroPower.getSpiderPower();

// adding new function to that object
heroPower.getThorPower = function () {
    console.log(`Thor power is  ${this.thor}`);
}

heroPower.getThorPower()

// adding new function/property in object prototype.which can be access in evrywhere. as a reminder js is protype language which have inherit behaviour
Object.prototype.arif = function() {
    console.log(`Arif is present in all object`);
}
heroPower.arif() //Arif is present in all object
myHeros.arif(); // Arif is present in all object


// adding new function/property in array
Array.prototype.heyArif = function () {
    console.log(`Arif says hello`);
}
myHeros.heyArif() //Arif says hello

// now access proptotype property of array in object
// heroPower.heyArif() // heroPower.heyArif is not a function


//------------------
// inheritance / prototypal inheritance

// old approach
const user ={
    name :"John Doe",
    email: "john@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // to link to a object . now this object can access the propert of reference object 
}

Teacher.__proto__ = user //// to link to a object . now this object can access the propert of reference object 

// modern approach
Object.setPrototypeOf(TeachingSupport, Teacher) // access all property of teacher

//now adding a new  property to String to get true length
let anotherUsername = "Arif Akhtar   "

String.prototype.trueLength = function () {
    console.log(`${this}`); // Arif Akhtar
    console.log(`True length of ${this} is: ${this.trim().length}`); //True length of Arif Akhtar    is: 11
}
anotherUsername.trueLength()

"Coffee".trueLength() // True length of Coffee is: 6
