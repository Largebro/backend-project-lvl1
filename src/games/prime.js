import runBrainGames from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeGame = () => {
  const random = getRandomNumber(0, 100);
  const question = `${random}`;
  const correctAnswer = isPrime(random);
  return [question, correctAnswer];
};
const runBrainPrime = () => runBrainGames(makeGame, gameRules);
export default runBrainPrime;
