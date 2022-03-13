"use strict";

/* Note
const message = document.querySelector(".message");

console.log(message);

message.innerHTML = "This is innerHTML";
message.textContent = "This is text content";

document.querySelector(".message").textContent;
document.querySelector(".message").textContent = "Correct Number";
document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "5";
document.querySelector(".guess").value = "10"; // value property
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess, guess);

    // When no input
    if (!guess) {
        document.querySelector(".message").textContent = "No number...";

        // When number matches
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "You got it correct!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "35rem";

        // When number is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You've lost the game...";
            document.querySelector(".score").textContent = 0;
        }

        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You've lost the game...";
            document.querySelector(".score").textContent = 0;
        }
    }
});