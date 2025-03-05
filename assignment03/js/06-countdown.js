let num = parseInt(prompt("Enter a number to start the countdown:"));

if (!isNaN(num)) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Please enter a valid number.");
}