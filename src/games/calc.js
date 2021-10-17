import runBrainGames from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const gameRules = 'What is the result of the expression?';
function calculations(random1, random2, operators) {
  const error = ('Wrong expression operator!');
  switch (operators) {
    case '+': return random1 + random2;
    case '-': return random1 - random2;
    case '*': return random1 * random2;
    default: return error;
  }
}
const makeGame = () => {
  const random1 = getRandomNumber(0, 50);
  const random2 = getRandomNumber(0, 50); // генерация рандомного числа
  const operators = ['+', '-', '*'];
  const randomOperators = operators[getRandomNumber(0, operators.length - 1)]; // генерац.оператора
  const question = `${random1} ${randomOperators} ${random2}`;
  const correctAnswer = String(calculations(random1, random2, randomOperators));
  // String т.к. ответ ответ придет  string
  return [question, correctAnswer];
};

const runBrainCalc = () => runBrainGames(makeGame, gameRules);

export default runBrainCalc;
