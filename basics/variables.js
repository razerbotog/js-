const accountId = 45563
let accountEmail = "arif@google.com" //scope sensitive
var accountPassword = "12345" //not scope sensitive
accountCity = "Assam" //work but dont use 
let accountState;

console.log(accountId);
console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);