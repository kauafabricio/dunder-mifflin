// SLIDESHOW CODES
document.addEventListener("DOMContentLoaded", function() {
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
var clickedControl;
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains("arrow-left");
        trocaImagem(isLeft);
        });
    });
    function trocaImagem (isLeft) {
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
}
    function autoTrocaImagem() {
    trocaImagem(false);
    setTimeout(autoTrocaImagem, 7000);
}
autoTrocaImagem();
});