function calculate(operator) {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let result;

    switch (operator) {
        case "+" :
        result = Number(firstNumber) + Number(secondNumber);
        return document.getElementById("output").innerHTML = result;

        case "-" :
        result = Number(firstNumber) - Number(secondNumber);
        return document.getElementById("output").innerHTML = result;

        case "*" :
        result = Number(firstNumber) * Number(secondNumber);
        return document.getElementById("output").innerHTML = result;

        case "/" :
        result = Number(firstNumber) / Number(secondNumber);
        return document.getElementById("output").innerHTML = result;

        case "%" :
        result = Number(firstNumber) % Number(secondNumber);
        return document.getElementById("output").innerHTML = result;

        case "e" :
        result = Number(firstNumber) ** Number(secondNumber);
        return document.getElementById("output").innerHTML = result;
        
    }
}