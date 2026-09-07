let tab = [6, 3, 0, 7, 4, 2, 1, 5, 8];

for(let i = 0 ; i < tab.length; i++) {
    for (let j=i + 1; j < tab.length ;j++){
        if(tab[i] > tab[j]) {
            let temp =tab[i]
            tab[i]= tab[j]
            tab[j]=temp;
        }
    }
}
console.log(tab) 

