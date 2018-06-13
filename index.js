const ask = require('./src/util/ask');
const out = require('./src/util/output');
const chalk = require('chalk');
const Game = require('./src/Game');


console.log();
main().then(() => {console.log(); ask.close();});
/*
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
*/

// jshint ignore:start
async function main() {
    //await squares();
    const game = new Game(ask, out);
    while (true) {
        const answer = await game.nextQuestion();
        game.parseAnswer(answer);
    }
}
// jshint ignore:end