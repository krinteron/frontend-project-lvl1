import runGame from '../index.js';
import getRandom from '../utils.js';

const task = 'What is the result of the expression?';

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return false;
  }
};

const getGameData = () => {
  const operations = ['+', '-', '*'];
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const randomId = getRandom(0, operations.length);
  const randomOperator = operations[randomId];
  const question = `${a} ${randomOperator} ${b}`;
  const rightAnswer = String(calc(a, b, randomOperator));
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => runGame(task, getGameData);
