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
