function createNumpad() {
  const numpad = document.querySelector("ul");
  let buttonNumber = 1;

  for (let i = 1; i < 14; i++) {
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
}

createNumpad();

// Calculator logic
let firstNum,
  secondNum,
  operation,
  resetInput = false;

function updateDisplay(value) {
  display.value = value;
}

function clearCalculator() {
  firstNum = undefined;
  secondNum = undefined;
  operation = undefined;
  resetInput = false;
  updateDisplay("");
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error";
    default:
      throw new Error("Invalid operation");
  }
}

const numButtons = document.querySelectorAll(".calc-numpad button");
const display = document.querySelector("input");
const optButtons = document.querySelectorAll(".calc-operators button");

// Number button event listeners
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (resetInput) {
      updateDisplay(button.textContent);
      resetInput = false;
    } else {
      updateDisplay(display.value + button.textContent);
    }
  });
});

// Operation button event listeners
optButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedOperation = button.textContent;

    if (clickedOperation === "c") {
      clearCalculator();
    } else if (clickedOperation === "=") {
      if (operation && firstNum !== undefined) {
        secondNum = display.value;
        const result = operate(operation, firstNum, secondNum);
        updateDisplay(result);
        resetInput = true;
        firstNum = result;
        operation = undefined;
      }
    } else {
      if (!firstNum) {
        firstNum = display.value;
      } else if (!resetInput) {
        secondNum = display.value;
        const result = operate(operation, firstNum, secondNum);
        updateDisplay(result);
        firstNum = result;
      }
      operation = clickedOperation;
      resetInput = true;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    // Numeric keys
    if (resetInput) {
      updateDisplay(key);
      resetInput = false;
    } else {
      updateDisplay(display.value + key);
    }
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    
    if (!firstNum) {
      firstNum = display.value;
    } else if (!resetInput) {
      secondNum = display.value;
      const result = operate(operation, firstNum, secondNum);
      updateDisplay(result);
      firstNum = result;
    }
    operation = key;
    resetInput = true;
  } else if (key === "Enter" || key === "=") {
  
    if (operation && firstNum !== undefined) {
      secondNum = display.value;
      const result = operate(operation, firstNum, secondNum);
      updateDisplay(result);
      resetInput = true;
      firstNum = result;
      operation = undefined;
    }
  } else if (key === "c" || key === "C") {

    clearCalculator();
  }
});
