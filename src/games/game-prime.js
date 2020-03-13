import readlineSync from 'readline-sync';
import {
    getName, getRandom, isPrime, isRight,
} from '../index.js';

export default () => {
    const user = getName('prime');
    for (let i = 0; i < 3; i += 1) {
        const number = getRandom(1, 500);
        const result = isPrime(number);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer:  ');
        const total = isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
