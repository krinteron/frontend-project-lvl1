import readlineSync from 'readline-sync';
import * as brain from '../index.js';

export default () => {
    const user = brain.getName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const number = brain.getRandom(1, 1000);
        const result = brain.isEven(number);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer:  ');
        const total = brain.isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
