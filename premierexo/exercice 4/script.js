const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75
};

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertButton = document.getElementById('convert');
const resultDisplay = document.getElementById('result');

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = 'Veuillez entrer un montant valide.';
        return;
    }

    if (exchangeRates[from] && exchangeRates[to]) {
        const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
        displayConvertedAmount(amount, from, convertedAmount, to);
    } else {
        fetchExchangeRates(from, to, amount);
    }
}

function displayConvertedAmount(amount, from, convertedAmount, to) {
    resultDisplay.textContent = `${amount} ${from} équivaut à ${convertedAmount.toFixed(2)} ${to}.`;
    resultDisplay.classList.add('result-animation');
}

async function fetchExchangeRates(from, to, amount) {
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    
    if (rate) {
        const convertedAmount = amount * rate;
        displayConvertedAmount(amount, from, convertedAmount, to);
    } else {
        resultDisplay.textContent = 'Impossible de récupérer les taux de change actuels.';
    }
}

convertButton.addEventListener('click', convertCurrency);