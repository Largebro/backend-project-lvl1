#!/usr/bin/env node
import readlineSync from 'readline-sync'; // плагин выводит в консоль что ввел юзер

function calculations(random1, operators, random2) {
  let n;// в функию приходит  оператор ввиде строки
  switch (operators) {
    case '+':
      n = random1 + random2;
      break;
    case '-':
      n = random1 - random2;
      break;
    case '*':
      n = random1 * random2;
      break;
    default:
      break;
  }
  return n;
}
const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Юзер вводит имя
  console.log(`Hello, ${name}! 
   What is the result of the expression?`);
  for (let i = 0; i < 3; i += 1) {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10); // генерация рандомного числа
    const operators = ['+', '-', '*'];
    const randomOperators = operators[Math.floor(Math.random() * 3)];
    console.log(`Question: ${random1}${randomOperators}${random2}`);
    const realAnswer = calculations(random1, randomOperators, random2);
    const answer = readlineSync.question('You answer:'); //  Юзер вводит ответ
    if (+answer === realAnswer) { // ответ от пользователя приходит как строка
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${realAnswer}.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations ${name}`);
};
export default gameCalc();
