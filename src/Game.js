module.exports = class Game {
    constructor(ask, out) {
        this.mNumQuestions = 0;
        this.mNumRight = 0;
        this.mNextAnswer = '';
        this.mAsk = ask;
        this.mOut = out;
        this.mAvgTime = 0;
        this.mQuestionTime = Date.now();
    }

    parseAnswer(input) {
        const elapsed = (Date.now() - this.mQuestionTime)/1000;
        if (input === this.mNextAnswer) {
            this.mOut(`Yes! (${elapsed}s)`, 'correct');
            this.mNumRight++;
        } else {
            this.mOut(`No! ${this.mNextAnswer} (${elapsed}s)`, 'wrong');
        }
        this.mAvgTime = ((this.mAvgTime * (this.mNumQuestions-1)) + elapsed) / this.mNumQuestions;
    }

    nextQuestion() {
        this.mNumQuestions++;
        let num = 0;
        while (num % 10 === 0) {
            num = 10 + Math.ceil(Math.random() * 89);
        }
        this.mNextAnswer = '' + num * num;
        this.mQuestionTime = Date.now();
        return this.mAsk(`Square ${num} >> `);
    }


}