calculator = {
    num1: 0,
    num2: 0,
    operator: "",
    total: ""
};
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0){
        return NaN;
    }
    return a / b;
}
function displayNumbers(num){
    display.textContent = display.textContent.concat(num);
}
function clearCalculator(){
    calculator.num1 = 0;
    calculator.num2 = 0;
    calculator.operator = "";
    calculator.total = 0;
}
function doOperation(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator == "+"){
        return add(num1, num2);
    }else if(operator == "-"){
        return subtract(num1, num2);
    }else if(operator == "X"){
        return multiply(num1, num2);
    }else if(operator == "/"){
        return divide(num1, num2);
    }
}
const display = document.querySelector(".display > h1");

const numberKeys = document.querySelectorAll(".buttons > .number");
numberKeys.forEach((button) =>{
    button.addEventListener("click", () => {
        if(calculator.total == ""){
            displayNumbers(button.textContent.trim());
        }else if(calculator.total != "" && calculator.operator == "="){
            clearCalculator();
            display.textContent = ""
            displayNumbers(button.textContent.trim());
        }else if(calculator.total != ""){
            calculator.num1 = calculator.total;
            display.textContent = "";
            displayNumbers(button.textContent.trim());
        }

    })
})
const operations = document.querySelectorAll(".buttons > .operation");
operations.forEach((button) => {
    button.addEventListener('click', () => {
        if(calculator.operator == ""){
            calculator.num1 = display.textContent;
            calculator.operator = button.textContent.trim();
            display.textContent = "";
        }else if(calculator.operator != "" && button.textContent.trim() == "="){
            calculator.num2 = display.textContent;
            calculator.total = doOperation(calculator.num1, calculator.num2, calculator.operator);
            display.textContent = calculator.total;
            calculator.operator = "="
        }else if(calculator.operator != ""){
            calculator.num2 = display.textContent;
            calculator.total = doOperation(calculator.num1, calculator.num2, calculator.operator);
            display.textContent = calculator.total;
            calculator.operator = button.textContent.trim();

        }
    })
})
const allClear = document.querySelector(".buttons > .clear");
allClear.addEventListener('click', () => {
    display.textContent = "";
    clearCalculator();
})