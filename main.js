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
