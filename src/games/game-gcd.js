import readlineSync from 'readline-sync';
import {
    getName, getRandom, getGcd, isRight,
} from '../index.js';

export default () => {
    const user = getName('gcd');
    for (let i = 0; i < 3; i += 1) {
        const a = getRandom(1, 50);
        const b = getRandom(1, 50);
        const result = getGcd(a, b);
        console.log(`Question: ${a} ${b}`);
        const answer = Number(readlineSync.question('Your answer:  '));
        const total = isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
