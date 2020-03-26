import runGame from '../index.js';
import getRandom from '../utils.js';

const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getGameData = () => {
  const question = getRandom(1, 1000);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => runGame(task, getGameData);
