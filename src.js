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
    buttonNumber === 10 ? (button.textContent = 0) : (button.textContent = buttonNumber);
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
  switch (operator) {
    case "add":
      add(num1, num2);
      break;
    case "subtract":
      subtract(num1, num2);
      break;
    case "multiply":
      multiply(num1, num2);
      break;
    case "divide":
      divide(num1, num2);
      break;
    default:
      throw new Error("What is this?");
  }
}
