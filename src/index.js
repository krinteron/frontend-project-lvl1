import readlineSync from 'readline-sync';

export const helloUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    return name;
};

export const checkEven = (num) => {
        return num % 2 === 0 ? 'yes' : 'no';
};

const giveRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

export const evenGame = () => {
    const user = helloUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
        const number = giveRandom(1, 1000)
        const flag = checkEven(number);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer:  ');
        if (answer === flag) {
            console.log('Correct!');
            continue;
        }
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${flag}".`);
        console.log(`Let's try again, ${user}!`);
        return;
    };
    console.log(`Congratulations, ${user}!`);
};

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
};

export const calcGame = () => {
    const user = helloUser();
    console.log('What is the result of the expression?')
    const operations = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        const a = giveRandom(1, 10);
        const b = giveRandom(1, 10);
        const randId = Math.floor(Math.random() * operations.length);
        const operator = operations[randId];
        const result = calc(a, operator, b);
        console.log(`Question: ${a} ${operator} ${b}`);
        const answer = Number(readlineSync.question('Your answer:  '));
        if (answer === result) {
            console.log('Correct!');
            continue;
        }
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
        console.log(`Let's try again, ${user}!`);
        return;
    }
    console.log(`Congratulations, ${user}!`);
};
