// Sélection des éléments du DOM
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let operator = '';
let firstOperand = null;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
    display.textContent = currentInput;
}

// Fonction pour calculer le résultat
function calculate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = num1 + num2;
            break;
        case '-':
            currentInput = num1 - num2;
            break;
        case '*':
            currentInput = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                currentInput = num1 / num2;
            } else {
                currentInput = 'Error';
            }
            break;
    }

    firstOperand = null;
    operator = '';
}

// Gestion des clics sur les boutons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (!isNaN(value) || value === '.') {
            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            updateDisplay();
        } else if (value === 'C') {
            currentInput = '0';
            updateDisplay();
        } else if (value === '=') {
            if (firstOperand !== null && operator !== '') {
                calculate();
                updateDisplay();
            }
        } else {
            if (firstOperand === null) {
                firstOperand = currentInput;
                currentInput = '0';
            }
            operator = value;
        }
    });
});