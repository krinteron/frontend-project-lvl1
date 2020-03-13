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
        const answer = Number(readlineSync.question('Your answer:  '));
        const total = brain.isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
