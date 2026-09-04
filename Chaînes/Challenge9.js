var prompt = require('prompt-sync')();

function removeSpaces(text) {
    let tableau = [];
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
            tableau.push(text[i]);
        }
    }

    return tableau.join("");
}

let text = prompt("Enter something with spaces: ");

console.log("Result is:", removeSpaces(text));