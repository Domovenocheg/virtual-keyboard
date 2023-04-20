"use strict";
const body = document.querySelector("body");
//body.innerHTML = ``; это чтобы динамически подгрузить контент, в нужный момент подключить
const buttons = document.querySelectorAll(".keyboard button");
const output = document.querySelector(".output");
const backspaceButton = document.querySelector(".backspace");
const delButton = document.querySelector(".del");
const altButton = document.querySelector(".alt");
const capslockButton = document.querySelector(".capslock");
const shiftButton = document.querySelector(".shift");
const ctrlButton = document.querySelector(".ctrl");
console.log(backspaceButton);
console.log(output);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if (value === "space") {
      output.value += " ";
    } else if (value === "tab") {
      output.value += "    ";
    } else if (value === "enter") {
      output.value += "\n";
    } else if (
      value === "backspace" ||
      value === "ctrl" ||
      value === "shift" ||
      value === "win" ||
      value === "alt" ||
      value === "capslock" ||
      value === "del"
    ) {
      return 0;
    } else {
      output.value += value;
    }
  });
});

//первый вариант - пишет все буквы, а backspase удаляет последнюю букву, но не перед курсором. а именно последнюю
/*
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
}); */
