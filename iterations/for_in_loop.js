// in object
const myObject = {
    js: "javascript",
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const i in myObject) {
//    console.log(i); //to get 'key' only
//    console.log(myObject[i]); // to get 'value' only
   console.log(`${i} :- ${myObject[i]}`); // to get key and value
}

// in array

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log([key]);  //to get 'key' only
    console.log(programming[key]); // to get 'value'
}