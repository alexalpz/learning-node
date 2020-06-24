const cp = require("child_process");

//Spawn needs command were going to spawn and additional arguments come as array 
const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alexa \n");
questionApp.stdin.write("NY \n");
questionApp.stdin.write("OK \n");

//Any data spit back out will be handled and logged. 
questionApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`);
});

questionApp.on("close",()=> {
    console.log(`questionApp process exited`);
});