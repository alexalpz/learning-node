const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questionsArray = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];

const collectAnswers = (questionsArray, done) =>{
    const answersArray = [];
    //destructuring questions to ask individually

    const [firstQuestion] = questionsArray;

    //When user answers question it will be pushed into an array. 
    const questionAnswered = answer =>{
        answersArray.push(answer);
        if (answersArray.length < questionsArray.length){
            //This will move to the next question in the question array being in position 2. 
            rl.question(questionsArray[answersArray.length], questionAnswered);
        }
        else{
            done(answersArray);
        }
    };
    rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questionsArray, answersArray=>{
    console.log("Thank you for your answers.");
    console.log(answersArray);
    process.exit();
});