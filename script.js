"use strict";
const body = document.querySelector("body");
//body.innerHTML = ``; это чтобы динамически подгрузить контент, в нужный момент подключить
const buttons = document.querySelectorAll(".keyboard button");
const notAllButtons = document.querySelectorAll(".other");
const keyboard = document.querySelector(".keyboard");
const output = document.querySelector(".output");
const backspaceButton = document.querySelector(".backspace");
const delButton = document.querySelectorAll(".del");
const altLeftButton = document.querySelector(".alt-left");
const altRightButton = document.querySelector(".alt-right");
const capslockButton = document.querySelector(".capslock");
const leftShiftButton = document.querySelector(".shift-left");
const rightShiftButton = document.querySelector(".shift-right");
const ctrlRightButton = document.querySelector(".ctrl-right");
const ctrlLeftButton = document.querySelector(".ctrl-left");
const spaceButton = document.querySelector(".space");
const winButton = document.querySelector(".win");
const arrowUp = document.querySelector(".arrow-up");
const arrowLeft = document.querySelector(".arrow-left");
const arrowDown = document.querySelector(".arrow-down");
const arrowRight = document.querySelector(".arrow-right");
const tabButton = document.querySelector(".tab");
const enterButton = document.querySelector(".enter");
//console.log(backspaceButton);
//console.log(delButton);
//console.log(altButton);
//console.log(output);
//console.log(shiftButton);
//console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if (value === "space") {
      output.value += " ";
    } else if (value === "tab") {
      output.value += "    ";
    } else if (value === "enter") {
      output.value += "\n";
    } else {
      output.value += value;
    }
  });
});

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event.code);
  if (event.code === "Space") {
    output.value += " ";
    spaceButton.classList.add("highlight");
  } else if (event.code === "ShiftRight") {
    rightShiftButton.classList.add("highlight");
  } else if (event.code === "ShiftLeft") {
    leftShiftButton.classList.add("highlight");
  } else if (event.code === "ControlLeft") {
    ctrlLeftButton.classList.add("highlight");
  } else if (event.code === "ControlRight") {
    ctrlRightButton.classList.add("highlight");
  } else if (event.code === "AltLeft") {
    altLeftButton.classList.add("highlight");
  } else if (event.code === "AltRight") {
    altRightButton.classList.add("highlight");
  } else if (event.code === "MetaLeft") {
    winButton.classList.add("highlight");
  } else if (event.code === "ArrowUp") {
    output.value += "▲";
    arrowUp.classList.add("highlight");
  } else if (event.code === "ArrowDown") {
    output.value += "▼";
    arrowDown.classList.add("highlight");
  } else if (event.code === "ArrowLeft") {
    output.value += "◄";
    arrowLeft.classList.add("highlight");
  } else if (event.code === "ArrowRight") {
    output.value += "►";
    arrowRight.classList.add("highlight");
  } else if (event.code === "CapsLock") {
    capslockButton.classList.add("highlight");
  } else if (event.code === "Tab") {
    output.value += "    ";
    tabButton.classList.add("highlight");
  } else if (event.code === "Backspace") {
    backspaceButton.classList.add("highlight");
  } else if (event.code === "Enter") {
    output.value += "\n";
    enterButton.classList.add("highlight");
  }
});
document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.code === "Space") {
    spaceButton.classList.remove("highlight");
  } else if (event.code === "ShiftRight") {
    rightShiftButton.classList.remove("highlight");
  } else if (event.code === "ShiftLeft") {
    leftShiftButton.classList.remove("highlight");
  } else if (event.code === "ControlLeft") {
    ctrlLeftButton.classList.remove("highlight");
  } else if (event.code === "ControlRight") {
    ctrlRightButton.classList.remove("highlight");
  } else if (event.code === "AltLeft") {
    altLeftButton.classList.remove("highlight");
  } else if (event.code === "AltRight") {
    altRightButton.classList.remove("highlight");
  } else if (event.code === "MetaLeft") {
    winButton.classList.remove("highlight");
  } else if (event.code === "ArrowUp") {
    arrowUp.classList.remove("highlight");
  } else if (event.code === "ArrowDown") {
    arrowDown.classList.remove("highlight");
  } else if (event.code === "ArrowLeft") {
    arrowLeft.classList.remove("highlight");
  } else if (event.code === "ArrowRight") {
    arrowRight.classList.remove("highlight");
  } else if (event.code === "CapsLock") {
    capslockButton.classList.remove("highlight");
  } else if (event.code === "Tab") {
    tabButton.classList.remove("highlight");
  } else if (event.code === "Backspace") {
    backspaceButton.classList.remove("highlight");
  } else if (event.code === "Enter") {
    enterButton.classList.remove("highlight");
  }
});
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase(); // приведение клавиши к нижнему регистру
  console.log(key);
  notAllButtons.forEach(function (button) {
    if (button.textContent.toLowerCase() === key) {
      button.classList.add("highlight");
      output.value += key;
    }
  });
  delButton.forEach(function (button) {
    if (event.code === "Delete") {
      button.classList.add("highlight");
    }
  });
});
document.addEventListener("keyup", function (event) {
  event.preventDefault();
  const key = event.key.toLowerCase(); // приведение клавиши к нижнему регистру
  notAllButtons.forEach(function (button) {
    if (button.textContent.toLowerCase() === key) {
      button.classList.remove("highlight");
    }
  });
  delButton.forEach(function (button) {
    if (event.code === "Delete") {
      button.classList.remove("highlight");
    }
  });
});

/* else if (event.code === "Space") {
  spaceButton.classList.add("highlight");
} */

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
