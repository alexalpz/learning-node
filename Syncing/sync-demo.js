//Code is running synchronously. Will execute once order of commands are complete.
fs = require('fs');

data = fs.readdirSync('c:/'); 

console.log('data:', data);
console.log("This comes after");