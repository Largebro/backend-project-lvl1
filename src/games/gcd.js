import runBrainGames from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : Math.abs(a)); // поиск наиболь. общего кратного

const makeGame = () => {
  const random1 = getRandomNumber(0, 100);
  const random2 = getRandomNumber(0, 100);
  const question = `${random1} ${random2}`;
  const correctAnswer = String(getGcd(random1, random2));
  return [question, correctAnswer];
};
const runBrainGcd = () => runBrainGames(makeGame, gameRules);
export default runBrainGcd;
