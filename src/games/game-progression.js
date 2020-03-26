import runGame from '../index.js';
import getRandom from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
  const lengthProgression = 10;
  const progression = [];
  const start = getRandom(1, 100);
  const diff = getRandom(1, 10);
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const getGameData = () => {
  const question = getProgression();
  const questionId = getRandom(0, question.length);
  const rightAnswer = String(question[questionId]);
  question[questionId] = '..';
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => runGame(task, getGameData);
