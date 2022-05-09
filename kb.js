const keys = [
  {
    key: { ru: "ё", en: "`" },
    shift: { ru: "Ё", en: "~" },
    code: "Backquote",
    class: "key tilda Backquote",
  },
  {
    key: { ru: "1", en: "1" },
    shift: { ru: "!", en: "!" },
    code: "Digit1",
    class: "key Digit1",
  },
  {
    key: { ru: "2", en: "2" },
    shift: { ru: '"', en: "@" },
    code: "Digit2",
    class: "key Digit2",
  },
  {
    key: { ru: "3", en: "3" },
    shift: { ru: "№", en: "#" },
    code: "Digit3",
    class: "key Digit3",
  },
  {
    key: { ru: "4", en: "4" },
    shift: { ru: ";", en: "$" },
    code: "Digit4",
    class: "key Digit4",
  },
  {
    key: { ru: "5", en: "5" },
    shift: { ru: "%", en: "%" },
    code: "Digit5",
    class: "key Digit5",
  },
  {
    key: { ru: "6", en: "6" },
    shift: { ru: ":", en: "^" },
    code: "Digit6",
    class: "key Digit6",
  },
  {
    key: { ru: "7", en: "7" },
    shift: { ru: "?", en: "&" },
    code: "Digit7",
    class: "key Digit7",
  },
  {
    key: { ru: "8", en: "8" },
    shift: { ru: "*", en: "*" },
    code: "Digit8",
    class: "key Digit8",
  },
  {
    key: { ru: "9", en: "9" },
    shift: { ru: "(", en: "(" },
    code: "Digit9",
    class: "key Digit9",
  },
  {
    key: { ru: "0", en: "0" },
    shift: { ru: ")", en: ")" },
    code: "Digit0",
    class: "key Digit0",
  },
  {
    key: { ru: "-", en: "-" },
    shift: { ru: "_", en: "_" },
    code: "Minus",
    class: "key Minus",
  },
  {
    key: { ru: "=", en: "=" },
    shift: { ru: "+", en: "+" },
    code: "Equal",
    class: "key Equal",
  },
  {
    key: { ru: "Backspace", en: "Backspace" },
    code: "Backspace",
    class: "key key_backspace Backspace",
    noType: true,
  },
  {
    key: { ru: "Tab", en: "Tab" },
    code: "Tab",
    class: "key key_tab Tab",
    noType: true,
  },
  {
    key: { ru: "й", en: "q" },
    shift: { ru: "Й", en: "Q" },
    code: "KeyQ",
    class: "key KeyQ",
  },
  {
    key: { ru: "ц", en: "w" },
    shift: { ru: "Ц", en: "W" },
    code: "KeyW",
    class: "key KeyW",
  },
  {
    key: { ru: "у", en: "e" },
    shift: { ru: "У", en: "E" },
    code: "KeyE",
    class: "key KeyE",
  },
  {
    key: { ru: "к", en: "r" },
    shift: { ru: "К", en: "R" },
    code: "KeyR",
    class: "key KeyR",
  },
  {
    key: { ru: "е", en: "t" },
    shift: { ru: "Е", en: "T" },
    code: "KeyT",
    class: "key KeyT",
  },
  {
    key: { ru: "н", en: "y" },
    shift: { ru: "Н", en: "Y" },
    code: "KeyY",
    class: "key KeyY",
  },
  {
    key: { ru: "г", en: "u" },
    shift: { ru: "Г", en: "U" },
    code: "KeyU",
    class: "key KeyU",
  },
  {
    key: { ru: "ш", en: "i" },
    shift: { ru: "Ш", en: "I" },
    code: "KeyI",
    class: "key KeyI",
  },
  {
    key: { ru: "щ", en: "o" },
    shift: { ru: "Щ", en: "O" },
    code: "KeyO",
    class: "key KeyO",
  },
  {
    key: { ru: "з", en: "p" },
    shift: { ru: "З", en: "P" },
    code: "KeyP",
    class: "key KeyP",
  },
  {
    key: { ru: "х", en: "[" },
    shift: { ru: "Х", en: "{" },
    code: "BracketLeft",
    class: "key BracketLeft",
  },
  {
    key: { ru: "ъ", en: "]" },
    shift: { ru: "Ъ", en: "}" },
    code: "BracketRight",
    class: "key BracketRight",
  },
  {
    key: { ru: "\\", en: "\\" },
    shift: { ru: "|", en: "|" },
    code: "Backslash",
    class: "key key_backslash Backslash",
  },
  {
    key: { ru: "Caps Lock", en: "Caps Lock" },
    code: "CapsLock",
    class: "key CapsLock",
    noType: true,
  },
  {
    key: { ru: "ф", en: "a" },
    shift: { ru: "Ф", en: "A" },
    code: "KeyA",
    class: "key KeyA",
  },
  {
    key: { ru: "ы", en: "s" },
    shift: { ru: "Ы", en: "S" },
    code: "KeyS",
    class: "key KeyS",
  },
  {
    key: { ru: "в", en: "d" },
    shift: { ru: "В", en: "D" },
    code: "KeyD",
    class: "key KeyD",
  },
  {
    key: { ru: "а", en: "f" },
    shift: { ru: "А", en: "F" },
    code: "KeyF",
    class: "key KeyF",
  },
  {
    key: { ru: "п", en: "g" },
    shift: { ru: "П", en: "G" },
    code: "KeyG",
    class: "key KeyG",
  },
  {
    key: { ru: "р", en: "h" },
    shift: { ru: "Р", en: "H" },
    code: "KeyH",
    class: "key KeyH",
  },
  {
    key: { ru: "о", en: "j" },
    shift: { ru: "О", en: "J" },
    code: "KeyJ",
    class: "key KeyJ",
  },
  {
    key: { ru: "л", en: "k" },
    shift: { ru: "Л", en: "K" },
    code: "KeyK",
    class: "key KeyK",
  },
  {
    key: { ru: "д", en: "l" },
    shift: { ru: "Д", en: "L" },
    code: "KeyL",
    class: "key KeyL",
  },
  {
    key: { ru: "ж", en: ";" },
    shift: { ru: "Ж", en: ":" },
    code: "Semicolon",
    class: "key Semicolon",
  },
  {
    key: { ru: "э", en: "'" },
    shift: { ru: "Э", en: '"' },
    code: "Quote",
    class: "key Quote",
  },
  {
    key: { ru: "Enter", en: "Enter" },
    code: "Enter",
    class: "key key_enter Enter",
    noType: true,
  },
  {
    key: { ru: "Shift", en: "Shift" },
    code: "ShiftLeft",
    class: "key key_leftshift ShiftLeft",
    noType: true,
  },
  {
    key: { ru: "я", en: "z" },
    shift: { ru: "Я", en: "Z" },
    code: "KeyZ",
    class: "key KeyZ",
  },
  {
    key: { ru: "ч", en: "x" },
    shift: { ru: "Ч", en: "X" },
    code: "KeyX",
    class: "key KeyX",
  },
  {
    key: { ru: "с", en: "c" },
    shift: { ru: "С", en: "C" },
    code: "KeyC",
    class: "key KeyC",
  },
  {
    key: { ru: "м", en: "v" },
    shift: { ru: "М", en: "V" },
    code: "KeyV",
    class: "key KeyV",
  },
  {
    key: { ru: "и", en: "b" },
    shift: { ru: "И", en: "B" },
    code: "KeyB",
    class: "key KeyB",
  },
  {
    key: { ru: "т", en: "n" },
    shift: { ru: "Т", en: "N" },
    code: "KeyN",
    class: "key KeyN",
  },
  {
    key: { ru: "ь", en: "m" },
    shift: { ru: "Ь", en: "M" },
    code: "KeyM",
    class: "key KeyM",
  },
  {
    key: { ru: "б", en: "," },
    shift: { ru: "Б", en: "<" },
    code: "Comma",
    class: "key Comma",
  },
  {
    key: { ru: "ю", en: "." },
    shift: { ru: "Ю", en: ">" },
    code: "Period",
    class: "key Period",
  },
  {
    key: { ru: ".", en: "/" },
    shift: { ru: ",", en: "?" },
    code: "Slash",
    class: "key Slash",
  },
  {
    key: { ru: "▲", en: "▲" },
    code: "ArrowUp",
    noType: true,
    class: "key ArrowUp",
  },
  {
    key: { ru: "Shift", en: "Shift" },
    code: "ShiftRight",
    class: "key key_rightshift ShiftRight",
    noType: true,
  },
  {
    key: { ru: "Ctrl", en: "Ctrl" },
    code: "ControlLeft",
    class: "key key_leftctrl ControlLeft",
    noType: true,
  },
  {
    key: { ru: "Alt", en: "Alt" },
    code: "AltLeft",
    class: "key key_leftalt AltLeft",
    noType: true,
  },
  {
    key: { ru: "Пробел", en: "Space" },
    code: "Space",
    class: "key key_space Space",
  },
  {
    key: { ru: "Alt", en: "Alt" },
    code: "AltRight",
    class: "key key_rightalt AltRight",
    noType: true,
  },
  {
    key: { ru: "Ctrl", en: "Ctrl" },
    code: "ControlRight",
    class: "key key_rightctrl ControlRight",
    noType: true,
  },
  {
    key: { ru: "◄", en: "◄" },
    code: "ArrowLeft",
    noType: true,
    class: "key ArrowLeft",
  },
  {
    key: { ru: "▼", en: "▼" },
    code: "ArrowDown",
    noType: true,
    class: "key ArrowDown",
  },
  {
    key: { ru: "►", en: "►" },
    code: "ArrowRight",
    noType: true,
    class: "key ArrowRight",
  },
  {
    key: { ru: "Язык", en: "Lang" },
    code: "Lang",
    class: "key key_lang Lang",
    noType: true,
  },
];

let title = document.createElement("h2");
let doc = document.querySelector("body");
title.innerHTML =
  "Клавиатура <br> Для смены языка используйте специальную кнопку либо комбинацию Shift+Ctrl";
doc.append(title);
let inputContainer = document.createElement("div");
inputContainer.className = "inputContainer";
let input = document.createElement("textarea");
input.className = "input";
input.rows = 20;
input.cols = 150;
doc.append(inputContainer);
inputContainer.append(input);

let caps = false;
let lang = "en";

function initialize() {
  let container = document.createElement("div");
  container.className = "controll";
  doc.append(container);

  for (let i = 0; i < keys.length; i++) {
    button = document.createElement("button");
    button.className = keys[i].class;
    button.textContent = keys[i].key.en;
    document.querySelector(".controll").append(button);
  }
}

let kb = document.querySelectorAll(".key");
let textarea = document.querySelector(".input");
initialize();
function texter(event) {
  textarea.focus();
  if (event.target.textContent.length === 1) {
    let text = [...textarea.value];
    text.value += event.target.textContent;
  }
}

kb.forEach((e) => {
  e.addEventListener("click", (event) => console.log(event.code));
});

let tab = document.querySelector(".Tab");
tab.addEventListener("click", () => (textarea.value += tab.textContent));
let keyQ = document.querySelector(".KeyQ");
keyQ.addEventListener("click", () => (textarea.value += keyQ.textContent));

let bckspc = document.querySelector(".Backspace");
bckspc.addEventListener("click", () => (textarea.value.length -= 1));

let CapsL = document.querySelector(".CapsLock");

function capsPress() {
  let container = document.querySelector(".controll");
  if (caps === false) {
    for (let i = 0; i < keys.length; i++) {
      if (container.children[i].textContent.length === 1) {
        container.children[i].textContent =
          container.children[i].textContent.toUpperCase();
      }
    }
    CapsL.classList.toggle("capsActive");
    caps = true;
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (container.children[i].textContent.length === 1) {
        container.children[i].textContent =
          container.children[i].textContent.toLowerCase();
      }
    }
    CapsL.classList.toggle("capsActive");
    caps = false;
  }
}

let cont = document.querySelector(".controll");
CapsL.addEventListener("click", capsPress);

function langPress() {
  let container = document.querySelector(".controll");
  if (lang === "en") {
    for (let i = 0; i < keys.length; i++) {
      if (
        !CapsL.classList.contains("capsActive") &&
        container.children[i].textContent.length === 1
      ) {
        container.children[i].textContent = keys[i].key.ru;
      } else if (container.children[i].textContent.length === 1) {
        container.children[i].textContent = keys[i].key.ru.toUpperCase();
      }
    }
    lang = "ru";
    langKey.textContent = "Язык";
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (
        !CapsL.classList.contains("capsActive") &&
        container.children[i].textContent.length === 1
      ) {
        container.children[i].textContent = keys[i].key.en;
      }
      else if (container.children[i].textContent.length === 1) {
        container.children[i].textContent = keys[i].key.en.toUpperCase();
      }
    }
    lang = "en";
    langKey.textContent = "Lang";
  }
}

let langKey = document.querySelector(".Lang");
langKey.addEventListener("click", langPress);

//function clickHandler(event) {
//  if (event.yype == 'click')
//}
//function activator(e) {
//  e.classList.add('active')
//}
//let buttons = document.querySelectorAll("button");
//let button = buttons.forEach()
//button.addEventListener('click', activator)
