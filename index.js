const ask = require('./src/util/ask');
const chalk = require('chalk');


console.log();
main().then(() => {console.log(); ask.close();});

async function squares() {
    while(true) {
        const num = 10 + Math.ceil(Math.random() * 89);
        if (num % 10 !== 0) {
            const start = Date.now();
            const input = await ask(chalk.blueBright(`Square ${num} >> `));
            if (input === `${num*num}`) {
                console.log(chalk.green(`Yes! (${(Date.now() - start)/1000}s)`));
            } else {
                console.log(chalk.red(`No! ${num*num}  (${(Date.now() - start)/1000}s)`));
            }
        }
    }
}

// jshint ignore:start
async function main() {
    await squares();
}
// jshint ignore:end