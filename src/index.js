import readlineSync from 'readline-sync';

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const calc = (oper1, oper2, oper3) => {
    switch (oper2) {
    case '+':
        return oper1 + oper3;
    case '-':
        return oper1 - oper3;
    case '*':
        return oper1 * oper3;
    default:
        console.log(`Operator ${oper2} not recognized.`);
    }
    return '';
};

export const getGcd = (dig1, dig2) => {
    const digMin = Math.min(dig1, dig2);
    const digMax = Math.max(dig1, dig2);
    const divider = Math.min(Math.floor(digMax / 2), digMin);
    for (let i = divider; i > 0; i -= 1) {
        if (dig1 % i === 0 && dig2 % i === 0) {
            return i;
        }
    }
    console.log('check input');
    return '';
};

export const getRandId = (arr) => (Math.floor(Math.random() * arr.length));

export const getProgression = (start, shift, length) => {
    const arr = [start];
    let sum = start;
    for (let i = 1; i <= length; i += 1) {
        sum += shift;
        arr.push(sum);
    }
    return arr;
};

export const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

export const getName = (gameName) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    switch (gameName) {
    case 'hello':
        break;
    case 'calc':
        console.log('What is the result of the expression?');
        break;
    case 'even':
        console.log('Answer "yes" if the number is even. Otherwise answer "no".');
        break;
    case 'gcd':
        console.log('Find the greatest common divisor of given numbers.');
        break;
    case 'prime':
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
        break;
    case 'progression':
        console.log('What number is missing in the progression?');
        break;
    default:
        console.log('check input getName');
    }
    return name;
};

export const isRight = (answer, result, user, iteration) => {
    if (answer === result) {
        console.log('Correct!');
        if (iteration === 2) console.log(`Congratulations, ${user}!`);
        return true;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    console.log(`Let's try again, ${user}!`);
    return false;
};
