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