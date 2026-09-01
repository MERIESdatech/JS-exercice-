var prompt = require("prompt-sync")();

let annee = Number(prompt("Enter the number of years :"));

console.log("1 - Month");
console.log("2 - Days");
console.log("3 - Hours");
console.log("4 - Minutes");
console.log("5 - Seconds");

let choix = Number(prompt("Choose an option :"));

switch (choix) {
    case 1:
        console.log("Month :", annee * 12);
        break;

    case 2:
        console.log("Days :", annee * 365);
        break;

    case 3:
        console.log("Hours :", annee * 365 * 24);
        break;

    case 4:
        console.log("Minutes :", annee * 365 * 24 * 60);
        break;

    case 5:
        console.log("Seconds :", annee * 365 * 24 * 60 * 60);
        break;

    default:
        console.log("Choix invalide !");
}