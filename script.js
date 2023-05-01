"use strict";
const englishKeyboard = `<div class="container">
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
    <button class="other" value="\`\">\`\</button>
    <button class="other" value="1">1</button>
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
    <button class="backspace">BackSpace</button>
  </div>
  <div class="second-row row">
    <button class="tab" value="tab">Tab</button>
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
    <button class="capslock">CapsLock</button>
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
const russianKeyboard = `<div class="container">
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
    <button class="other" value="ё">ё</button>
    <button class="other" value="1">1</button>
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
    <button class="backspace">BackSpace</button>
  </div>
  <div class="second-row row">
    <button class="tab">Tab</button>
    <button class="other" value="й">й</button>
    <button class="other" value="ц">ц</button>
    <button class="other" value="у">у</button>
    <button class="other" value="к">к</button>
    <button class="other" value="е">е</button>
    <button class="other" value="н">н</button>
    <button class="other" value="г">г</button>
    <button class="other" value="ш">ш</button>
    <button class="other" value="щ">щ</button>
    <button class="other" value="з">з</button>
    <button class="other" value="х">х</button>
    <button class="other" value="ъ">ъ</button>
    <button class="other" value="/">/</button>
    <button class="del">Del</button>
  </div>
  <div class="third-row row">
    <button class="capslock">CapsLock</button>
    <button class="other" value="ф">ф</button>
    <button class="other" value="ы">ы</button>
    <button class="other" value="в">в</button>
    <button class="other" value="а">а</button>
    <button class="other" value="п">п</button>
    <button class="other" value="р">р</button>
    <button class="other" value="о">о</button>
    <button class="other" value="л">л</button>
    <button class="other" value="д">д</button>
    <button class="other" value="ж">ж</button>
    <button class="other" value="э">э</button>
    <button class="enter" value="enter">Enter</button>
  </div>
  <div class="forth-row row">
    <button class="shift-left shift">Shift</button>
    <button class="other" value="я">я</button>
    <button class="other" value="ч">ч</button>
    <button class="other" value="с">с</button>
    <button class="other" value="м">м</button>
    <button class="other" value="и">и</button>
    <button class="other" value="т">т</button>
    <button class="other" value="ь">ь</button>
    <button class="other" value="б">б</button>
    <button class="other" value="ю">ю</button>
    <button class="other" value=".">.</button>
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

const body = document.querySelector("body");
body.innerHTML = englishKeyboard;
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.altKey && event.ctrlKey && !body.classList.contains("english")) {
    setTimeout(function () {
      body.innerHTML = russianKeyboard;
      body.classList.add("english");
      console.log(1);
    }, 0);
  }
  if (event.altKey && event.ctrlKey && body.classList.contains("english")) {
    body.innerHTML = englishKeyboard;
    body.classList.remove("english");
    console.log(0);
  }
});

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
    notAllButtons.forEach(
      (el) => (el.innerHTML = `${el.textContent.toUpperCase()}`)
    );
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
  } else if (event.code === "Delete") {
    delButton.classList.add("highlight");
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
});
document.addEventListener("keyup", function (event) {
  event.preventDefault();
  const key = event.key.toLowerCase(); // приведение клавиши к нижнему регистру
  notAllButtons.forEach(function (button) {
    if (button.textContent.toLowerCase() === key) {
      button.classList.remove("highlight");
    }
  });
});
/* console.log(output.textContent += `2`);
tabButton.addEventListener("click", function (event) {
  console.log(event);
  output.textContent += "    ";
}); */

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

// Загрузка состояния после обновления страницы
/* window.addEventListener("load", () => {
  const savedState = localStorage.getItem("keyboardState");
  if (savedState === "english") {
    body.innerHTML = englishKeyboard;
    body.classList.add("english");
  } else {
    body.innerHTML = russianKeyboard;
    body.classList.remove("english");
  }
});

// Обработчик события для сохранения состояния
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.altKey && event.ctrlKey && !body.classList.contains("english")) {
    setTimeout(function () {
      body.innerHTML = russianKeyboard;
      body.classList.add("english");
      localStorage.setItem("keyboardState", "russian");
    }, 0);
  }
  if (event.altKey && event.ctrlKey && body.classList.contains("english")) {
    body.innerHTML = englishKeyboard;
    body.classList.remove("english");
    localStorage.setItem("keyboardState", "english");
  }
});
 */

/* backspaceButton.addEventListener("click", () => {
  const startPos = output.selectionStart;
  const endPos = output.selectionEnd;
  console.log(startPos);
  console.log(endPos);
  if (startPos === endPos && startPos > 0) {
    const newValue =
      output.value.slice(0, startPos - 5) + output.value.slice(startPos);
    output.value = newValue;
    output.setSelectionRange(startPos - 1, startPos - 1);
  } else if (startPos !== endPos) {
    const newValue =
      output.value.slice(0, startPos) + output.value.slice(endPos);
    output.value = newValue;
    output.setSelectionRange(startPos, startPos);
  }
}); */
