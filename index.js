'use strict'

// Подключения к модулям
const readline = require('readline');
const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');
const message = require(`./MessagePrinter`);


const main = async () => {
  message.printTooltip (`Введите команду add- добавить контакт, \nprint/ показать контакты, delete/ удалить контакт, \nsearch/ поиск контакта. Выход- exit`);
  const command = await ConsoleReader.getLine();
  if (command === 'exit') {
    process.exit(0);
  } else if (command === 'add') {
    await Contact.add();
  } else if (command === 'print') {
    await Contact.print();
  } else if (command === 'delete') {
    await Contact.deletePhone();
  } else if (command === 'search') {
    await Contact.searchPhone();
  } else {
    message.printError('Неизвестная команда');
  }

  main();
};

main();