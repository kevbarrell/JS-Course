//STEP 1

function halfNumber(num) {
    let half = num / 2;
    console.log(`Half of ${num} is ${half}.`);
    return half;
}

halfNumber(5)

//STEP 2

function squareNumber(num) {
    let squared = num * num;
    console.log(`The result of squaring the number ${num} is ${squared}.`);
    return squared;
}

squareNumber(3);

//STEP 3

function percentOf(num1, num2) {
    let percentage = (num1 / num2) * 100;
    console.log(`${num1} is ${percentage}% of ${num2}.`);
    return percentage;
}

percentOf(2, 4);

//STEP 4

function findModulus(num1, num2) {
    let modulus = num1 % num2;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`);
    return modulus;
}

findModulus(10, 4);