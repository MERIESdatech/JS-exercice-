var prompt = require('prompt-sync')();


let a = Number(prompt("write the first number : "));
let b = Number(prompt("write the secende number : "));

let somme = a + b;

if (a === b) {
    somme = somme * 3;
}

console.log("result :", somme);