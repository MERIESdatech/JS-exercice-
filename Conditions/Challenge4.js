var prompt = require("prompt-sync")();

let a = Number(prompt("write  a : "));
let b = Number(prompt("write b : "));
let c = Number(prompt("write c : "));

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);

    console.log("x1 =", x1);
    console.log("x2 =", x2);

} else if (delta === 0) {
    let x = -b / (2 * a);

    console.log("x =", x);

} else {
    console.log("No solution");
}