//syntax
// in array
const coding = ["js", "ruby", "java", "python", "cpp"]

// using normal function in callback
coding.forEach( function (name){
    console.log(name);
})

// using arrow function in callback
coding.forEach((name) => {
    console.log(name);
})

coding.forEach((name, item, arr) => {
    console.log(name, item, arr);
})
// output will be
// 1st parameter :- value
// 2nd parameter :- index number
// 3rd parameter :- the whole array



// using normal function reference in callback arguments
function func(name){
    console.log(name);
}
coding.forEach(func); 

// *in object
const myCoding = [
    {
        language: "javascript",
        languageFileName: "js",
    },
    {
        language: "java",
        languageFileName: "java",
    },
    {
        language: "phython",
        languageFileName: "py",
    }
]

myCoding.forEach((item, index) => {
    console.log(index, item.languageFileName, item.language);
})