function creerLivre() {
    let livre = {
        titre: "Les Hommes dans le soleil",
        auteur: "Ghassan Kanafani",
        annee: 1969
    };

    return livre;
}

let livre = creerLivre();

console.log("Titre :", livre.titre);
console.log("Auteur :", livre.auteur);
console.log("Année :", livre.annee);