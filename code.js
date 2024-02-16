const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  return (a / b).toFixed(3);
};

const multiply = function (a, b) {
  return a * b;
};

let firstNumber, operator, secondNumber;
// const numbers = document.querySelectorAll(".numbers");
// numbers.forEach((number) => {
//   number.addEventListener("click", () => {
//     displayNumbers(number);
//   });
// });
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

// let showNum = "";
let displayScreen = document.querySelector("#display");
function displayNumbers(num) {
  // showNum += num.innerText;
  // if(num.innerText === ".") {
  displayScreen.innerText = num;
  // } else {
  // displayScreen.innerText = num.innerText;
  // }
}

// function getNumbers(event) {

// }

function deleteAll() {
  displayScreen.innerText = "";
  showNum = "";
  numArr =[];
}

let numArr =[];
// numArr[0] ="";
let arrIndex = 0;

function getIntoArray(event) {
  // console.log(numArr[arrIndex])
  if(event.classList.contains("numbers")) {
    if(numArr[arrIndex] === undefined) {
      numArr[arrIndex] = "";
    }
    numArr[arrIndex] += event.innerText
    console.log(event.innerText);
    displayNumbers(numArr[arrIndex]);
  }
  else if(event.classList.contains("operators")) {
    numArr[arrIndex+1] = event.innerText;
    arrIndex++;
    
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
  if( typeof numArr[numArr.length-1] === "number" && typeof numArr[numArr.length-3] === "number" && typeof numArr[numArr.length-2] === "string") {}
  let result = operate(numArr[numArr.length-3], numArr[numArr.length-1], numArr[numArr.length-2]);
  displayNumbers(result);
  numArr = [];
}