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

export const evenGame = () => {
    const user = helloUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * (1000 - 1)) + 1;
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
    }
    console.log(`Congratulations, ${user}!`);
};
