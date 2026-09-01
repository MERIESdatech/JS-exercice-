var prompt = require('prompt-sync')();


let nomber = Number(prompt("write a number : "));

if (nomber % 2 === 0 ){
    console.log(`this number is peer`);

}

else{
    console.log(`this number is odd`)
}