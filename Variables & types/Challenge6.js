var prompt = require('prompt-sync')();
let a = Number(prompt("write the first number : "));
let b = Number(prompt("write the secend number : "));

console.log(`the result is :
    a+b : ${a+b}
    a-b : ${a-b}
    a*b : ${a*b}
    a/b : ${a/b}
    `);
