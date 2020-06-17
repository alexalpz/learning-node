const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customEvent",(message, user)=>{
    console.log(`${user}: ${message}`);

});

//Name of Event, Data for event, Author
/*
emitter.emit("customEvent","Hello World", "Computer");
emitter.emit("customEvent","That's pretty cool","Alexa");
*/

process.stdin.on("data", data =>{
    const input = data.toString().trim();
    if (input === "exit"){
        emitter.emit("customEvent", "Goodbye!", "Process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});