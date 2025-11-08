calculator = {
    num1: 0,
    num2: 0,
    operator: "",
    total: 0
};
function add(a, b){
    return add(a, b);
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
const operations = document.querySelectorAll(".buttons > .operations");
operations.forEach((button) => {
    button.addEventListener
})