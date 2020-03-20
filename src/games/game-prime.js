import runGame from '../index.js';
import { getRandom } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

const getGameData = () => {
    const randNumber = getRandom(1, 500);
    const roundData = {
        quest: randNumber,
        rightAnswer: isPrime(randNumber),
    };
    return roundData;
};

export default () => runGame(task, getGameData);
