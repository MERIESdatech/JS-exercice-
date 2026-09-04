var prompt = require('prompt-sync')();

function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) { reversed += text[i];
    }

    return reversed;
}

let text = prompt("enter somthing :");

          console.log("reversed string:", reverseString(text));