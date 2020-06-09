//Terminal : node timers
//Timing Functions
//Creating a second delay with timeout function. Asynchronously

//Const to not change
const waitTime = 3000;
const waitInterval = 500;

//let is to change variable
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval
    console.log(`waiting ${currentTime/1000} seconds`)
};

console.log(`setting a ${waitTime/1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

//Will call increment function every half second
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);