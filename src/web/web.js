const Game = require('../Game');

const title = document.getElementById("title");
title.innerHTML = 'Mindflayer!';

const ask = (question) => {
    const prompt = document.getElementById("prompt");
    prompt.innerHTML = question;
}

const out = (str, style) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = escapeHtml(str);
    newElement.classList.add(style);
    
    const outputArea = document.getElementById("outputArea");
    outputArea.appendChild(newElement);
    outputArea.scrollTop = outputArea.scrollHeight;
}

const game = new Game(ask, out);
game.nextQuestion();

window.onGameChange = (gameType) => {
    const avgTime = document.getElementById("avgTime");
    avgTime.innerHTML = escapeHtml(`Average time: -- s`);
    const correct = document.getElementById("correct");
    correct.innerHTML = escapeHtml(`Correct: --`);

    game.setGameType(gameType);
    game.nextQuestion();
}

window.onUserInput = (input) => {
    game.parseAnswer(input);

    const avgTime = document.getElementById("avgTime");
    avgTime.innerHTML = escapeHtml(`Average time: ${Math.round(game.mAvgTime*100)/100} s`);
    const correct = document.getElementById("correct");
    correct.innerHTML = escapeHtml(`Correct: ${game.mNumRight}/${game.mNumQuestions} (${Math.round(game.mNumRight/game.mNumQuestions*1000)/10}%)`);

    game.nextQuestion();
}
