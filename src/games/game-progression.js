import readlineSync from 'readline-sync';
import * as brain from '../index.js';

export default () => {
    const user = brain.getName();
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        const shift = brain.getRandom(1, 10);
        const start = brain.getRandom(1, 100);
        const progression = brain.getProgression(start, shift, 10);
        const hideId = brain.getRandId(progression);
        const result = progression[hideId];
        progression[hideId] = '..';
        console.log(`Question: ${progression}`);
        const answer = Number(readlineSync.question('Your answer:  '));
        const total = brain.isRight(answer, result, user, i);
        if (!total) return '';
    }
    return '';
};
