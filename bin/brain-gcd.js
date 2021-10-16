import readlineSync from 'readline-sync'; // плагин выводит в консоль что ввел юзер

const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));

const gameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Юзер вводит имя
  console.log(`Hello, ${name}! 
    Find the greatest common divisor of given numbers.`);
  for (let i = 0; i < 3; i += 1) {
    const random1 = Math.ceil(Math.random() * 100);
    const random2 = Math.ceil(Math.random() * 100); // генерация рандомного числа ceil,чтобы убрать0

    console.log(`Question: ${random1} ${random2}`);
    const realAnswer = gcd(random1, random2);
    const answer = readlineSync.question('You answer: '); //  Юзер вводит ответ
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
export default gameGcd();

