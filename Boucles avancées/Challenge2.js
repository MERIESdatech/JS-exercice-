var prompt = require('prompt-sync')();

let n = Number(prompt("Entrez le nombre de lignes : "));



for (let i = n; i >= 1; i--) {
    let espaces = " ".repeat(n - i);
    let etoiles = "*".repeat(2 * i - 1);


    console.log(espaces + etoiles);
}




