var prompt = require('prompt-sync')();

let c = prompt("waht is the temperature in celsius? : ");

let k = c + 273.15;

console.log(`the result is : 
   temperature in celdius is : ${c} 
   temperature in kelvin is : ${k} 
   `);