import readlineSync from 'readline-sync';

const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const giveRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const calc = (oper1, oper2, oper3) => {
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

const giveGcd = (dig1, dig2) => {
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

const giveRandId = (arr) => (Math.floor(Math.random() * arr.length));

const giveProgression = (a1, shift, length) => {
    const arr = [a1];
    let sum = a1;
    for (let i = 1; i <= length; i += 1) {
        sum += shift;
        arr.push(sum);
    }
    return arr;
};

const checkPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

export const helloUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    return name;
};

export const evenGame = () => {
    const user = helloUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const number = giveRandom(1, 1000);
        const result = checkEven(number);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};

export const calcGame = () => {
    const user = helloUser();
    console.log('What is the result of the expression?');
    const operations = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        const a = giveRandom(1, 10);
        const b = giveRandom(1, 10);
        const randId = giveRandId(operations);
        const operator = operations[randId];
        const result = calc(a, operator, b);
        console.log(`Question: ${a} ${operator} ${b}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};

export const gcdGame = () => {
    const user = helloUser();
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        const a = giveRandom(1, 50);
        const b = giveRandom(1, 50);
        const result = giveGcd(a, b);
        console.log(`Question: ${a} ${b}`);
        const answer = readlineSync.question('Your answer:  ');
        if (Number(answer) === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};

export const progressionGame = () => {
    const user = helloUser();
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        const shift = giveRandom(1, 10);
        const start = giveRandom(1, 100);
        const progression = giveProgression(start, shift, 10);
        const hideId = giveRandId(progression);
        const result = progression[hideId];
        progression[hideId] = '..';
        console.log(`Question: ${progression}`);
        const answer = readlineSync.question('Your answer:  ');
        if (Number(answer) === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};

export const primeGame = () => {
    const user = helloUser();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const questNum = giveRandom(1, 500);
        const result = checkPrime(questNum);
        console.log(`Question: ${questNum}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer === result) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
            console.log(`Let's try again, ${user}!`);
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
};
