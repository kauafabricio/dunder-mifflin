// SLIDESHOW CODES
document.addEventListener("DOMContentLoaded", function() {
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains("arrow-left");
        if (isLeft) {
            currentItem -=1;
        } else {
            currentItem +=1;
        }
        if (currentItem > maxItems -1) {
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxItems - 1;
        }
        items.forEach((item) => item.classList.remove("first-item"));
        items[currentItem].scrollIntoView({
            inline: "center", behavior: "smooth"
        });
        items[currentItem].classList.add("first-item");
        });
    });

// MODAL

const modal = document.getElementById("modal");
const buttonModal = document.querySelector(".sorteio-button");
const closeButton= document.getElementById("closeButton");

buttonModal.onclick = function () {
    modal.showModal();
}
closeButton.onclick = function () {
    modal.close();
}
});

