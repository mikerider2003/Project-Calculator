function add(number1, number2){
    return number1 + number2;
};

function subtract(number1, number2){
    return number1 - number2;
};

function multiply(number1, number2) {
    return (number1 * number2).toFixed(2);
}

function devide(number1, number2) {
    if(number2 == 0){
        return "ERROR cannot devide zero !";
    };

    return (number1 / number2).toFixed(2);
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

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
const screenChildren = screen.querySelectorAll("div");

var firstVariable;
var secondVariable;
var operator;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const pressedButton = button.textContent;

        if ("0123456789".includes(pressedButton)){
            if (operator !== undefined && secondVariable === undefined){
                screenChildren[1].textContent = "";
                secondVariable = 0;
            };
            screenChildren[1].textContent += pressedButton;
        };
        
        if ("+-*/".includes(pressedButton)) {
            firstVariable = screenChildren[1].textContent;
            if (firstVariable == ""){
                firstVariable = 0;
            };
            operator = pressedButton;
            screenChildren[0].textContent = firstVariable + operator;
        };

        if ("=".includes(pressedButton)){
            secondVariable = screenChildren[1].textContent;
            screenChildren[0].textContent += secondVariable + pressedButton;

            let result = operate(Number(firstVariable), Number(secondVariable), operator);

            screenChildren[1].textContent = result;

            console.log(firstVariable);
            console.log(operator);
            console.log(secondVariable);

            firstVariable = undefined;
            secondVariable = undefined;
            operator = undefined;
        };

        if ("C".includes(pressedButton)){
            screenChildren[0].textContent = "";
            screenChildren[1].textContent = "";
            
            firstVariable = undefined;
            secondVariable = undefined;
            operator = undefined;
        };
        
    });
});