"use strict";
const body = document.querySelector("body");
body.innerHTML = `<div class="container">
<h1 class="title">RSS Virtual Keyboard</h1>
<textarea
  class="textarea output"
  name=""
  id=""
  cols="90"
  rows="12"
></textarea>
<div class="keyboard">
  <div class="first-row row">
    <button class="other" value="\`">\`</button>
    <button class="other one" value="1">1</button>
    <button class="other" value="2">2</button>
    <button class="other" value="3">3</button>
    <button class="other" value="4">4</button>
    <button class="other" value="5">5</button>
    <button class="other" value="6">6</button>
    <button class="other" value="7">7</button>
    <button class="other" value="8">8</button>
    <button class="other" value="9">9</button>
    <button class="other" value="0">0</button>
    <button class="other" value="-">-</button>
    <button class="other" value="=">=</button>
    <button class="backspace backspace">BackSpace</button>
  </div>
  <div class="second-row row">
    <button class="tab">Tab</button>
    <button class="other" value="q">q</button>
    <button class="other" value="w">w</button>
    <button class="other" value="e">e</button>
    <button class="other" value="r">r</button>
    <button class="other" value="t">t</button>
    <button class="other" value="y">y</button>
    <button class="other" value="u">u</button>
    <button class="other" value="i">i</button>
    <button class="other" value="o">o</button>
    <button class="other" value="p">p</button>
    <button class="other" value="[">[</button>
    <button class="other" value="]">]</button>
    <button class="other" value="\\">\\</button>
    <button class="del">Del</button>
  </div>
  <div class="third-row row">
    <button class="capslock caps">CapsLock</button>
    <button class="other" value="a">a</button>
    <button class="other" value="s">s</button>
    <button class="other" value="d">d</button>
    <button class="other" value="f">f</button>
    <button class="other" value="g">g</button>
    <button class="other" value="h">h</button>
    <button class="other" value="j">j</button>
    <button class="other" value="k">k</button>
    <button class="other" value="l">l</button>
    <button class="other" value=";">;</button>
    <button class="other" value="'">'</button>
    <button class="enter" value="enter">Enter</button>
  </div>
  <div class="forth-row row">
    <button class="shift-left shift">Shift</button>
    <button class="other" value="z">z</button>
    <button class="other" value="x">x</button>
    <button class="other" value="c">c</button>
    <button class="other" value="v">v</button>
    <button class="other" value="b">b</button>
    <button class="other" value="n">n</button>
    <button class="other" value="m">m</button>
    <button class="other" value=",">,</button>
    <button class="other" value=".">.</button>
    <button class="other" value="/">/</button>
    <button class="arrow arrow-up" value="▲">▲</button>
    <button class="shift-right shift">Shift</button>
  </div>
  <div class="fifth-row row">
    <button class="ctrl-left ctrl">Ctrl</button>
    <button class="win">Win</button>
    <button class="alt alt-left">Alt</button>
    <button class="space" value="space">Space</button>
    <button class="alt-right alt">Alt</button>
    <button class="arrow arrow-left" value="◄">◄</button>
    <button class="arrow arrow-down" value="▼">▼</button>
    <button class="arrow arrow-right" value="►">►</button>
    <button class="ctrl-right ctrl">Ctrl</button>
  </div>
</div>
<p>
  Клавиатура создана в операционной системе Windows <br />
  Для переключения языка комбинация: левыe ctrl + alt
</p>
</div>`;

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

const keys = document.querySelectorAll(".container .keyboard .row button"),
  keyPad = document.querySelector(".container .keyboard"),
  display = document.querySelector(".container .output");
const keysCapitalize = document.querySelectorAll(
  ".container .keyboard .row .other"
);
// работа с виртаульной клавой, нажимаешь на элементы и чтото происходит
let capsLockMode = false;
//console.log(capsLockMode);
keys.forEach((key) => {
  key.addEventListener("click", function () {
    //console.log(this.value);
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
    } else if (this.classList.contains("del")) {
      //логика delete
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

// добавление логики: подсвечивания клавиш и взаимодействие с клавой в принципе
document.addEventListener("keydown", function (event) {
  console.log(event.code);

  if (event.code === "Space") {
    event.preventDefault();
    display.value += " ";
    spaceButton.classList.add("highlight");
  } else if (event.code === "ShiftRight") {
    event.preventDefault();
    rightShiftButton.classList.add("highlight");
    shiftButtonDown();
  } else if (event.code === "ShiftLeft") {
    leftShiftButton.classList.add("highlight");
    shiftButtonDown();
  } else if (event.code === "ControlLeft") {
    ctrlLeftButton.classList.add("highlight");
  } else if (event.code === "ControlRight") {
    ctrlRightButton.classList.add("highlight");
  } else if (event.code === "AltLeft") {
    event.preventDefault();
    altLeftButton.classList.add("highlight");
  } else if (event.code === "AltRight") {
    event.preventDefault();
    altRightButton.classList.add("highlight");
  } else if (event.code === "MetaLeft") {
    event.preventDefault();
    winButton.classList.add("highlight");
  } else if (event.code === "ArrowUp") {
    event.preventDefault();
    output.value += "▲";
    arrowUp.classList.add("highlight");
  } else if (event.code === "ArrowDown") {
    event.preventDefault();
    output.value += "▼";
    arrowDown.classList.add("highlight");
  } else if (event.code === "ArrowLeft") {
    event.preventDefault();
    output.value += "◄";
    arrowLeft.classList.add("highlight");
  } else if (event.code === "ArrowRight") {
    event.preventDefault();
    output.value += "►";
    arrowRight.classList.add("highlight");
  } else if (event.code === "CapsLock") {
    event.preventDefault();
    capslockButton.classList.toggle("active");
    keysCapitalize.forEach((key) => key.classList.toggle("uppercase"));
    capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
    capslockButton.classList.add("highlight");
  } else if (event.code === "Tab") {
    event.preventDefault();
    output.value += "    ";
    tabButton.classList.add("highlight");
  } else if (event.code === "Backspace") {
    //let str = display.value;
    //display.value = str.substring(0, str.length - 1);
    backspaceButton.classList.add("highlight");
  } else if (event.code === "Enter") {
    event.preventDefault();
    output.value += "\n";
    enterButton.classList.add("highlight");
  } else if (event.code === "Delete") {
    delButton.classList.add("highlight");
  } else if (event.code) {
    event.preventDefault();
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
    shiftButtonUp();
  } else if (event.code === "ShiftLeft") {
    leftShiftButton.classList.remove("highlight");
    shiftButtonUp();
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
console.log(keysCapitalize);
/// изменение цифр на знаки
leftShiftButton.addEventListener("mousedown", shiftButtonDown);
leftShiftButton.addEventListener("mouseup", shiftButtonUp);
rightShiftButton.addEventListener("mousedown", shiftButtonDown);
rightShiftButton.addEventListener("mouseup", shiftButtonUp);

function shiftButtonDown() {
  keysCapitalize.forEach((key) => key.classList.add("uppercase"));
  keysCapitalize.forEach((key) => {
    if (key.value === "1") key.innerHTML = "!";
    else if (key.value === "2") key.innerHTML = "@";
    else if (key.value === "3") key.innerHTML = "#";
    else if (key.value === "4") key.innerHTML = "$";
    else if (key.value === "5") key.innerHTML = "%";
    else if (key.value === "6") key.innerHTML = "^";
    else if (key.value === "7") key.innerHTML = "&";
    else if (key.value === "8") key.innerHTML = "*";
    else if (key.value === "9") key.innerHTML = "(";
    else if (key.value === "0") key.innerHTML = ")";
    else if (key.value === "-") key.innerHTML = "_";
    else if (key.value === "=") key.innerHTML = "+";
    else if (key.value === "`") key.innerHTML = "~";
    else if (key.value === "[") key.innerHTML = "{";
    else if (key.value === "]") key.innerHTML = "}";
    else if (key.value === ";") key.innerHTML = ":";
    else if (key.value === "'") key.innerHTML = '"';
    else if (key.value === "\\") key.innerHTML = "|";
    else if (key.value === ",") key.innerHTML = "<";
    else if (key.value === ".") key.innerHTML = ">";
    else if (key.value === "/") key.innerHTML = "?";
  });
  capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
}
function shiftButtonUp() {
  keysCapitalize.forEach((key) => key.classList.remove("uppercase"));
  keysCapitalize.forEach((key) => {
    if (key.classList.contains("one")) key.innerHTML = "1";
    else if (key.value === "2") key.innerHTML = "2";
    else if (key.value === "3") key.innerHTML = "3";
    else if (key.value === "4") key.innerHTML = "4";
    else if (key.value === "5") key.innerHTML = "5";
    else if (key.value === "6") key.innerHTML = "6";
    else if (key.value === "7") key.innerHTML = "7";
    else if (key.value === "8") key.innerHTML = "8";
    else if (key.value === "9") key.innerHTML = "9";
    else if (key.value === "0") key.innerHTML = "0";
    else if (key.value === "-") key.innerHTML = "-";
    else if (key.value === "=") key.innerHTML = "=";
    else if (key.value === "`") key.innerHTML = "`";
    else if (key.value === "[") key.innerHTML = "[";
    else if (key.value === "]") key.innerHTML = "]";
    else if (key.value === ";") key.innerHTML = ";";
    else if (key.value === "'") key.innerHTML = "'";
    else if (key.value === "\\") key.innerHTML = "\\";
    else if (key.value === ",") key.innerHTML = ",";
    else if (key.value === ".") key.innerHTML = ".";
    else if (key.value === "/") key.innerHTML = "/";
  });
  capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
}
