#!/usr/bin/env node
import readlineSync from 'readline-sync'; // плагин выводит в консоль что ввел юзер

const isPrime = (random) => {
  const number = random % 2 === 0 ? 'yes' : 'no';
  return number;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Юзер вводит имя
  console.log(`Hello, ${name}! 
 Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * 15); // генерация рандомного числа
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('You answer:'); //  Юзер вводит ответ
    if (answer === isPrime(random)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations ${name}`);
};
export default game();
