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

const calcAge = (birthYear) => 2037 - birthYear;

const yearsRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1; // Standard number in Programming that has no meaning
    }
    // return `${firstName} is retires in ${retirement} years time`;
};

console.log(yearsRetirement(1991, "Jonas"));
console.log(yearsRetirement(1970, "Mike"));

const friends = ["Mike", "Bob", "Peter"];
console.log(friends);
console.log(friends[1]);
console.log(friends.length); // Number of elements not zero based
console.log(friends[friends.length - 1]); // To get the last element in array
friends[2] = "Jay";
// friends = ["Clare", "Ciara"] // This is NOT possible
console.log(friends);

const years = new Array(1991, 2002, 2034); // Array function using new key word
console.log(years);
console.log(years[2]);

const firstName = "Jonas";
const jonas = [firstName, "Schmidtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas[3]);

const calcAge = (birthYear) => 2037 - birthYear;
const birthYears = [1991, 1967, 2002, 2010, 2018];

console.log(calcAge(birthYears)); // NaN result because birthYears array is not a number

console.log(calcAge(birthYears[0]));
console.log(calcAge(birthYears[1]));
console.log(calcAge(birthYears[2]));
console.log(calcAge(birthYears[birthYears.length - 1]));

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[2]),
    calcAge(birthYears[years.length - 1]),
];

console.log(ages);

const friends = ["Mike", "Bob", "Peter"];
const newLength = friends.push("Johnny"); // Push is function returning a value, value = new length
friends.unshift("Carlos");
console.log(friends);
console.log(newLength);

friends.pop();
friends.shift();

console.log(friends);
friends.push(23);
console.log(friends.indexOf("Bob")); // If nothing matches, shows -1
console.log(friends.includes("Bob")); // ES6
console.log(friends.includes("23")); // false because includes is strict comparison
console.log(friends.includes(23)); // true

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
} else {
    console.log("You don't have a friend called Peter");
}

// Objects Key Value Pairs
const jonas = {
    firstName: "Jonas",
    lastName: "Schmidtmann",
    age: 2037 - 1991,
    job: "Teacher",
    friends: ["Michael", "Bob", "Joe"],
};

console.log(jonas);

console.log(jonas.firstName); // Dot notation
console.log(jonas["firstName"]); // Bracket Notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // In Bracket Notation, any expression can be inserted

const choice = prompt(`Do you want to know;
first name
last name
age
friends?`);

if (jonas[choice]) {
    console.log(jonas[choice]);
} else {
    console.log("It's not valid input");
}

jonas.location = "Portgal";
jonas["twitter"] = "@jonastiwitter";

console.log(jonas);

// Jonas has 3 friends and his best friend is called Michael
console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]} and second best friend is ${jonas["friends"][2]} `,
);

const jonas = {
    firstName: "Jonas",
    lastName: "Schmidtmann",
    age: 2037 - 1991,
    birthYear: 1990,
    job: "Teacher",
    friends: ["Michael", "Bob", "Joe"],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        // Property of jonas Object - expression
        return 2037 - birthYear;
    },
};

console.log(jonas.calcAge(2000));
console.log(jonas["calcAge"](1990));

const toto = {
    firstName: "Toto",
    lastName: "Tanaka",
    age: 2037 - 1990,
    birthYear: 1990,
    job: "Office worker",
    friends: ["Greg", "Tom", "Alan"],
    hasDriversLicense: true,

    calcAge: function() {
        // Property of jonas Object - expression
        console.log(this);
        return 2037 - this.birthYear;
    },
};

console.log(toto.calcAge());

const riki = {
    firstName: "Riki",
    lastName: "Tanaka",
    birthYear: 2025,
    job: "student",
    friends: ["Greg", "Tom", "Alan"],
    hasDriversLicense: false,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    challenge: function() {
        this.firstName = this.firstName;
        this.age = 2037 - this.birthYear;
        this.hasDriversLicense = this.hasDriversLicense;
        this.job = this.job;
        return `${riki.firstName} is ${this.calcAge()} years old ${
            riki.job
        } and ${
            riki.hasDriversLicense ? "he has" : "he doesn't"
        } have D license`;
    },
};

console.log(riki.age); // Not function

// Riki is a xx years old student. And he doesn't have a driver's license.
console.log(riki.challenge());

const mark = {
    firstName: "Mark",
    surName: "Miller",
    weight: 73,
    height: 1.74,
    BMI: function() {
        this.bmi = (this.weight / this.height ** 2).toFixed(2);
        return this.bmi;
    },
};

mark.BMI();
console.log(mark.bmi);

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

const jonasArray = [
    "Jonas",
    "Schmedmann",
    2037 - 1991,
    "teacher", ["Michael", "Peter", "Steven"],
    true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    // Filling types array
    // types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray);
}

console.log(types);

const years = [1999, 2010, 2003, 1989];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// Break
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

const jonasArray = [
    "Jonas",
    "Schmedmann",
    2037 - 1991,
    "teacher", ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let ex = 1; ex < 11; ex++) {
    console.log(`------ Starting exercise ${ex}`);

    for (let rep = 1; rep < 5; rep++) {
        console.log(`Repetition ${ex}-${rep}`);
    }
}