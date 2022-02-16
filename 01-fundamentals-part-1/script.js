/*
let js = "amazing";

if (js === "amazing") {
    alert("JS is fun!");
}

window.console.log(49 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "kotaro";
console.log(firstName);

let $hero = "Ultraman";
console.log($hero);

// Describable
let myFirstJob = "programmer";
let mySecondJob = "teacher";

// Bad practice
let job1 = "programme";
let job2 = "teacher";

true;
console.log(true);
let javaScritptIsFun = true;
javaScritptIsFun = "true"; // Dynamic typing
console.log(javaScritptIsFun);

console.log(typeof javaScritptIsFun);

let thisIsUndefined; // Declared but not initialised
console.log(thisIsUndefined);
console.log(typeof thisIsUndefinded);

thisIsUndefined = "Not undefined anymore";
console.log(typeof thisIsUndefined);

console.log(typeof null);

let age = 30;
age = 45; // Reassigning / Mutating

const birthYear = 1991;
// birthYear = 1992;

var job = "programmer";
job = "teacher";
console.log(job);

lastName = "tanaka"; // This is possible
console.log(lastName);

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmidtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 19);

const isFullAge = ageSarah >= 18;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 <- right to left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const currentYear = 2037;
const jonas =
    "I'm " +
    firstName +
    ", a " +
    (currentYear - birthYear) +
    " year old " +
    job;

// Template Literals
const jonasTemp = `I'm ${firstName}, a ${
    currentYear - birthYear
} year old ${job}`;

console.log(jonas);
console.log(jonasTemp);
console.log(`Just a regular string`);

console.log("string \nthis is second line"); // \n\
console.log(`This is multiple line
for template literal`);

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
    // More common way of doing
    console.log("Sarah can start driving license");
} else {
    // const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${18 - age} years`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear)); // Original value doesn't change
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(typeof String(23));

// Type Coercion
console.log("I'm " + 23 + " years old"); // number to string
console.log("23" - "10" - 3); // string to number
console.log("2" * 6); // string to number
console.log(30 / "10"); // string to number

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean(""));
console.log(Boolean({})); // Empty object is true

const money = 1;

if (money) {
    console.log("you have money");
} else {
    console.log("you don't have money");
}

let height;

if (height) {
    console.log("Yay, height is declared and initialised");
} else {
    console.log("height must be undefined");
}

const age = 18;

if (age === 18) console.log("You just became an adult"); // Strict
if (age == 18) console.log("You just became an adult"); // Loose - Avoid using this

let yourFavouritNum = Number(prompt("What's your favourite number?"));
console.log(yourFavouritNum);
console.log(typeof yourFavouritNum);

if (yourFavouritNum === 23) {
    console.log("Cool, 23 is an amazing number");
} else if (yourFavouritNum === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 7 or 23");
}

if (yourFavouritNum !== 23) console.log("Why not 23?");

const hasDrivingLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

console.log(hasDrivingLicense || hasGoodVision || isTired);
console.log(hasDrivingLicense && hasGoodVision && !isTired);

const day = "Sunda";

switch (day) {
    case "Monday":
        console.log("Plan course structure");
        break;
    case "Tuesday":
        console.log("Go to coding meetup");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write examples");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy your weekend");
        break;

    default:
        console.log("Not a valid day");
}

3 + 4; // Expression = piece of code produces a value
1991;
true && false;

if (23 > 10) {
    // Statement = bigger code that doesn't produce a value
    const str = "23 is bigger than 10";
}

// Important to know the difference between expressions and statements because JS expects these in different places. For example, you can only use expression in template literal.
console.log(`I'm ${2022 - 1999} years old`);

const age = 25;
// Ternary operator
age >= 23 ?
    console.log("I'd like to drink wine") :
    console.log("I'd like to drink water");

const drink = age >= 23 ? "wine" : "water";
console.log(`I'd like to drink ${drink}`);
console.log(`I'd like to drink ${age >= 23 ? "beer" : "tea"}`); // Ternary operator in template literal because it is expression

// Normal if else
let drink2;

if (age >= 23) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
*/