"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // Possible reserve word
*/

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