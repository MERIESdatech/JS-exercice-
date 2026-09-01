var prompt = require('prompt-sync')();

let kmh = prompt("how many km/h ? :");

let ms = kmh * 0.27778;

console.log(`this the result 
    your speed in km/h is : ${kmh}
    your speed in m/s is : ${ms}
    `);
