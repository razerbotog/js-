// Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.

// singleton object
const user = new Object();
console.log(user); // {}

// non-singleton object
const user1 = {};
console.log(user1); // {}

user.id = "123abc";
user.name = "Arif";
user.isLoggedIn = "true";
console.log(user); //{ id: '123abc', name: 'Arif', isLoggedIn: 'true' }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Arif",
            lastname: "Akhtar"
        }
    }
}

console.log(regularUser);
/* output is
{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'Arif', lastname: 'Akhtar' } }
}
*/
console.log(regularUser.fullname.userfullname.firstname); // Arif

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = {obj1, obj2};//

console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2) // 1st parameter is target and rest are all source.This method return the version with all source inside target 
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // changed the original variable too

const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {...obj1, ...obj2}; // spread operator; 
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user3 = [
    {   
        id: 1,
        name:"arif1"
    },
    {   
        id: 2,
        name:"arif2"
    },
    {   
        id: 3,
        name:"arif3"
    },
]
console.log(user3[0].id); // 1 
console.log(user3[0].name); // arif1

console.log(Object.keys(user)); //[ 'id', 'name', 'isLoggedIn' ] ; *returned in array
console.log(Object.values(user)); // [ '123abc', 'Arif', 'true' ]
console.log(user.name.length); // 4
console.log(Object.entries(user)); // [ [ 'id', '123abc' ], [ 'name', 'Arif' ], [ 'isLoggedIn', 'true' ] ] ; 1st will be key and 2nd will be value
console.log(user.hasOwnProperty("isLoggedIn")); // true ; checks if the property exist or not
console.log(user.hasOwnProperty("isNotLoggedIn")); // false ; doesn't exist
