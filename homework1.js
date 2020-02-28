'use strict'

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

const phoneBook = {};

// Добавление имен и номеров
async function add(){
    console.log('Введите имя');
    const name = await getLine();
    console.log('Введите номер');
    const phone = Number(await getLine());

    phoneBook[name] = phone;
}

// Печать контактов
async function print (){
     console.log(phoneBook);
 }

 // Удаление номеров
 async function deletePhone(){
     console.log('Введите имя для удаления');
     const name =  await getLine();

    delete phoneBook[name];
 }

 // Поиск номера по имени
 async function searchPhone(){
    console.log('Какое имя нужно найти?');
    const name = await getLine();

    if (name in phoneBook) {
        console.log(`Номер телефона у ${name}: ${phoneBook[name]}`);
    } else {
        console.log("Такого имени нет в базе");
    }
 }

const main = async () => {
    console.log(`Введите команду add- добавить контакт, \n print/ показать контакты, delete/ удалить контакт, \n search/ поиск контакта. Для выхода используйте команду - exit`);
    const command = await getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add'){
        await add();
    } else if (command === 'print'){
        await print();
    } else if (command === 'delete') {
        await deletePhone();
    } else if (command === 'search'){
        await searchPhone();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();