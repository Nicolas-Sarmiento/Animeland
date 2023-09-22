const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const itemWidth = 20;
const itemsToShow = 5;
let currentIndex = 0;

function showItems() {
    const start = currentIndex;
    const end = Math.min(start + itemsToShow, slider.children.length);
    for (let i = 0; i < slider.children.length; i++) {
        if (i >= start && i < end) {
            slider.children[i].style.display = "inline-block";
        } else {
            slider.children[i].style.display = "none";
        }
    }
}

prevButton.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    showItems();
});

nextButton.addEventListener("click", () => {
    currentIndex = Math.min(slider.children.length - itemsToShow, currentIndex + 1);
    showItems();
});

showItems();
