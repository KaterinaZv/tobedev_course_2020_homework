const readline = require('readline');

const readlineInterface = readline.createInterface({ input: process.stdin, output: process.stdout });
class ConsoleReader {
    getLine = (function () {
        const getLineGen = (async function* () {
            for await (const line of readlineInterface) {
                yield line;
            }
        })();
        return async () => ((await getLineGen.next()).value);
    })();
}

module.exports = ConsoleReader;