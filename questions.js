//Terminal: node questions

/*
Question and answer app that runs in the terminal
Process standard input
process.stdin 
Process standard output. Writable string. Send data out 

process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");
*/

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preffered programming language?"
];

//Index of question we want to ask. If no argument is sent, the index will be zero.
const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

//We asked the first question 
ask();


//Start of our first asynchronous application
//On function listens for events (answers)
//"data" is user input (callback for errors)

//An array called answers
const answers = [];


//As soon as user input is done, callback is triggered 
process.stdin.on('data', data =>{
    answers.push(data.toString().trim());
 
//If the amount of answers in array is less than the amount of questions
//So first question stored has array 0
//though length of answers in array is now 1 ( It's incrementing to the next answer)

    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        process.exit();
    }
});

process.on('exit', () =>{
    const[name, acitivity,lang] = answers;
    console.log(`
        Thank you for your answers.

        Go ${acitivity} ${name} you can write ${lang} code later!!
    `)
});