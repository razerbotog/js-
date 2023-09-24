// Immediately Invoked Function Expressions (IIFE)
/*
IIFEs are often used to create a private scope for variables, preventing them from polluting the global namespace. They're also useful for encapsulating code and avoiding naming conflicts.

The name in an IIFE is optional(referrence name of a function), but it can be helpful for debugging and stack traces
*/

// By using regular functions
(function coffee() {
    console.log('DB connected');
})(); // DB connected

// By using arrow function
( (name) => {
    console.log(`DB connected2 ${name}`);  
} )('Arif'); // DB connected2 Arif

// Notes
// semi-colon is must at end to make the code end and to start a new invoked function
