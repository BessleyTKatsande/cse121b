/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
   return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    result = add(addNumber1, addNumber2);
}

document.querySelector('#sum').value = result;

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    result = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#difference').value = result;

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    result = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#product').value = result;

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend1, dividend2) {
    return dividend1 / dividend2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    result = divide(dividend, divisor);
}

document.querySelector('#quotient').value = result;

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numberslist = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13];

document.querySelector('#array').textCotent = numberslist;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numberslist.filter((number) => number % 2);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numberslist.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
numberslist.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
numberslist.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumofMultiplied').textContent = numberslist
.map(number => number * 2)
.reduce((sum, number) => sum + number);