import readlineSync from 'readline-sync';
import * as brain from '../index.js';

export default () => {
    const user = brain.getName();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const questNum = brain.getRandom(1, 500);
        const result = brain.isPrime(questNum);
        console.log(`Question: ${questNum}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};
