const chalk = require('chalk');

module.exports = (str, style = 'plain') => {
    switch (style) {
        case 'correct':
            str = chalk.green(str);
            break;
        case 'wrong':
            str = chalk.red(str);
            break;
    }
    console.log(str);
}