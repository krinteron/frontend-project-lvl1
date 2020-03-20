import runGame from '../index.js';
import { getRandom } from '../utils.js';

const task = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calc = (operand1, operand2, operator) => {
    switch (operator) {
    case '+':
        return operand1 + operand2;
    case '-':
        return operand1 - operand2;
    case '*':
        return operand1 * operand2;
    default:
        console.log(`Operator ${operator} not recognized.`);
    }
    return;
};

const getRandId = (arr) => (Math.floor(Math.random() * arr.length));

const getGameData = () => {
    const a = getRandom(1, 10);
    const b = getRandom(1, 10);
    const randId = getRandId(operations);
    const randOperator = operations[randId];
    const roundData = {
        quest: `${a} ${randOperator} ${b}`,
        rightAnswer: calc(a, b, randOperator),
    };
    return roundData;
};

export default () => runGame(task, getGameData);
