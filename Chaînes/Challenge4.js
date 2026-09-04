var prompt = require('prompt-sync')();


function compareStrings(text1, text2) {
    if (text1 === text2) {
        return "The strings are equal.";
    } else {
           return "The strings are different.";
    }
}

let text1 = prompt("enter somthing :");
let text2 = prompt("enter somthing :");

        console.log(compareStrings(text1, text2));