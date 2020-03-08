const ConsoleReader = require('./ConsoleReader');
const phoneBook = require('./PhoneBook');
const message = require(`./MessagePrinter`);

// Добавление имен и номеров
async function add() {
    message.printTooltip ('Введите имя');
    const name = await ConsoleReader.getLine();
    message.printTooltip ('Введите номер');
    const phone = Number(await ConsoleReader.getLine());
  
    phoneBook[name] = phone;
    message.printMessage(`Контакт с именем ${name} и номером ${phoneBook[name]} добавлен`);
  }
  
  // Печать контактов
  async function print() {
    message.printMessage (`Телефонная книга:\n`);
    for (let key in phoneBook)  {
        message.printMessage (`${key}: ${phoneBook[key]}\n`);
    }
  }
  
  // Удаление номеров
  async function deletePhone() {
    message.printTooltip ('Введите имя для удаления');
    const name = await ConsoleReader.getLine();
  
    if (name in phoneBook) {
      delete phoneBook[name];
      message.printMessage ("Контакт удален");
    } else {
        message.printError ("Такого имени нет в базе");
    }
  }
  
  // Поиск номера по имени
  async function searchPhone() {
    console.log('Какое имя нужно найти?');
    const name = await ConsoleReader.getLine();
  
    if (name in phoneBook) {
        message.printMessage (`Номер телефона у ${name}: ${phoneBook[name]}`);
    } else {
        message.printError("Такого имени нет в базе");
    }
  }

module.exports.add = add;
module.exports.print = print;
module.exports.deletePhone = deletePhone;
module.exports.searchPhone = searchPhone;