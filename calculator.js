let firstNumber;
let secondNumber;
let operation;
let i = 0;
let result = 0;
let firstArray = [];
let secondArray = [];
let display = document.getElementById("display");

function sendNumber(num){
    if (i === 0 || i === 1) {
        firstArray.push(num);
        i = 1;
        firstNumber = Number(firstArray.join(''));
        display.value = firstNumber;
    }
    else if (i === 2) {
        secondArray.push(num);
        secondNumber = Number(secondArray.join(''));
        display.value = secondNumber;
    }
}

function sendOperator(op){
    i = 2
    operation = op
}

function clearDisplay() {
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    i = 0;
    operation = null;
    result = 0;
    firstArray = [];
    secondArray = [];
}

function deleteLastDigit() {
    if (i===0 || i===1) {
        display.value = display.value.toString().slice(0,-1);
        firstArray = firstArray.slice(0,-1);
        firstNumber = Number(firstArray.join(''));
    }
    else if (i===2) {
        display.value = display.value.toString().slice(0,-1);
        firstArray = firstArray.slice(0,-1);
        secondNumber = Number(secondArray.join(''));
    }
}

const calculate = () => {
        if (operation === '+') {
            result = firstNumber + secondNumber;
            display.value = result;
        }
        else if (operation === '-') {
            result = firstNumber - secondNumber;
            display.value = result;
        }
        else if (operation === '*') {
            result = firstNumber * secondNumber;
            display.value = result;
        }
        else if (operation === '/') {
            result = firstNumber / secondNumber;
            display.value = result.toFixed(5);
        }
        else if (operation === '%') {
            result = (firstNumber - secondNumber) / secondNumber * 100;
            display.value = result;
        }
        
        firstNumber = result;
        secondNumber = null;
        i = 1;
        operation = null;
        result = 0;
        firstArray = Array.from(firstNumber.toString(), Number);
        secondArray = [];
}