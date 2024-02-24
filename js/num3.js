const titleEl = document.querySelector(".title");

const btnsEl = document.querySelector(".btn-elements");
const btnsBigEl = document.querySelector(".btn-element-bigNum");
const btnEl = document.querySelector(".btn-element");
const btnSmolEl = document.querySelector(".btn-element-smolNum");

let numPoints = 0;


function movingEl() {
    const left1 = Math.random() * (200 - 1) + 1;
    const left2 = Math.random() * (215 - 1) + 1;
    const left3 = Math.random() * (500 - 1) + 1;
    btnsEl.style.left = `${left2}px`;
    btnsBigEl.style.left = `${left3}px`;
    btnEl.style.left = `${left2}px`;
    btnSmolEl.style.left = `${left1}px`;
};

setInterval(movingEl, 500);

btnsEl.addEventListener("click", () => {
    numPoints = numPoints + 5;
    titleEl.textContent = `кількіть очок: ${numPoints}`;
});

btnsBigEl.addEventListener("click", () => {
    numPoints = numPoints + 15;
    titleEl.textContent = `кількіть очок: ${numPoints}`;
});

btnEl.addEventListener("click", () => {
    numPoints = numPoints + 5;
    titleEl.textContent = `кількіть очок: ${numPoints}`;
});

btnSmolEl.addEventListener("click", () => {
    numPoints = numPoints + 1;
    titleEl.textContent = `кількіть очок: ${numPoints}`;
});