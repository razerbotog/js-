// syntax; (initialization , condition, iterations)
for(let index = 0; index <= 10; index += 2){
    const element = index
    // console.log(element);
}

// using if , break & continue
for(let i = 0; i <= 10; i++){
    const element = i
    if(element == 8){
        // console.log('8 found');
        // break;
        // continue;
    }
    // console.log(element);
}

//loop nesting
for (let i = 0; i <= 10; i++) {

    // console.log(`Outer loop value ${i}`);

    for (let j = 0; j <= 10; j++) {
    //   console.log(`Inner loop value ${j} Outer loop value ${i}`);
    }
    
}

// Multiplications table
for(let i = 1; i < 10; i++){
    // console.log("Multiplication of " + i + " table");
    for(a = 1; a < 10; a++){
        // console.log(`${i} * ${a} = ${i * a}`);
    }
}

// loop in array
const myArr = ["batman", "flash", "superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

// loop in string 
const myName = "Arif Akhtar"
console.log(`Array length: ${myName.length}`)
for(index = 0; index <= myName.length; index++){
    const element = myName[index];
    console.log(element);
}




