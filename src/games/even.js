import runBrainGames from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".`';
const isEven = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');

const makeGame = () => {
  const question = getRandomNumber(0, 100); // генерация рандомного числа
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const runBrainEven = () => runBrainGames(makeGame, gameRules);

export default runBrainEven;
