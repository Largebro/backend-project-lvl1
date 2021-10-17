import runBrainGames from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const getProgression = (a, b) => {
  const arr = [];
  let res = a;
  while (arr.length <= 10) { // когда массив наполниться 10ю числами прекратить
    res += b;
    arr.push(res);
  }
  return arr;
};

const gameRules = 'What number is missing in the progression?';

const makeGame = () => {
  const randomNum1 = getRandomNumber(0, 10); // число откуда начнем
  const randomNum2 = getRandomNumber(0, 10); // число которое будем прибавлять
  const arr = getProgression(randomNum1, randomNum2); // создаем массив
  const randomIndexArr = getRandomNumber(0, arr.length - 1); // берем рандомный индекс
  const correctAnswer = String(arr[randomIndexArr]); // правильный ответ
  arr[randomIndexArr] = '..'; // присваем рандомному индексу точки
  const question = arr.join(' ');
  return [question, correctAnswer];
};
const runBrainProgression = () => runBrainGames(makeGame, gameRules);
export default runBrainProgression();
