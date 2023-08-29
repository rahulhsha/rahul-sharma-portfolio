// script.js

document.addEventListener("DOMContentLoaded", function () {
    const changeColorButton = document.getElementById("changeColorButton");
    const header = document.querySelector("header");

    changeColorButton.addEventListener("click", function () {
        const randomColor = getRandomColor();
        header.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
