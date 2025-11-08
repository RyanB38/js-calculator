calculator = {
    num1: 0,
    num2: 0,
    operator: "",
    total: 0
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
        displayNumbers(button.textContent.trim());
        console.log(display.textContent);
    })
})
const operations = document.querySelectorAll(".buttons > .operation");
operations.forEach((button) => {
    button.addEventListener('click', () => {
        if(calculator.operator == ""){
            calculator.num1 = display.textContent;
            calculator.operator = button.textContent.trim();
            display.textContent = "";
            console.log(calculator.num1 + calculator.operator);
        }else if(calculator.operator != ""){
            calculator.num2 = display.textContent;
            console.log(calculator.num1 + calculator.operator + calculator.num2);
            calculator.total = doOperation(calculator.num1, calculator.num2, calculator.operator);
            display.textContent = calculator.total;
        }
    })
})