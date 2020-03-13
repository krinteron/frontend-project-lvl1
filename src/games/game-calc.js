import readlineSync from 'readline-sync';
import {
    getName, getRandom, getRandId, isRight, calc,
} from '../index.js';

export default () => {
    const user = getName('calc');
    const operations = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        const a = getRandom(1, 10);
        const b = getRandom(1, 10);
        const randId = getRandId(operations);
        const operator = operations[randId];
        const result = calc(a, operator, b);
        console.log(`Question: ${a} ${operator} ${b}`);
        const answer = Number(readlineSync.question('Your answer:  '));
        const total = isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
