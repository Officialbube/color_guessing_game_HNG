const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB',
    '#E74C3C', '#2ECC71', '#F1C40F', '#1ABC9C'
];

const colorBox = document.querySelector('.color-box');
const colorOptions = document.querySelector('.color-options');
const scoreElement = document.querySelector('.score');
const gameStatus = document.querySelector('.game-status');
const newGameButton = document.querySelector('.new-game-button');

let score = 0;
let targetColor = '';
let isAnimating = false;

function generateRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateOptions(correctColor) {
    const options = [correctColor];
    while (options.length < 6) {
        const newColor = generateRandomColor();
        if (!options.includes(newColor)) {
            options.push(newColor);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

function showGameStatus(message) {
    gameStatus.textContent = message;
    gameStatus.classList.add('visible');
}

function hideGameStatus() {
    gameStatus.classList.remove('visible');
}

function handleGuess(color) {
    if (isAnimating) return;
    isAnimating = true;

    if (color === targetColor) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        showGameStatus('Correct! 🎉');
        setTimeout(startNewRound, 1500);
    } else {
        showGameStatus('Wrong! Try again 😅');
        setTimeout(() => {
            hideGameStatus();
            isAnimating = false;
        }, 1500);
    }
}

