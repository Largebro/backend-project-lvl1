import readlineSync from 'readline-sync'; // плагин выводит в консоль что ввел юзер

const randomNum = (a, b) => {
  const arr = [];
  let res = a;
  while (arr.length <= 10) { // когда массив наполниться 10ю числами прекратить
    res += b;
    arr.push(res);
  }
  return arr;
};

const gameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Юзер вводит имя
  console.log(`Hello, ${name}! 
    What number is missing in the progression?`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 10); // число откуда начнем
    const randomNum2 = Math.floor(Math.random() * 10); // число которое будем прибавлять
    const arr = randomNum(randomNum1, randomNum2); // создаем массив
    const randomIndexarr = arr[randomNum1]; // берем рандомный индекс
    arr[randomNum1] = '..'; // присваем рандомному индексу точки
    console.log(`Question: ${arr}`);
    const answer = readlineSync.question('You answer:'); //  Юзер вводит ответ
    if (+answer === randomIndexarr) { // ответ от пользователя приходит как строка
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${randomIndexarr}.
    Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations ${name}`);
};
export default gameProgression();
