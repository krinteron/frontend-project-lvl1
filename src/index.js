import readlineSync from 'readline-sync';

const sumRounds = 3;

export default (task, getGameData) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log(task);
    let i = 0;
    while (i < sumRounds) {
        const { quest, rightAnswer } = getGameData();
        console.log(`Question: ${quest}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer !== String(rightAnswer)) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
        i += 1;
    }
    console.log(`Congratulations, ${name}!`);
};
