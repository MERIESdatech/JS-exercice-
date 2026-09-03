var prompt = require("prompt-sync")();

let year = Number(prompt("Enter the number of years :"));

console.log("1 - Month");
console.log("2 - Days");
console.log("3 - Hours");
console.log("4 - Minutes");
console.log("5 - Seconds");

let choix = Number(prompt("Choose an option :"));

switch (choix) {
    case 1:
        console.log("Month :", year * 12);
        break;

    case 2:
        console.log("Days :", year * 365);
        break;

    case 3:
        console.log("Hours :", year * 365 * 24);
        break;

    case 4:
        console.log("Minutes :", year * 365 * 24 * 60);
        break;

    case 5:
        console.log("Seconds :", year * 365 * 24 * 60 * 60);
        break;

    default:
        console.log("Choix invalide !");
}