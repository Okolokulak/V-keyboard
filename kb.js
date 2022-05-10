const keys = [
  {
    key: { ru: "ё", en: "`" },
    class: "key tilda Backquote",
  },
  {
    key: { ru: "1", en: "1" },
    class: "key Digit1",
  },
  {
    key: { ru: "2", en: "2" },
    class: "key Digit2",
  },
  {
    key: { ru: "3", en: "3" },
    class: "key Digit3",
  },
  {
    key: { ru: "4", en: "4" },
    class: "key Digit4",
  },
  {
    key: { ru: "5", en: "5" },
    class: "key Digit5",
  },
  {
    key: { ru: "6", en: "6" },
    class: "key Digit6",
  },
  {
    key: { ru: "7", en: "7" },
    class: "key Digit7",
  },
  {
    key: { ru: "8", en: "8" },
    class: "key Digit8",
  },
  {
    key: { ru: "9", en: "9" },
    class: "key Digit9",
  },
  {
    key: { ru: "0", en: "0" },
    class: "key Digit0",
  },
  {
    key: { ru: "-", en: "-" },
    class: "key Minus",
  },
  {
    key: { ru: "=", en: "=" },
    class: "key Equal",
  },
  {
    key: { ru: "Backspace", en: "Backspace" },
    class: "key key_backspace Backspace",
  },
  {
    key: { ru: "Tab", en: "Tab" },
    class: "key key_tab Tab",
  },
  {
    key: { ru: "й", en: "q" },
    class: "key KeyQ",
  },
  {
    key: { ru: "ц", en: "w" },
    class: "key KeyW",
  },
  {
    key: { ru: "у", en: "e" },
    class: "key KeyE",
  },
  {
    key: { ru: "к", en: "r" },
    class: "key KeyR",
  },
  {
    key: { ru: "е", en: "t" },
    class: "key KeyT",
  },
  {
    key: { ru: "н", en: "y" },
    class: "key KeyY",
  },
  {
    key: { ru: "г", en: "u" },
    class: "key KeyU",
  },
  {
    key: { ru: "ш", en: "i" },
    class: "key KeyI",
  },
  {
    key: { ru: "щ", en: "o" },
    class: "key KeyO",
  },
  {
    key: { ru: "з", en: "p" },
    class: "key KeyP",
  },
  {
    key: { ru: "х", en: "[" },
    class: "key BracketLeft",
  },
  {
    key: { ru: "ъ", en: "]" },
    class: "key BracketRight",
  },
  {
    key: { ru: "\\", en: "\\" },
    class: "key key_backslash Backslash",
  },
  {
    key: { ru: "Caps Lock", en: "Caps Lock" },
    class: "key CapsLock",
  },
  {
    key: { ru: "ф", en: "a" },
    class: "key KeyA",
  },
  {
    key: { ru: "ы", en: "s" },
    class: "key KeyS",
  },
  {
    key: { ru: "в", en: "d" },
    class: "key KeyD",
  },
  {
    key: { ru: "а", en: "f" },
    class: "key KeyF",
  },
  {
    key: { ru: "п", en: "g" },
    class: "key KeyG",
  },
  {
    key: { ru: "р", en: "h" },
    class: "key KeyH",
  },
  {
    key: { ru: "о", en: "j" },
    class: "key KeyJ",
  },
  {
    key: { ru: "л", en: "k" },
    class: "key KeyK",
  },
  {
    key: { ru: "д", en: "l" },
    class: "key KeyL",
  },
  {
    key: { ru: "ж", en: ";" },
    class: "key Semicolon",
  },
  {
    key: { ru: "э", en: "'" },
    class: "key Quote",
  },
  {
    key: { ru: "Enter", en: "Enter" },
    class: "key key_enter Enter",
  },
  {
    key: { ru: "Shift", en: "Shift" },
    class: "key key_leftshift ShiftLeft",
  },
  {
    key: { ru: "я", en: "z" },
    class: "key KeyZ",
  },
  {
    key: { ru: "ч", en: "x" },
    class: "key KeyX",
  },
  {
    key: { ru: "с", en: "c" },
    class: "key KeyC",
  },
  {
    key: { ru: "м", en: "v" },
    class: "key KeyV",
  },
  {
    key: { ru: "и", en: "b" },
    class: "key KeyB",
  },
  {
    key: { ru: "т", en: "n" },
    class: "key KeyN",
  },
  {
    key: { ru: "ь", en: "m" },
    class: "key KeyM",
  },
  {
    key: { ru: "б", en: "," },
    class: "key Comma",
  },
  {
    key: { ru: "ю", en: "." },
    class: "key Period",
  },
  {
    key: { ru: ".", en: "/" },
    class: "key Slash",
  },
  {
    key: { ru: "▲", en: "▲" },
    class: "key ArrowUp",
  },
  {
    key: { ru: "Shift", en: "Shift" },
    class: "key key_rightshift ShiftRight",
  },
  {
    key: { ru: "Ctrl", en: "Ctrl" },
    class: "key key_leftctrl ControlLeft",
  },
  {
    key: { ru: "Alt", en: "Alt" },
    class: "key key_leftalt AltLeft",
  },
  {
    key: { ru: "", en: "" },
    class: "key key_space Space",
  },
  {
    key: { ru: "Alt", en: "Alt" },
    class: "key key_rightalt AltRight",
  },
  {
    key: { ru: "Ctrl", en: "Ctrl" },
    class: "key key_rightctrl ControlRight",
  },
  {
    key: { ru: "◄", en: "◄" },
    class: "key ArrowLeft",
  },
  {
    key: { ru: "▼", en: "▼" },
    class: "key ArrowDown",
  },
  {
    key: { ru: "►", en: "►" },
    class: "key ArrowRight",
  },
  {
    key: { ru: "Язык", en: "Lang" },
    class: "key key_lang Lang",
  },
];

class Header {
  constructor(a, b, c, d) {
    this.element = document.createElement(a);
    this.element.classList.add(b);
    this.element.innerHTML = c;
    d.append(this.element);
  }
}

let doc = document.querySelector("body");
let titleContent = '"Клавиатура <br> Для смены языка используйте специальную кнопку либо комбинацию Shift+Ctrl"'
let createTitle = () => new Header ('h2', 'title', titleContent, doc);

//let title = document.createElement("h2");

createTitle();
//title.innerHTML =
//  "Клавиатура <br> Для смены языка используйте специальную кнопку либо комбинацию Shift+Ctrl";
//doc.append(title);
let inputContainer = document.createElement("div");
inputContainer.className = "inputContainer";
let input = document.createElement("textarea");
input.className = "input";
input.rows = 4;
input.cols = 43;
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

let textarea = document.querySelector(".input");
initialize();
function texter(event) {
  textarea.focus();
  if (event.target.textContent.length === 1) {
    let text = [...textarea.value];
    text.value += event.target.textContent;
  }
}

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

function langPress() {
  let container = document.querySelector(".controll");
  if (lang === "en") {
    for (let i = 0; i < keys.length; i++) {
      if (
        !CapsL.classList.contains("capsActive") &&
        container.children[i].textContent.length == 1
      ) {
        container.children[i].textContent = keys[i].key.ru;
      } else if (container.children[i].textContent.length == 1) {
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
      } else if (container.children[i].textContent.length === 1) {
        container.children[i].textContent = keys[i].key.en.toUpperCase();
      }
    }
    lang = "en";
    langKey.textContent = "Lang";
  }
}

function backPress() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

function enterPress() {
  textarea.value = textarea.value.concat("\n");
}

function spacePress() {
  textarea.value = textarea.value.concat(" ");
}

let langKey = document.querySelector(".Lang");
let cont = document.querySelector(".controll");

let kb = document.querySelectorAll("button");
kb.forEach((e) => {
  e.addEventListener("click", (event) => {
    textarea.focus();
    if (event.target.textContent.length == 1) {
      if (
        event.target.textContent == "►" ||
        event.target.textContent == "▲" ||
        event.target.textContent == "▼" ||
        event.target.textContent == "◄"
      ) {
        textarea.value = textarea.value;
      } else {
        textarea.value = textarea.value.concat(event.target.textContent);
      }
    } else if (event.target.textContent == "Caps Lock") {
      capsPress();
    } else if (
      event.target.textContent == "Язык" ||
      event.target.textContent == "Lang"
    ) {
      langPress();
    } else if (event.target.textContent == "Backspace") {
      backPress();
    } else if (event.target.textContent == "Enter") {
      enterPress();
    } else if (event.target.textContent == "") {
      spacePress();
    }
  });
});

document.addEventListener("keydown", (event) => {
  let activeKey = document.querySelector(`.${event.code}`);
  activeKey.classList.toggle("active");
  switch (event.key) {
    case "CapsLock":
      event.preventDefault();
      capsPress();
      break;
    case "Backspace":
      event.preventDefault();
      backPress();
      break;
    case "Enter":
      event.preventDefault();
      enterPress();
      break;
    case "Shift" && "Control":
      event.preventDefault();
      langPress();
      break;
    case " ":
      event.preventDefault();
      spacePress();
      break;
  }
  switch (event.key.length) {
    case 1:
      event.preventDefault();
      textarea.focus();
      textarea.value = textarea.value.concat(activeKey.textContent);
      break;
  }
});
document.addEventListener("keyup", (event) => {
  let activeKey = document.querySelector(`.${event.code}`);
  function activeRemover() {
    activeKey.classList.toggle("active");
  }
  setTimeout(activeRemover, 500);
});


