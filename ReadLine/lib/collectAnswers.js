const readline = require("readline");
const {EventEmitter} = require("events")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


module.exports = (questionsArray, done = f => f ) =>{
    const answersArray = [];
    const [firstQuestion] = questionsArray;

    //Constructor function
    const emitter = new EventEmitter();


    const questionAnswered = answer =>{
        //Everytime user answers a question we raise an event
        emitter.emit("answer", answer);
        answersArray.push(answer);
        if (answersArray.length < questionsArray.length){
            rl.question(questionsArray[answersArray.length], questionAnswered);
        }
        else{
            emitter.emit("Complete",answersArray)
            done(answersArray);
        }
    };
    rl.question(firstQuestion, questionAnswered);

    return emitter;
}

