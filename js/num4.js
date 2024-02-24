const timeEl = document.querySelector(".time");
const btnEl = document.querySelector(".btn");


const timer = Number.parseFloat(timeEl) * 1000;

btnEl.addEventListener("click", ()=> {
    setTimeout(message, timer);
});

function message() {
    alert("Привіт я вивів повідомлення після вашого часу");
};



