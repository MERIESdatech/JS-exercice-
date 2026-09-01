var prompt = require("prompt-sync")();

let lettre = prompt("write a letter  :");

switch (lettre) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
        console.log("Vowel");
        break;

    default:
        console.log("Not a vowel");
}