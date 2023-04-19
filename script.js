"use strict";

const buttons = document.querySelectorAll(".keyboard button");
const output = document.querySelector(".output");
console.log(output);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if (value === "space") {
      output.value += " ";
    } else if (value === "backspace") {
      output.value = output.value.slice(0, -1);
    } else {
      output.value += value;
    }
  });
});
