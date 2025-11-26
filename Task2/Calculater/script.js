let display = document.querySelector("#input");

function appendValue(a) {
  display.value = display.value + a;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 600);
  }
}

document.addEventListener("keydown", (e) => {
  let key = e.key;

  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ];
  for (const el of arr) {
    if (el == key) appendValue(el);
  }
  if (key == "=" || key == "Enter") calculateResult();
  else if (key == " " || key == "Escape") clearDisplay();
  else if (key === "Backspace") deleteChar();
});
