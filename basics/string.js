const name = "Arif";
const repoCount = 10

console.log(name + " " + repoCount + " " + "repo"); //string concatenation but don't prefer to use 
console.log(`In ${name.toUpperCase()}'s github, there is ${repoCount} repo`); //template literal allow us to use string interpolation.prefer this for concatenation.

const gameName = new String("Arif-Akhtar-com");
console.table([gameName[0], gameName[1], gameName[2], gameName[3],]);// consoling value using key like [0],[1]
console.log(gameName.__proto__); // output is object "{}"; it contains many info. 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));
console.log(gameName.substring(0, 7)); //substring doesn't supported negative argument for reverse counting
console.log(gameName.slice(0, 7)); // slice supported negative argument for reverse counting
console.log(gameName.slice(-8, 11)); // slice supported negative argument for reverse counting

const newString = "  arif  ";
console.log(newString); // output with spaces
console.log(newString.trim()); //trimed the white space from both side

const myUrl = "https://arif.com/arif%20akhtar%20";
console.log(myUrl.replace("%20", "-")); // replace first target
console.log(myUrl.replaceAll("%20", "-"));// replace first all target
console.log(myUrl.includes("arif")); // true
console.log(myUrl.includes("md")); //false

console.log(gameName.split("-")); //splits a string into an array of substrings, and returns the array