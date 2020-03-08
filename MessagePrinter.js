
const chalk = require('chalk');
const log = console.log;


//Вывод подсказок
async function printTooltip (message) {
    log(chalk.blue.bold(message));
}

//Вывод ошибок
async function printError (message) {
    log(chalk.red.bgWhite(message));
}

//Вывод сообщений
async function printMessage (message) {
    log(chalk.hex('#00ffea')(message));
}
module.exports.printTooltip = printTooltip;
module.exports.printError = printError;
module.exports.printMessage = printMessage;