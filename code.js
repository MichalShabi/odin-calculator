const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  if (b !== 0) {
    return (a / b).toFixed(3);
  }
  return "ERROR";
};

const multiply = function (a, b) {
  return a * b;
};

let firstNumber, operator, secondNumber;
const calcBtns = document.querySelectorAll(".calc-btn");
calcBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getIntoArray(btn);
  });
});

function operate(num1, num2, op) {
  let result;
  num1 = Number(num1);
  num2 = Number(num2);
  if(num1 === undefined || isNaN(num1) || num2 === undefined || isNaN(num2)) {
    numArr = [];
    arrIndex = 0;
    return "ERROR"
  }
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;

    default:
      break;
  }
  return result;
}

let displayScreen = document.querySelector("#display");
function displayNumbers(num) {
  displayScreen.innerText = num;
}

function deleteAll() {
  displayScreen.innerText = "";
  numArr =[];
  arrIndex = 0;
}

let numArr =[];
let arrIndex = 0;

function getIntoArray(event) {
  if(event.classList.contains("numbers")) {
    if(numArr[arrIndex] === undefined) {
      numArr[arrIndex] = "";
    }
    numArr[arrIndex] += event.innerText
    displayNumbers(numArr[arrIndex]);
    console.table(numArr);

  }
  else if(event.classList.contains("operators")) {
    arrIndex++;
    if(checkIfOperator(numArr[arrIndex-1])) {
      arrIndex = arrIndex -2;
    }
    numArr[arrIndex] = event.innerText;
    console.table(numArr);
    
    if(arrIndex >= 2 && checkIfOperator(numArr[arrIndex-2])) {
      let tempResult =  operate(numArr[arrIndex-3], numArr[arrIndex-1], numArr[arrIndex-2])
      numArr[arrIndex - 1] = tempResult;
      console.log("t" + tempResult);
      displayNumbers(numArr[arrIndex-1]);
    }
    arrIndex++;
  }
}

function checkIfOperator(char) {
  return !(char !== "+" && char !== "-" && char !== "/" && char !== "*") 
  
}

function equal() {
  let result = operate((numArr[numArr.length-3]), numArr[numArr.length-1], numArr[numArr.length-2]);
  console.log(result + " la");
  if(!isNaN(result) && result !== undefined) {
    numArr = [];
    if(result !== "ERROR") {
      numArr[0] = result;
    }
    arrIndex = 0;
    displayNumbers(result);
  }
else displayNumbers("ERROR")
    console.table(numArr);
}