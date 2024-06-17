function clearResult() {
document.getElementById('result').value ="";
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    let calculatedResult = eval(expression);
    document.getElementById('result').value = calculatedResult;
}

function appendToResult(value) {
document.getElementById('result').value += value;
}
