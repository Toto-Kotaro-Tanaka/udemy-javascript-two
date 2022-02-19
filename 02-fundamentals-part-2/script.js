"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // Possible reserve word

function logger() {
    console.log("My name is Jonas");
}

logger(); // calling, running, invoking, executing function
console.log(typeof logger()); // <-- Undefined
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice);

const mixJuice = fruitProcessor(3, 6);
console.log(mixJuice);

// Function Declaration

const age1 = calcAge1(1990); // Can call the function before initialisation

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

console.log(age1);

// Function Expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
};

console.log(calcAge2(2000));

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} is retires in ${retirement} years time`;
};

console.log(yearsRetirement(1991, "Jonas"));
console.log(yearsRetirement(1980, "Bob"));
*/
function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));