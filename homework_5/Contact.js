const ConsoleReader = require('./ConsoleReader');
const phoneBook = require('./PhoneBook');
const message = require(`./MessagePrinter`);
const dataChek = require('./DataCheking');

const reader = new ConsoleReader()

// Добавление имен и номеров
async function add() {
    message.printTooltip("Введите имя");
    const name = await reader.getLine();
    let name1 = dataChek.nameVerification(name);

        if (name1 == true) {
            message.printTooltip("Введите номер");
            const phone = await reader.getLine();
            let phone1 = dataChek.dataCheking(phone);
       
                if (phone1 == true) {
                   phoneBook[name] = phone;
                   message.printMessage(`Контакт с именем ${name} и номером ${phoneBook[name]} добавлен`);
                } else {
                  message.printError("Неверный формат");
                }

        } else { 
            message.printTooltip("Подсказка: Имя на русском языке и с большой буквы");
        }
  }
  
  // Печать контактов
  async function print() {
    message.printMessage(`Телефонная книга:\n`);
    for (let key in phoneBook)  {
        message.printMessage(`${key}: ${phoneBook[key]}\n`);
    }
  }
  
  // Удаление номеров
  async function deletePhone() {
    message.printTooltip("Введите имя для удаления");
    const name = await reader.getLine();
  
    if (name in phoneBook) {
      delete phoneBook[name];
      message.printMessage ("Контакт удален");
    } else {
        message.printError("Такого имени нет в базе");
    }
  }
  
  // Поиск номера по имени
  async function searchPhone() {
    message.printTooltip("Введите имя для поиска");
    const name = await reader.getLine();
  
    if (name in phoneBook) {
        message.printMessage(`Номер телефона у ${name}: ${phoneBook[name]}`);
    } else {
        message.printError("Такого имени нет в базе");
    }
  }

module.exports.add = add;
module.exports.print = print;
module.exports.deletePhone = deletePhone;
module.exports.searchPhone = searchPhone;