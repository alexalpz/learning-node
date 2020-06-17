const collectAnswers = require("./lib/collectAnswers");

const questionsArray = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];


const answerEvents = collectAnswers(questionsArray, answersArray=>{
    console.log("Thank you for your answers.");
    console.log(answersArray);
    process.exit();
});

answerEvents.on("answer", answer => 
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answersArray => {
    console.log("Thank you for your answers.");
    console.log(answersArray);
    
});

answerEvents.on("complete",()=> process.exit());