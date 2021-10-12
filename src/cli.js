import readlineSync from 'readline-sync';//  плагин выводит в консоль что ввел юзер

const name = readlineSync.question('Your name: ');//   Юзер вводит имя

export default name;
