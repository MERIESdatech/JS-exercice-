
var prompt = require('prompt-sync')();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("1 = addition");
console.log("2 = subtraction");
console.log("3 = multiplication");
console.log("4 = division");
console.log("5 = quit");

let choice = Number(prompt("Choose: "));
let a, b;

if (choice >= 1 && choice <= 4) {
    a = Number(prompt("Enter first number: "));
    b = Number(prompt("Enter second number: "));
}

switch (choice) {
    case 1:
        console.log(add(a, b));
        break;

    case 2:
        console.log(subtract(a, b));
        break;

    case 3:
        console.log(multiply(a, b));
        break;

    case 4:
        console.log(divide(a, b));
        break;

    case 5:
        console.log("See you later!");
        break;

    default:
        console.log("Invalid choice");
}

