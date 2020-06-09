//Terminal : node timers
//Creating waiting time as a percentage

const waitTime = 5000;
const waitInterval = 500;

//let is to change variable
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    //Calculating a percentage. Floor trims off decimal    
    const p = Math.floor((currentTime / waitTime)* 100);
    //Clears last line
    process.stdout.clearLine();
    //Moves cursor to star position, zero is start of line.
    process.stdout.cursorTo(0);
    //Our message
    process.stdout.write(`waiting... ${p}%`);

};

console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("\n done");
};

//Will call increment function every half second
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);