console.log(Date()); // Sun Sep 17 2023 16:57:13 GMT+0000 (Coordinated Universal Time)

let newDate = new Date();
console.log(newDate); // 2023-09-17T16:57:13.660Z
console.log(newDate.toString()); //Sun Sep 17 2023 16:57:13 GMT+0000 (Coordinated Universal Time)
console.log(newDate.toDateString()); // Sun Sep 17 2023
console.log(newDate.toISOString()); //2023-09-17T17:06:29.044Z
console.log(newDate.toJSON()); // 2023-09-17T17:06:29.044Z
console.log(newDate.toLocaleDateString()); // 9/17/2023
console.log(newDate.toLocaleString()); // 9/17/2023, 5:06:29 PM
console.log(newDate.toTimeString()) // 17:15:56 GMT+0000 (Coordinated Universal Time)
console.log(typeof(newDate)); // object

let myDate = new Date(2023, 0, 23);
console.log(myDate.toDateString()); // Mon Jan 23 2023

let myDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myDate1.toDateString()); // Mon Jan 23 2023
console.log(myDate1.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myDate2 = new Date("2023-01-14");
console.log(myDate2.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myDate3 = new Date("01-14-2023");
console.log(myDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1694974982133 ; in milli seconds
console.log(myDate.getTime()) //1674432000000 ; in milli seconds
console.log(Math.floor(Date.now() / 1000)); // 1694975262 ; in seconds bcoz it was divided by 1000

let newDate4 = new Date();
console.log(newDate4);
console.log(newDate4.getMonth() + 1); // added 1 for correction bcoz counting starts from 0
console.log(newDate4.getDay() + 1); // added 1 for correction bcoz counting starts from 0

let customiseDate = newDate4.toLocaleString('default', {
    weekday: "long",
    month: "long"
})
console.log(customiseDate); // September Sunday