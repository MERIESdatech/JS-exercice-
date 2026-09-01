
var prompt = require('prompt-sync')(); // Vous devez ajouter cette ligne pour que votre code fonctionne normalement.ha

// lets give peaple what they should write 
let firstName  = prompt("what your name ?");
let lastName  = prompt("what you last name  ?");
let age = prompt("how old are you  ?");
let sex  = prompt("are your F or M  ?");
let mail  = prompt("what is your email ?");

// lets show peaple what they write
console.log(`this is your information :
-your name : ${firstName}
-your lastName : ${lastName}
-your age : ${age}
-your sex : ${sex}
-your mail : ${mail}`);