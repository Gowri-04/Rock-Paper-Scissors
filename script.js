'use strict';

let player1Score = 0;
let player2Score = 0;

const player1ScoreEl = document.getElementById('player1-score');
const player2ScoreEl = document.getElementById('player2-score');
const resultText = document.querySelector('.result-text');

const choices = ['rock', 'paper', 'scissors'];

// Function to generate player2 choice
const getplayer2choice = function(){
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
} 

// Function to play one round of the game
const playRound = function(player1Selection){
    const player2Selection = getplayer2choice();
    let result = '';

    if(player1Selection === player2Selection){
        result = "It's a draw!";
    } else if (
        (player1Selection === 'rock' && player2Selection === 'scissors') ||
        (player1Selection === 'papaer' && player2Selection === 'rock') ||
        (player1Selection === 'scissors' && player2Selection === 'paper')
    ){
        result = 'You win!😍';
        player1Score++;
        player1ScoreEl.textContent = player2Score;
    } else {
        result = 'Player2 Wins!😍';
        player2Score++;
        player2ScoreEl.textContent = player2Score;
    }

    resultText.textContent = `You chose ${player1Selection}, player2 chose ${player2Selection}. ${result}`;
}

// Event listeners for player choices
document.getElementById('rock').addEventListener('click', function(){
    playRound('rock');
});

document.getElementById('paper').addEventListener('click', function(){
    playRound('paper');
});

document.getElementById('scissors').addEventListener('click', function(){
    playRound('scissors');
}

)