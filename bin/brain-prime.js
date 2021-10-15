import readlineSync from 'readline-sync';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Юзер вводит имя
  console.log(`Hello, ${name}! 
    Answer "yes" if given number is prime. Otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const random = Math.ceil(Math.random() * 100 + 1); // генерация рандом.числа ceil,чтобы убрать0
    console.log(`Question: ${random}`); // и +1
    const realAnswer = isPrime(random);
    const answer = readlineSync.question('You answer:'); //  Юзер вводит ответ
    if (answer === realAnswer) { // ответ от пользователя приходит как строка
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${realAnswer}.
    Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations ${name}`);
};
export default gamePrime();
