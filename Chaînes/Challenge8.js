var prompt = require('prompt-sync')();


function toLowerCase(text) {
    return text.toLowerCase();
}

let text = prompt("enter somthing :");

console.log("Lowercase:", toLowerCase(text));