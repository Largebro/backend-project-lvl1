import readlineSync from 'readline-sync';

export default () => {
  const gameBrain = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${gameBrain}!`);
};
