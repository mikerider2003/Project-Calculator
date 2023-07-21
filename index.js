var firstVariable;
var secondVariable;
var operator;


function add(number1, number2){
    return number1 + number2;
};

function subtract(number1, number2){
    return number1 - number2;
};

function multiply(number1, number2) {
    return number1 * number2;
}

function devide(number1, number2) {
    if(number2 == 0){
        return "ERROR cannot devide zero !";
    };

    return number1 / number2;
}


function operate(firstVariable, secondVariable, operator){
    switch (operator) {
        case  "+":
            return add(firstVariable, secondVariable);
    
        case "-":
            return subtract(firstVariable, secondVariable);

        case "*":
            return multiply(firstVariable, secondVariable);

        case "/":
            return devide(firstVariable, secondVariable);

        default:
            break;
    }
};

