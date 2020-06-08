/*
//terminal: node globalProcess
//Retrieve process id
console.log(process.pid);
//Retrieve process js
console.log(process.versions.node);
*/

/*
//terminal: node globalProcess
//Returns an array of path file and code execution
console.log(process.argv);

*/

/*
const [,,firstName,lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);
//Terminal: node  globalProcess --user Alexa --greeting "Hidely Hoe"
//Output:Your name is --user Alexa
*/

//Finding indexes
//Arrow finds flags. indexOf for arrays + 1 for the NEXT index.
const grab = flag =>{ 
    let indexAfterFlag = process.argv.indexOf(flag) +1 ;
    return process.argv[indexAfterFlag]; 
}

//Flags you want to obtain value from.
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);