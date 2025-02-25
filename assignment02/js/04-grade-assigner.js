let score = parseInt(prompt("Enter a number between 1 and 100:"));

if (isNaN(score) || score < 1 || score > 100) {
    console.log("Only numbers between 1 and 100 are accepted.");
} else if (score < 60) {
    console.log("You received an F");
} else if (score < 70) {
    console.log("You received a D");
} else if (score < 80) {
    console.log("You received a C");
} else if (score < 90) {
    console.log("You received a B");
} else {
    console.log("You received an A");
}
