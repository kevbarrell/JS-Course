// ADD A FUNCTION CALLED CALCULATE

function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            return y !== 0 ? x / y : "Error: Cannot divide by zero!";
        default:
            return "Invalid operation.";
    }
}

function startCalculator() {
    let num1, num2, operation, result;

// COLLECT FIRST NUMBER FROM USER

    do {
        num1 = parseFloat(prompt("Enter the first number:"));
    } while (isNaN(num1));

// COLLECT SECOND NUMBER FROM USER

    do {
        num2 = parseFloat(prompt("Enter the second number:"));
    } while (isNaN(num2));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

    do {
        operation = prompt("Enter an operation (add, subtract, multiply, divide):").toLowerCase();

        if (operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide") {
            break;
        }

        alert("Invalid operation! Please enter add, subtract, multiply, or divide.");
        startCalculator();
    } while (true);

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

    result = calculate(num1, num2, operation);

    alert(`The result of ${operation}ing ${num1} and ${num2} is: ${result}`);
}

startCalculator();




