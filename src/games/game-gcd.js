import runGame from '../index.js';
import getRandom from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (dig1, dig2) => {
    const digMin = Math.min(dig1, dig2);
    const digMax = Math.max(dig1, dig2);
    const divider = Math.min(Math.floor(digMax / 2), digMin);
    for (let i = divider; i > 0; i -= 1) {
        if (dig1 % i === 0 && dig2 % i === 0) {
            return i;
        }
    }
    return '';
};

const getGameData = () => {
    const a = getRandom(1, 50);
    const b = getRandom(1, 50);
    const question = `${a} ${b}`;
    const rightAnswer = String(getGcd(a, b));
    const roundData = {
        question,
        rightAnswer
    };
    return roundData;
};

export default () => runGame(task, getGameData);
