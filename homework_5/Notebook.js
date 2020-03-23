const ConsoleReader = require('./homework_4/ConsoleReader');
const {Contact, MyContact} = require('./homework_4/Contact');
const message = require(`./homework_4/MessagePrinter`);
const dataChek = require('./homework_4/DataCheking');

class Notebook {

    constructor(phoneBookStorage) {
        this.phoneBookStorage = phoneBookStorage;

    }

    // Добавление имен и номеров
    async add() {
        message.printTooltip("Введите имя");
       const name = await reader.getLine();
        let chekname = dataChek.nameVerification(name);

        if (chekname == true) {
            message.printTooltip("Введите номер");
            const phone = await reader.getLine();
            let chekphone = dataChek.dataCheking(phone);

            if (chekphone == true) {
                this.phoneBookStorage.push(new Contact(name, phone));
                message.printMessage(`Контакт с именем ${name} и номером ${phone} добавлен`);
            } else {
                message.printError("Неверный формат");
            }

        } else {
            message.printTooltip("Подсказка: Имя на русском языке и с большой буквы");
        }
    }

    // Печать контактов
    async print() {
        message.printMessage(`Телефонная книга:\n`);

        // Сортировка контактов по алфавиту
        this.phoneBookStorage.sort(compare);
        function compare(a, b) {
            const firstName = a.name.toUpperCase();
            const secondName = b.name.toUpperCase();

            let comparison = 0;
            if (firstName > secondName) {
                comparison = 1;
            } else if (firstName < secondName) {
                comparison = -1;
            }
            return comparison;
        }
    
        for (let i = 0; i < this.phoneBookStorage.length; i++) {
            const contact = this.phoneBookStorage[i]; 

            message.printMessage(`${contact.name}: ${contact.phone}\n`);
        } 
    }

    // Удаление номеров
    async deletePhone() {
        message.printTooltip("Введите имя для удаления");
        const name = await reader.getLine();

        for (let i = 0; i < this.phoneBookStorage.length; i++) {
            const contact = this.phoneBookStorage[i];
            if (contact.name === name) {
                this.phoneBookStorage.splice(i, 1);
                message.printMessage("Контакт удален");
            } else {
                message.printError("Такого имени нет в базе");
            }
        } 
    }

    // Поиск номера по имени
    async searchPhone() {
        message.printTooltip("Введите имя для поиска");
        const name = await reader.getLine();

        for (let i = 0; i < this.phoneBookStorage.length; i++) {
            const contact = this.phoneBookStorage[i];
            if (contact.name === name) {
                message.printMessage(`Номер телефона у ${contact.name}: ${contact.phone}`);
            } else {
                message.printError("Такого имени нет в базе");
            }
        }
    }

    static getSizeNoteBook(phoneBookStorage) {
        console.log(phoneBookStorage.length); 

    }


}

module.exports = Notebook;