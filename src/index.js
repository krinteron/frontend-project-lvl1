import readlineSync from 'readline-sync';

export default (task = false, getGameData) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    if (!task) return;
    console.log(task);
    let i = 0;
    for (let i = 0; i < 3; i += 1) {
        const { question, rightAnswer } = getGameData();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer !== rightAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
};
