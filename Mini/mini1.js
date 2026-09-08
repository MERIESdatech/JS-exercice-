var prompt = require("prompt-sync")();


// tableau lighaykon fih les livers

let livres = [

    {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        prix: 50,
        quantite: 10
    },

    {
        titre: "L'Etranger",
        auteur: "Albert Camus",
        prix: 70,
        quantite: 5
    },

    {
        titre: "Candide",
        auteur: "Voltaire",
        prix: 60,
        quantite: 8
    }
];


// function litkhlina n ajouter des livers

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

    livres[livres.length] = livre;

    console.log("Livre ajoute avec succes !");
}


// function litkhlina n affichiw des livers

function afficherLivres() {

    if (livres.length == 0) {

        console.log("Aucun livre dans le stock.");

    } else {

        for (let i = 0; i < livres.length; i++) {

            console.log("Livre numero " + (i + 1));

            console.log("Titre : " + livres[i].titre);

            console.log("Auteur : " + livres[i].auteur);

            console.log("Prix : " + livres[i].prix + " DH");

            console.log("Quantite : " + livres[i].quantite);

            console.log("");
        }
    }
}


// bach nsearchiw ela chi liver

function rechercherLivre() {

    let recherche = prompt("Donnez le titre du livre : ");

    let trouve = false;

    for (let i = 0; i < livres.length; i++) {

        if (livres[i].titre == recherche) {

            console.log("Livre trouve !");

            console.log("Titre : " + livres[i].titre);

            console.log("Auteur : " + livres[i].auteur);

            console.log("Prix : " + livres[i].prix + " DH");

            console.log("Quantite : " + livres[i].quantite);

            trouve = true;
        }
    }

    if (trouve == false) {

        console.log("Livre introuvable.");
    }
}


// bach n modifiew ela chi haja bghinaha

function modifierQuantite() {

    let recherche = prompt("Titre du livre : ");

    let trouve = false;

    for (let i = 0; i < livres.length; i++) {

        if (livres[i].titre == recherche) {

            let nouvelleQuantite =
                Number(prompt("Nouvelle quantite : "));

            livres[i].quantite = nouvelleQuantite;

            console.log("Quantite modifiee avec succes !");

            trouve = true;
        }
    }

    if (trouve == false) {

        console.log("Livre introuvable.");
    }
}


// bach nmsho chi haja bghinaha

function supprimerLivre() {

    let recherche =
        prompt("Titre du livre a supprimer : ");

    let position = -1;

    for (let i = 0; i < livres.length; i++) {

        if (livres[i].titre == recherche) {

            position = i;
        }
    }

    if (position == -1) {

        console.log("Livre introuvable.");

    } else {

        for (let i = position; i < livres.length - 1; i++) {

            livres[i] = livres[i + 1];
        }

        livres.length = livres.length - 1;

        console.log("Livre supprime avec succes !");
    }
}


// hna kanchofo chhal total

function totalLivres() {

    let total = 0;

    for (let i = 0; i < livres.length; i++) {

        total = total + livres[i].quantite;
    }

    console.log(
        "Nombre total de livres en stock : " + total
    );
}


// hada menu

let choix;

do {

    console.log("1. Ajouter un livre");
    console.log("2. Afficher tous les livres");
    console.log("3. Rechercher un livre");
    console.log("4. Modifier la quantite");
    console.log("5. Supprimer un livre");
    console.log("6. Afficher le nombre total");
    console.log("0. Quitter");

    choix = Number(prompt("Votre choix : "));


    switch (choix) {

        case 1:
            ajouterLivre();
            break;

        case 2:
            afficherLivres();
              break;

        case 3:
            rechercherLivre();
            break;
        case 4:
             modifierQuantite();
            break;

        case 5:
            supprimerLivre();
                 break;
 
        case 6:
            totalLivres();
            break;

        case 0:
            console.log("Merci d'avoir utilise le programme !");
                break;
        default:
              console.log("Choix incorrect !");
    } 
} while (choix != 0);