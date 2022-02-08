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
*/

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