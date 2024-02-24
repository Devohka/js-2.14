
let num = 0;

function counter() {
  let b = num++;
  if (b > 5) {
    clearTimeout(timerId);
  } else {
    alert(`лічильник ${b}`);
  }

  
};
const timerId = setInterval(counter, 1000);



