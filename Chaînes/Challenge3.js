var prompt = require('prompt-sync')();


function concat(chain1, chain2) {
    return chain1 + "" + chain2;
}

let chain1 = prompt("enter first thing you wanna say  :");
let chain2 = prompt("what next ? :");

let result = concat(chain1, chain2);

console.log("result is : " + result);