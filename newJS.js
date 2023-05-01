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
    keyboard.classList.contains("layout")
      ? shiftButtonDownLayout()
      : shiftButtonDown();
  } else if (event.code === "ShiftLeft") {
    leftShiftButton.classList.add("highlight");
    keyboard.classList.contains("layout")
      ? shiftButtonDownLayout()
      : shiftButtonDown();
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
    keyboard.classList.contains("layout")
      ? shiftButtonUpLayout()
      : shiftButtonUp();
  } else if (event.code === "ShiftLeft") {
    leftShiftButton.classList.remove("highlight");
    keyboard.classList.contains("layout")
      ? shiftButtonUpLayout()
      : shiftButtonUp();
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

/// изменение цифр на знаки и uppercase для букв на english layout
leftShiftButton.addEventListener("mousedown", shiftButtonDown);
leftShiftButton.addEventListener("mouseup", shiftButtonUp);
rightShiftButton.addEventListener("mousedown", shiftButtonDown);
rightShiftButton.addEventListener("mouseup", shiftButtonUp);

function shiftButtonDown() {
  keysCapitalize.forEach((key) => key.classList.add("uppercase"));
  keysCapitalize.forEach((key) => {
    if (key.value === "1") {
      key.innerHTML = "!";
      key.value = "!";
    } else if (key.value === "2") {
      key.innerHTML = "@";
      key.value = "@";
    } else if (key.value === "3") {
      key.innerHTML = "#";
      key.value = "#";
    } else if (key.value === "4") {
      key.innerHTML = "$";
      key.value = "$";
    } else if (key.value === "5") {
      key.innerHTML = "%";
      key.value = "%";
    } else if (key.value === "6") {
      key.innerHTML = "^";
      key.value = "^";
    } else if (key.value === "7") {
      key.innerHTML = "&";
      key.value = "&";
    } else if (key.value === "8") {
      key.innerHTML = "*";
      key.value = "*";
    } else if (key.value === "9") {
      key.innerHTML = "(";
      key.value = "(";
    } else if (key.value === "0") {
      key.innerHTML = ")";
      key.value = ")";
    } else if (key.value === "-") {
      key.innerHTML = "_";
      key.value = "_";
    } else if (key.value === "=") {
      key.innerHTML = "+";
      key.value = "+";
    } else if (key.value === "`") {
      key.innerHTML = "~";
      key.value = "~";
    } else if (key.value === "[") {
      key.innerHTML = "{";
      key.value = "{";
    } else if (key.value === "]") {
      key.innerHTML = "}";
      key.value = "}";
    } else if (key.value === ";") {
      key.innerHTML = ":";
      key.value = ":";
    } else if (key.value === "'") {
      key.innerHTML = '"';
      key.value = '"';
    } else if (key.value === "\\") {
      key.innerHTML = "|";
      key.value = "|";
    } else if (key.value === ",") {
      key.innerHTML = "<";
      key.value = "<";
    } else if (key.value === ".") {
      key.innerHTML = ">";
      key.value = ">";
    } else if (key.value === "/") {
      key.innerHTML = "?";
      key.value = "?";
    }
  });
  capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
}
function shiftButtonUp() {
  keysCapitalize.forEach((key) => key.classList.remove("uppercase"));
  keysCapitalize.forEach((key) => {
    if (key.value === "!") {
      key.innerHTML = "1";
      key.value = "1";
    } else if (key.value === "@") {
      key.innerHTML = "2";
      key.value = "2";
    } else if (key.value === "#") {
      key.innerHTML = "3";
      key.value = "3";
    } else if (key.value === "$") {
      key.innerHTML = "4";
      key.value = "4";
    } else if (key.value === "%") {
      key.innerHTML = "5";
      key.value = "5";
    } else if (key.value === "^") {
      key.innerHTML = "6";
      key.value = "6";
    } else if (key.value === "&") {
      key.innerHTML = "7";
      key.value = "7";
    } else if (key.value === "*") {
      key.innerHTML = "8";
      key.value = "8";
    } else if (key.value === "(") {
      key.innerHTML = "9";
      key.value = "9";
    } else if (key.value === ")") {
      key.innerHTML = "0";
      key.value = "0";
    } else if (key.value === "_") {
      key.innerHTML = "-";
      key.value = "-";
    } else if (key.value === "+") {
      key.innerHTML = "=";
      key.value = "=";
    } else if (key.value === "~") {
      key.innerHTML = "`";
      key.value = "`";
    } else if (key.value === "{") {
      key.innerHTML = "[";
      key.value = "[";
    } else if (key.value === "}") {
      key.innerHTML = "]";
      key.value = "]";
    } else if (key.value === ":") {
      key.innerHTML = ";";
      key.value = ";";
    } else if (key.value === '"') {
      key.innerHTML = "'";
      key.value = "'";
    } else if (key.value === "|") {
      key.innerHTML = "\\";
      key.value = "\\";
    } else if (key.value === "<") {
      key.innerHTML = ",";
      key.value = ",";
    } else if (key.value === ">") {
      key.innerHTML = ".";
      key.value = ".";
    } else if (key.value === "?") {
      key.innerHTML = "/";
      key.value = "/";
    }
  });
  capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
}
/// изменение цифр на знаки и uppercase для букв на russian layout
function shiftButtonDownLayout() {
  keysCapitalize.forEach((key) => key.classList.add("uppercase"));
  keysCapitalize.forEach((key) => {
    if (key.value === "1") {
      key.innerHTML = "!";
      key.value = "!";
    } else if (key.value === "2") {
      key.innerHTML = '"';
      key.value = '"';
    } else if (key.value === "3") {
      key.innerHTML = "№";
      key.value = "№";
    } else if (key.value === "4") {
      key.innerHTML = ";";
      key.value = ";";
    } else if (key.value === "5") {
      key.innerHTML = "%";
      key.value = "%";
    } else if (key.value === "6") {
      key.innerHTML = ":";
      key.value = ":";
    } else if (key.value === "7") {
      key.innerHTML = "?";
      key.value = "?";
    } else if (key.value === "8") {
      key.innerHTML = "*";
      key.value = "*";
    } else if (key.value === "9") {
      key.innerHTML = "(";
      key.value = "(";
    } else if (key.value === "0") {
      key.innerHTML = ")";
      key.value = ")";
    } else if (key.value === "-") {
      key.innerHTML = "_";
      key.value = "_";
    } else if (key.value === "=") {
      key.innerHTML = "+";
      key.value = "+";
    } else if (key.value === "\\") {
      key.innerHTML = "/";
      key.value = "/";
    } else if (key.value === ".") {
      key.innerHTML = ",";
      key.value = ",";
    }
  });
  capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
}
function shiftButtonUpLayout() {
  keysCapitalize.forEach((key) => key.classList.remove("uppercase"));
  keysCapitalize.forEach((key) => {
    if (key.value === "!") {
      key.innerHTML = "1";
      key.value = "1";
    } else if (key.value === '"') {
      key.innerHTML = "2";
      key.value = "2";
    } else if (key.value === "№") {
      key.innerHTML = "3";
      key.value = "3";
    } else if (key.value === ";") {
      key.innerHTML = "4";
      key.value = "4";
    } else if (key.value === "%") {
      key.innerHTML = "5";
      key.value = "5";
    } else if (key.value === ":") {
      key.innerHTML = "6";
      key.value = "6";
    } else if (key.value === "?") {
      key.innerHTML = "7";
      key.value = "7";
    } else if (key.value === "*") {
      key.innerHTML = "8";
      key.value = "8";
    } else if (key.value === "(") {
      key.innerHTML = "9";
      key.value = "9";
    } else if (key.value === ")") {
      key.innerHTML = "0";
      key.value = "0";
    } else if (key.value === "_") {
      key.innerHTML = "-";
      key.value = "-";
    } else if (key.value === "+") {
      key.innerHTML = "=";
      key.value = "=";
    } else if (key.value === "/") {
      key.innerHTML = "\\";
      key.value = "\\";
    } else if (key.value === ",") {
      key.innerHTML = ".";
      key.value = ".";
    }
  });
  capsLockMode ? (capsLockMode = false) : (capsLockMode = true);
}

/// изменение раскладки клавиатуры
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.ctrlKey && !keyboard.classList.contains("layout")) {
    keyboard.classList.add("layout");
    keysCapitalize.forEach((key) => {
      if (key.value === "q") {
        key.innerHTML = "й";
        key.value = "й";
      } else if (key.value === "w") {
        key.innerHTML = "ц";
        key.value = "ц";
      } else if (key.value === "e") {
        key.innerHTML = "у";
        key.value = "у";
      } else if (key.value === "r") {
        key.innerHTML = "к";
        key.value = "к";
      } else if (key.value === "t") {
        key.innerHTML = "е";
        key.value = "е";
      } else if (key.value === "y") {
        key.innerHTML = "н";
        key.value = "н";
      } else if (key.value === "u") {
        key.innerHTML = "г";
        key.value = "г";
      } else if (key.value === "i") {
        key.innerHTML = "ш";
        key.value = "ш";
      } else if (key.value === "o") {
        key.innerHTML = "щ";
        key.value = "щ";
      } else if (key.value === "p") {
        key.innerHTML = "з";
        key.value = "з";
      } else if (key.value === "[") {
        key.innerHTML = "х";
        key.value = "х";
      } else if (key.value === "]") {
        key.innerHTML = "ъ";
        key.value = "ъ";
      } else if (key.value === "a") {
        key.innerHTML = "ф";
        key.value = "ф";
      } else if (key.value === "s") {
        key.innerHTML = "ы";
        key.value = "ы";
      } else if (key.value === "d") {
        key.innerHTML = "в";
        key.value = "в";
      } else if (key.value === "f") {
        key.innerHTML = "а";
        key.value = "а";
      } else if (key.value === "g") {
        key.innerHTML = "п";
        key.value = "п";
      } else if (key.value === "h") {
        key.innerHTML = "р";
        key.value = "р";
      } else if (key.value === "j") {
        key.innerHTML = "о";
        key.value = "о";
      } else if (key.value === "k") {
        key.innerHTML = "л";
        key.value = "л";
      } else if (key.value === "l") {
        key.innerHTML = "д";
        key.value = "д";
      } else if (key.value === ";") {
        key.innerHTML = "ж";
        key.value = "ж";
      } else if (key.value === "'") {
        key.innerHTML = "э";
        key.value = "э";
      } else if (key.value === "z") {
        key.innerHTML = "я";
        key.value = "я";
      } else if (key.value === "x") {
        key.innerHTML = "ч";
        key.value = "ч";
      } else if (key.value === "c") {
        key.innerHTML = "с";
        key.value = "с";
      } else if (key.value === "v") {
        key.innerHTML = "м";
        key.value = "м";
      } else if (key.value === "b") {
        key.innerHTML = "и";
        key.value = "и";
      } else if (key.value === "n") {
        key.innerHTML = "т";
        key.value = "т";
      } else if (key.value === "m") {
        key.innerHTML = "ь";
        key.value = "ь";
      } else if (key.value === ",") {
        key.innerHTML = "б";
        key.value = "б";
      } else if (key.value === ".") {
        key.innerHTML = "ю";
        key.value = "ю";
      } else if (key.value === "/") {
        key.innerHTML = ".";
        key.value = ".";
      } else if (key.value === "`") {
        key.innerHTML = "ё";
        key.value = "ё";
      } else if (key.value === "@") {
        key.innerHTML = "2";
        key.value = "2";
      } else if (key.value === "#") {
        key.innerHTML = "3";
        key.value = "3";
      } else if (key.value === "$") {
        key.innerHTML = "4";
        key.value = "4";
      } else if (key.value === "~") {
        key.innerHTML = "ё";
        key.value = "ё";
      } else if (key.value === "^") {
        key.innerHTML = "6";
        key.value = "6";
      } else if (key.value === "&") {
        key.innerHTML = "7";
        key.value = "7";
      } else if (key.value === "{") {
        key.innerHTML = "х";
        key.value = "х";
      } else if (key.value === "}") {
        key.innerHTML = "ъ";
        key.value = "ъ";
      } else if (key.value === ":") {
        key.innerHTML = "ж";
        key.value = "ж";
      } else if (key.value === '"') {
        key.innerHTML = "э";
        key.value = "э";
      } else if (key.value === "<") {
        key.innerHTML = "б";
        key.value = "б";
      } else if (key.value === ">") {
        key.innerHTML = "ю";
        key.value = "ю";
      } else if (key.value === "?") {
        key.innerHTML = ".";
        key.value = ".";
      } else if (key.value === "\\") {
        key.innerHTML = "\\";
        key.value = "\\";
      }
    });
  } else if (
    event.altKey &&
    event.ctrlKey &&
    keyboard.classList.contains("layout")
  ) {
    keyboard.classList.remove("layout");
    keysCapitalize.forEach((key) => {
      if (key.value === "й") {
        key.innerHTML = "q";
        key.value = "q";
      } else if (key.value === "ц") {
        key.innerHTML = "w";
        key.value = "w";
      } else if (key.value === "у") {
        key.innerHTML = "e";
        key.value = "e";
      } else if (key.value === "к") {
        key.innerHTML = "r";
        key.value = "r";
      } else if (key.value === "е") {
        key.innerHTML = "t";
        key.value = "t";
      } else if (key.value === "н") {
        key.innerHTML = "y";
        key.value = "y";
      } else if (key.value === "г") {
        key.innerHTML = "u";
        key.value = "u";
      } else if (key.value === "ш") {
        key.innerHTML = "i";
        key.value = "i";
      } else if (key.value === "щ") {
        key.innerHTML = "o";
        key.value = "o";
      } else if (key.value === "з") {
        key.innerHTML = "p";
        key.value = "p";
      } else if (key.value === "х") {
        key.innerHTML = "[";
        key.value = "[";
      } else if (key.value === "ъ") {
        key.innerHTML = "]";
        key.value = "]";
      } else if (key.value === "ф") {
        key.innerHTML = "a";
        key.value = "a";
      } else if (key.value === "ы") {
        key.innerHTML = "s";
        key.value = "s";
      } else if (key.value === "в") {
        key.innerHTML = "d";
        key.value = "d";
      } else if (key.value === "а") {
        key.innerHTML = "f";
        key.value = "f";
      } else if (key.value === "п") {
        key.innerHTML = "g";
        key.value = "g";
      } else if (key.value === "р") {
        key.innerHTML = "h";
        key.value = "h";
      } else if (key.value === "о") {
        key.innerHTML = "j";
        key.value = "j";
      } else if (key.value === "л") {
        key.innerHTML = "k";
        key.value = "k";
      } else if (key.value === "д") {
        key.innerHTML = "l";
        key.value = "l";
      } else if (key.value === "ж") {
        key.innerHTML = ";";
        key.value = ";";
      } else if (key.value === "э") {
        key.innerHTML = "'";
        key.value = "'";
      } else if (key.value === "я") {
        key.innerHTML = "z";
        key.value = "z";
      } else if (key.value === "ч") {
        key.innerHTML = "x";
        key.value = "x";
      } else if (key.value === "с") {
        key.innerHTML = "c";
        key.value = "c";
      } else if (key.value === "м") {
        key.innerHTML = "v";
        key.value = "v";
      } else if (key.value === "и") {
        key.innerHTML = "b";
        key.value = "b";
      } else if (key.value === "т") {
        key.innerHTML = "n";
        key.value = "n";
      } else if (key.value === "ь") {
        key.innerHTML = "m";
        key.value = "m";
      } else if (key.value === "б") {
        key.innerHTML = ",";
        key.value = ",";
      } else if (key.value === "ю") {
        key.innerHTML = ".";
        key.value = ".";
      } else if (key.value === ".") {
        key.innerHTML = "/";
        key.value = "/";
      } else if (key.value === "ё") {
        key.innerHTML = "`";
        key.value = "`";
      } else if (key.value === '"') {
        key.innerHTML = "2";
        key.value = "2";
      } else if (key.value === "№") {
        key.innerHTML = "3";
        key.value = "3";
      } else if (key.value === ";") {
        key.innerHTML = "4";
        key.value = "4";
      } else if (key.value === "%") {
        key.innerHTML = "5";
        key.value = "5";
      } else if (key.value === ":") {
        key.innerHTML = "6";
        key.value = "6";
      } else if (key.value === "?") {
        key.innerHTML = "7";
        key.value = "7";
      }
    });
  }
});
