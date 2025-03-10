function playGame() {
    let userChoice;

    while (true) {
        userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            break;
        }

        alert("Invalid choice! Please enter rock, paper, or scissors.");
    }

    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        alert(`Computer chose ${computerChoice}. It's a tie!`);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        alert(`Computer chose ${computerChoice}. You win!`);
    } else {
        alert(`Computer chose ${computerChoice}. You lose.`);
    }
}

playGame();
