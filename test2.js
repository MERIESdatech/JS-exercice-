var prompt = require('prompt-sync')();

let livres = [];

function ajouterLivre() {
    let titre = prompt("Titre du livre : ");
    let auteur = prompt("Auteur du livre : ");
    let prix = Number(prompt("Prix du livre : "));
    let quantite = Number(prompt("Quantite en stock : "));

    let livre = {
        titre: titre,
        auteur: auteur,
        prix: prix,
        quantite: quantite
    };

    livres.push(livre);

    console.log("Livre ajoute avec succes !");
}

function afficherLivres() {
    if (livres.length === 0) {
        console.log("Aucun livre dans le stock.");
        return;
    }

    console.log("\n===== LISTE DES LIVRES =====");

    for (let i = 0; i < livres.length; i++) {
        console.log("----------------------");
        console.log("Titre :", livres[i].titre);
        console.log("Auteur :", livres[i].auteur);
        console.log("Prix :", livres[i].prix, "DH");
        console.log("Quantite :", livres[i].quantite);
    }
}

function rechercherLivre() {
    let titre = prompt("Donnez le titre du livre : ");

    let trouve = false;

    for (let i = 0; i < livres.length; i++) {
        if (livres[i].titre.toLowerCase() === titre.toLowerCase()) {
            console.log("\nLivre trouve !");
            console.log("Titre :", livres[i].titre);
            console.log("Auteur :", livres[i].auteur);
            console.log("Prix :", livres[i].prix, "DH");
            console.log("Quantite :", livres[i].quantite);

            trouve = true;
        }
    }

    if (trouve === false) {
        console.log("Livre non trouve.");
    }
}

function modifierQuantite() {
    let titre = prompt("Titre du livre : ");

    let trouve = false;

    for (let i = 0; i < livres.length; i++) {
        if (livres[i].titre.toLowerCase() === titre.toLowerCase()) {
            let nouvelleQuantite = Number(
                prompt("Nouvelle quantite : ")
            );

            livres[i].quantite = nouvelleQuantite;

            console.log("Quantite mise a jour !");
            trouve = true;
        }
    }

    if (trouve === false) {
        console.log("Livre non trouve.");
    }
}

function supprimerLivre() {
    let titre = prompt("Titre du livre a supprimer : ");

    let trouve = false;

    for (let i = 0; i < livres.length; i++) {
        if (livres[i].titre.toLowerCase() === titre.toLowerCase()) {
            livres.splice(i, 1);

            console.log("Livre supprime avec succes !");
            trouve = true;

            break;
        }
    }

    if (trouve === false) {
        console.log("Livre non trouve.");
    }
}

function totalStock() {
    let total = 0;

    for (let i = 0; i < livres.length; i++) {
        total += livres[i].quantite;
    }

    console.log("Nombre total de livres en stock :", total);
}

let choix;

do {
    console.log("\n==============================");
    console.log("     GESTION DE STOCK");
    console.log("==============================");
    console.log("1. Ajouter un livre");
    console.log("2. Afficher tous les livres");
    console.log("3. Rechercher un livre");
    console.log("4. Modifier la quantite");
    console.log("5. Supprimer un livre");
    console.log("6. Afficher le total du stock");
    console.log("7. Quitter");
    console.log("==============================");

    choix = Number(prompt("Votre choix : "));

    if (choix === 1) {
        ajouterLivre();
    } else if (choix === 2) {
        afficherLivres();
    } else if (choix === 3) {
        rechercherLivre();
    } else if (choix === 4) {
        modifierQuantite();
    } else if (choix === 5) {
        supprimerLivre();
    } else if (choix === 6) {
        totalStock();
    } else if (choix === 7) {
        console.log("Au revoir !");
    } else {
        console.log("Choix invalide.");
    }

} while (choix !== 7);