module.exports = class Game {
    constructor(ask, out) {
        this.mNumQuestions = 0;
        this.mNumRight = 0;
        this.mNextAnswer = '';
        this.mAsk = ask;
        this.mOut = out;
        this.mQuestionTime = Date.now();
    }

    parseAnswer(input) {
        const elapsed = (Date.now() - this.mQuestionTime)/1000;
        if (input === this.mNextAnswer) {
            //console.log(chalk.green(`Yes! (${elapsed}s)`));
            this.mOut(`Yes! (${elapsed}s)`, 'correct');
        } else {
            //console.log(chalk.red(`No! ${this.mNextAnswer} (${elapsed}s)`));
            this.mOut(`No! ${this.mNextAnswer} (${elapsed}s)`, 'wrong');
        }
    }

    nextQuestion() {
        let num = 0;
        while (num % 10 === 0) {
            num = 10 + Math.ceil(Math.random() * 89);
        }
        //ask(chalk.blueBright(`Square ${num} >> `));
        this.mNextAnswer = '' + num * num;
        this.mQuestionTime = Date.now();
        return this.mAsk(`Square ${num} >> `);
    }


}