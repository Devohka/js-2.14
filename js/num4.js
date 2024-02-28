const timeEl = document.querySelector(".time");
// const btnEl = document.querySelector(".btn");




timeEl.addEventListener("input", () => {
    const timer = timeEl.value * 1000;
    setTimeout(message, timer);
   
});

function message() {
    alert("Привіт я вивів повідомлення після вашого часу");
};



