import readlineSync from 'readline-sync';
import * as brain from '../index.js';

export default () => {
    const user = brain.getName();
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        const a = brain.getRandom(1, 50);
        const b = brain.getRandom(1, 50);
        const result = brain.giveGcd(a, b);
        console.log(`Question: ${a} ${b}`);
        const answer = Number(readlineSync.question('Your answer:  '));
        const total = brain.isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
