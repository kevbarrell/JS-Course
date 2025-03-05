// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// FUNCTION TO VALIDATE NUMBER
function validNumber(message, min, max) {
    let value;
    while (isNaN(value = parseFloat(prompt(message))) || value < min || value > max);
    return value;
}

// COLLECT VALUES FROM THE USER
investment = validNumber('Enter investment amount as xxxx.xx', 0.01, Infinity);
rate = validNumber('Enter interest rate as xx.x (Between 0 and 6%)', 0, 6);
years = validNumber('Enter the number of years you want to invest for (Between 1 and 30)', 1, 30);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);