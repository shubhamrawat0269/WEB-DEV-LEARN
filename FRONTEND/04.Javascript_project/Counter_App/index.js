const counter = document.getElementById("counter");
const inputBox = document.getElementById("input-box");
const buttonReset = document.getElementById("button-reset");
const buttonDecrement = document.getElementById("button-decrement");
const buttonIncrement = document.getElementById("button-increment");

let counterValue = 0;
let stepValue = 1;
counter.innerHTML = counterValue;

function handleDecrement() {
  if (counterValue > 0 && !stepValue) {
    counterValue--;
    counter.innerHTML = counterValue;
  } else if (counterValue > 0 && stepValue) {
    counterValue -= stepValue;
    counter.innerHTML = counterValue;
  }
}

function handleIncrement() {
  if (!stepValue) {
    counterValue++;
    counter.innerHTML = counterValue;
  } else if (stepValue) {
    counterValue += parseInt(stepValue);
    counter.innerHTML = counterValue;
  }
}

inputBox.addEventListener("change", function () {
  stepValue = inputBox.value;
});

function handleReset() {
  counter.innerHTML = 0;
}
