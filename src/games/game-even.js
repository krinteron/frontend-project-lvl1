import readlineSync from 'readline-sync';
import {
    getName, getRandom, isEven, isRight,
} from '../index.js';

export default () => {
    const user = getName('even');
    for (let i = 0; i < 3; i += 1) {
        const number = getRandom(1, 1000);
        const result = isEven(number);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer:  ');
        const total = isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
