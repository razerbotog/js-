// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
// A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called.

// creating promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do something
  // Do an async task
  //DB calls, network calls, cryptography
  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); //to consume/resolve successfully
  }, 1000);
});

// consuming promise
promiseOne.then(function () {
  console.log("Promise is resolved");
});

// --------xxxxx-------
// another way to create promise
new Promise(function (resolve, reject) {
  // do something
  setTimeout(function () {
    console.log("resolved");
    resolve();
  }, 1000);
}).then(function () {
  console.log("consumed successfully");
});

// --------xxxxx-------
// another way to create promise
const promiseThree = new Promise(function (resolve, reject) {
  //do something
  // network calls
  setTimeout(function () {
    console.log("promiseThree");
    resolve({ username: "Arif", email: "arif@google.com" }); //passing an obj here ; can pass anything
  }, 1000);
});
promiseThree.then(function (user) {
  console.log("promiseThree resolved");
  console.log(user); // { username: 'Arif', email: 'arif@google.com' }
});

// --------xxxxx-------
// another way to create promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // asssuming we got an error
    // let error = false;
    if (!error) {
      resolve({ username: "Arif", email: "arif@google.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});
// const four = promiseFour.then(function(user){
//     console.log('promiseFour resolved')
//     console.log(user);
//     return user.username;
//     console.log(four);
// }) //we can't return user.username like this even we store whole in a variable .have to use chaining / thening means thenable

promiseFour
  .then(function (user) {
    console.log("promiseFour resolved");
    console.log(user);
    return user.username;
  })
  .then(function (anyname) {
    console.log(anyname); //Arif
  })
  .catch(function (err) {
    console.log(err); // Something went wrong
  })
  .finally(function () {
    console.log("the promise either reslove or rejected");
  });
  
  // --------xxxxx-------
// another way to create promise
// using async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({ username: "Arif Akhtar", email: "arifakhtar@google.com" })
        }else{
            reject('promiseFive: Something went wrong')
        }

    }, 1000)
})

// using async await
async function consumePromiseFive(){
    try{
        let response = await promiseFive
        console.log(response);
    } catch(err){
        console.log(err);
    }
}
consumePromiseFive();

  // --------xxxxx-------
  // using async & await, try & catch 
//   experiment and using immediate invoked function for practice
   (async function getAllUser(){
   try{
    const data = await fetch('https://api.github.com/users/razerbotog#')
    // console.log(data);
    // const response = await JSON.parse(data) // don't need to use JSON.parse() on the response.
    const response = await data.json() // have to use await bcoz it takes time to parse
    console.log(response);
    // console.log(typeof(data));
    // console.log(typeof(response));
   } catch(err){
    console.log('Error in getAllUser');
    // console.log(err); //to see original error message
   }
   });

 // --------xxxxx-------  
//    using fetch , then & catch bcoz fetch return promise

fetch('https://api.github.com/users/razerbotog#')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((reject) => {
    console.log("reject")
})
