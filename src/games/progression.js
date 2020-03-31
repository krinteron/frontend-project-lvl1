import runGame from '../index.js';
import getRandom from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgression = (start, diff) => {
  const lengthProgression = 10;
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const getGameData = () => {
  const start = getRandom(1, 100);
  const diff = getRandom(1, 10);
  const question = getProgression(start, diff);
  const lostId = getRandom(0, question.length - 1);
  const rightAnswer = String(question[lostId]);
  question[lostId] = '..';
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => runGame(task, getGameData);
