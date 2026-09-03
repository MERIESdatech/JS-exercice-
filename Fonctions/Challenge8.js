var prompt = require('prompt-sync')();

function test(nombre) {
    let result = nombre % 2;

    if (result === 0) {
        return true;
    } else {
        return false;
    }
}

let nombre = Number(prompt("entrez un nombre : "));

let result= test(nombre);

if (result === true) {
    console.log("pair");
} else {
    console.log("impair");
}