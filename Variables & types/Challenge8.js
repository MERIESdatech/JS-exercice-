var prompt = require('prompt-sync')();

let a = prompt("Enter a : ");
let b = prompt("Enter b : ");
let c = prompt("Enter c : ");

let moyenne = (a * b * c)^(1/3);

console.log(`this is the result :
    value of a is : ${a}
    value of b is : ${b}
    value of c is : ${c}
    geaometric mean is : ${moyenne} `);