const readline = require("readline");
//Readline interface: Ask questions and collect info
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("How do you like Node?", answer =>{
    console.log(`Your answer: ${answer}`);
})