import readlineSync from 'readline-sync';
import {
    getName, getRandom, getProgression, getRandId, isRight,
} from '../index.js';

export default () => {
    const user = getName('progression');
    for (let i = 0; i < 3; i += 1) {
        const shift = getRandom(1, 10);
        const start = getRandom(1, 100);
        const progression = getProgression(start, shift, 10);
        const hideId = getRandId(progression);
        const result = progression[hideId];
        progression[hideId] = '..';
        console.log(`Question: ${progression}`);
        const answer = readlineSync.question('Your answer:  ');
        const total = isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
