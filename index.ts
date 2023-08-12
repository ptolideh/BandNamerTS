import { createInterface } from 'readline';
let cityName: string;
let petName: string;

const rl = createInterface({
    input: process.stdin.setEncoding('utf-8'),
    output: process.stdout,
});

const questions = ["What's the name of the city you grew up in?\n", "What's your pet's name?\n"];
const answers: Array<string> = [];


function askQuestion(index: number) {
    if (index === questions.length) {
        generateBandName();
        process.exit(0);
    }
    
    rl.question(questions[index], (line) => {
        answers[index] = line.trim();
        index++;
        askQuestion(index);
    });

}   

function generateBandName() { 
    console.log(`Your band name could be '${answers[0]} ${answers[1]}'!`);
}

askQuestion(0);

