var prompt = require('prompt-sync')();

let c = prompt("what is temperature in celsius ? : ");

if (c < 0 ){
    console.log("the water is solid" );
 
}

else if (c >=0 && c <100){
    console.log("the water is liquid");
}

else {
    console.log("this  water is GAZ ")
}