import runGame from '../index.js';
import { getRandom } from '../utils.js';

const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
    const randNumber = getRandom(1, 1000);
    const roundData = {
        quest: randNumber,
        rightAnswer: isEven(randNumber)
    };
    return roundData;
};

export default () => runGame(task, getGameData);