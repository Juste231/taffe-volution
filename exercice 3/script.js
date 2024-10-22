let randomNumber;
let attemptsRemaining;
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const resultMessage = document.getElementById('result-message');
const attemptsRemainingDisplay = document.getElementById('attempts-remaining');
const resetGameButton = document.getElementById('reset-game');
const startInput = document.getElementById('start-input');
const endInput = document.getElementById('end-input');
const setButton = document.getElementById('set-button');
const playeurs = document.getElementById('playeur');

setButton.addEventListener('click', define);
function define(){
    const startvalue = startInput.value;
    const endvalue = endInput.value;
    if (startInput === '' || endInput === '') {
        alert('Veuillez saisir des valeurs valides pour le début et la fin de l\'intervalle.');
        return;
    }
    const start = Number(startvalue);
    const end = Number(endvalue);
    initializeGame(start, end)
};

function initializeGame(start, end) {
    

    console.log("Start:", start);
    console.log("End:", end);

    randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    console.log("Random Number:", randomNumber);

    attemptsRemaining = 10;
    resultMessage.textContent = '';
    attemptsRemainingDisplay.textContent = `Essais restants : ${attemptsRemaining}`;
    guessInput.value = '';
}
function checkGuess() {
    const start = Number(startInput.value);
    const end = Number(endInput.value);
    const userGuess = Number(guessInput.value);
    if (userGuess < start || userGuess > end || isNaN(userGuess)) {
        updateMessage(`Veuillez entrer un nombre entre  ${start} et ${end}.`, true);
        return;
    }
attemptsRemaining--;
attemptsRemainingDisplay.textContent = `Essais restants : ${attemptsRemaining}`;

    if (userGuess === randomNumber) {
        updateMessage('Félicitations! Vous avez deviné le nombre!', false);
        playeurs.textContent = `le joueur a réusie en ${10 -attemptsRemaining} essaie`
        submitGuessButton.disabled = true;
        return;
    } else if (userGuess < randomNumber) {
        updateMessage('Trop bas!', true);
    } else {
        updateMessage('Trop haut!', true);
    }
    if (attemptsRemaining === 0) {
    updateMessage(`Game over! Le nombre était ${randomNumber}.`, true);
    playeurs.textContent = `tu est trop null `
    submitGuessButton.disabled = true;
    }
}
function updateMessage(message, isError) {
resultMessage.textContent = message;
resultMessage.style.color = isError ? 'red' : 'green';
}


submitGuessButton.addEventListener('click', checkGuess);
resetGameButton.addEventListener('click', function() {
    location.reload();
});

