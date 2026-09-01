var prompt = require('prompt-sync')();
 
let km = prompt("how many kilomers ? :");


let yards = km *1093.61;

console.log(`this is your result : 
    your distance in km : ${km}
    your distance in yards :${yards}
    `);