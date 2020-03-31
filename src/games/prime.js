import runGame from '../index.js';
import getRandom from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = getRandom(1, 500);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => runGame(task, getGameData);
