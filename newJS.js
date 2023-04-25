const buttons = document.querySelectorAll(".keyboard button");
const notAllButtons = document.querySelectorAll(".other");
const keyboard = document.querySelector(".keyboard");
const output = document.querySelector(".output");
const backspaceButton = document.querySelector(".backspace");
const delButton = document.querySelector(".del");
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
let keys = document.querySelectorAll(".container .keyboard .row button"),
  keyPad = document.querySelector(".container .keyboard"),
  display = document.querySelector(".container .output");
let keysCapitalize = document.querySelectorAll(
  ".container .keyboard .row .other"
);

if (keys && keyPad && display) {
  let capsLockMode = false;
  console.log(capsLockMode);
  keys.forEach((key) => {
    key.addEventListener("click", function () {
      console.log(this.value);
      if (this.classList.contains("caps")) {
        this.classList.toggle("active");
        keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
        capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
        console.log(capsLockMode);
      } else if (this.classList.contains("enter")) {
        display.value += "\n";
      } else if (this.classList.contains("tab")) {
        display.value += "    ";
      } else if (this.classList.contains("space")) {
        display.value += " ";
      } else if (this.classList.contains("backspace")) {
        let str = display.value;
        display.value = str.substring(0, str.length - 1);
      } else {
        if (capsLockMode) {
          display.value += this.value.toUpperCase();
        } else {
          display.value += this.value.toLowerCase();
        }
      }
    });
  });
}

leftShiftButton.addEventListener("mousedown", function (event) {
  keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
});
leftShiftButton.addEventListener("mouseup", function (event) {
  keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
});
rightShiftButton.addEventListener("mousedown", function (event) {
  keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
});
rightShiftButton.addEventListener("mouseup", function (event) {
  keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
});
let capsLockMode = false;
document.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event.code);

  if (event.code === "Space") {
    display.value += " ";
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
    capslockButton.classList.toggle("active");
    keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
    capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
    capslockButton.classList.add("highlight");
  } else if (event.code === "Tab") {
    output.value += "    ";
    tabButton.classList.add("highlight");
  } else if (event.code === "Backspace") {
    let str = display.value;
    display.value = str.substring(0, str.length - 1);
    backspaceButton.classList.add("highlight");
  } else if (event.code === "Enter") {
    output.value += "\n";
    enterButton.classList.add("highlight");
  } else if (event.code === "Delete") {
    delButton.classList.add("highlight");
  } else if (event.code) {
    let key = event.key.toLowerCase();
    console.log(event.key);
    if (capsLockMode) {
      notAllButtons.forEach(function (button) {
        if (button.textContent.toLowerCase() === key) {
          key = event.key.toUpperCase();
          button.classList.add("highlight");
          output.value += key;
        }
      });
      console.log(capsLockMode);
    } else {
      notAllButtons.forEach(function (button) {
        if (button.textContent.toLowerCase() === key) {
          button.classList.add("highlight");
          output.value += key;
        }
        console.log(capsLockMode);
      });
    }
  }
});
document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.code === "Space") {
    spaceButton.classList.remove("highlight");
  } else if (event.code === "ShiftRight") {
    rightShiftButton.classList.remove("highlight");
  } else if (event.code === "ShiftLeft") {
    notAllButtons.forEach(
      (el) => (el.innerHTML = `${el.textContent.toLowerCase()}`)
    );
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
  } else if (event.code === "Delete") {
    delButton.classList.remove("highlight");
  } else {
    const key = event.key.toLowerCase();
    notAllButtons.forEach(function (button) {
      if (button.textContent.toLowerCase() === key) {
        button.classList.remove("highlight");
      }
    });
  }
});
