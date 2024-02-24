const boxEl = document.querySelector(".box1");
const boxElRes = document.querySelector(".box2");

setInterval(changeColor, 1000);

function changeColor() {
    const red = Math.random() * (255 - 1) + 1;
    const green = Math.random() * (255 - 1) + 1;
    const blue = Math.random() * (255 - 1) + 1;
    boxEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    boxElRes.style.width = `${red}px`;
    boxElRes.style.height = `${red}px`;
};


