import readlineSync from 'readline-sync';
import * as brain from '../index.js';

export default () => {
    const user = brain.getName();
    console.log('What is the result of the expression?');
    const operations = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        const a = brain.getRandom(1, 10);
        const b = brain.getRandom(1, 10);
        const randId = brain.getRandId(operations);
        const operator = operations[randId];
        const result = brain.calc(a, operator, b);
        console.log(`Question: ${a} ${operator} ${b}`);
        const answer = readlineSync.question('Your answer:  ');
        if (Number(answer) === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};
