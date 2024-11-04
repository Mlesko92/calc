const numpad = document.querySelector("ul");
let buttonNumber = 1;

for (i = 1; i < 14; i++) {
  if (i % 4 === 0) {
    const span = document.createElement("span");
    span.style.cssText = "height: 0; width: 0; width: 100%";
    numpad.appendChild(span);
  } else {
    const button = document.createElement("button");
    button.style.cssText = "height: 60; width: 55;";
    buttonNumber === 10
      ? (button.textContent = 0)
      : (button.textContent = buttonNumber);
    buttonNumber++;
    numpad.appendChild(button);
  }
}

// Calc

let firstNum, secondNum, operation;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      return result;
    case "-":
      result = subtract(num1, num2);
      return result;
    case "*":
      result = multiply(num1, num2);
      return result;
    case "/":
      result = divide(num1, num2);
      return result;
    default:
      throw new Error("What is this?");
  }
}

const numButtons = document.querySelectorAll(".calc-numpad button");
const display = document.querySelector("input");
const optButtons = document.querySelectorAll(".calc-operators button");

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let enteredValue = display.value;
    display.value = enteredValue + button.textContent;
  });
});

optButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
    } else {
      operation = button.textContent;
    }
    if (operation === "c") {
      firstNum = undefined;
      secondNum = undefined;
      display.value = "";
    }
    if (firstNum === undefined && display.value) {
      firstNum = display.value;
      display.value = "";
    } else {
      secondNum = display.value;
    }
    if (operation && firstNum && secondNum) {
      const result = operate(operation, firstNum, secondNum);
      display.value = result;
    }
  });
});
