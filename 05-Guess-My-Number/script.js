"use strict";

/* Note
const message = document.querySelector(".message");

console.log(message);

message.innerHTML = "This is innerHTML";
message.textContent = "This is text content";
*/
document.querySelector(".message").textContent;
document.querySelector(".message").textContent = "Correct Number";
document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "5";
document.querySelector(".guess").value = "10"; // value property
console.log(document.querySelector(".guess").value);