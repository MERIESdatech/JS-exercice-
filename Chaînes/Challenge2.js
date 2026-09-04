var prompt = require('prompt-sync')();

function stringL(text) {
    let count = 0;

    for (let char of text) {
        count++;
    }

    return count;
}

let text = prompt("Enter a string: ");

console.log("The length of the string is:", stringL(text));