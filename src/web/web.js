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

window.onUserInput = (input) => {
    game.parseAnswer(input);
    game.nextQuestion();
}
