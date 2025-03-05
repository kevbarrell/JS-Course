let coinFlip; 

let numFlips = parseInt(prompt("Enter the number of times to flip the coin:"), 10);

for (let i = 0; i < numFlips; i++) {

    coinFlip = Math.round(Math.random());

    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}