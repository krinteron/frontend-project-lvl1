import runGame from '../index.js';
import { getRandom } from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgression = (start, shift, length) => {
    const arr = [start];
    let sum = start;
    for (let i = 1; i <= length; i += 1) {
        sum += shift;
        arr.push(sum);
    }
    return arr;
};

const getRandId = (arr) => (Math.floor(Math.random() * arr.length));

const getGameData = () => {
    const shift = getRandom(1, 10);
    const start = getRandom(1, 100);
    const progression = getProgression(start, shift, 10);
    const hideId = getRandId(progression);
    const lostNumber = progression[hideId];
    progression[hideId] = '..';
    const roundData = {
        quest: progression,
        rightAnswer: lostNumber,
    };
    return roundData;
};

export default () => runGame(task, getGameData);
