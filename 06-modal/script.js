"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");
// const showModalBtn2 = document.getElementsByClassName("show-modal");

const openModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);