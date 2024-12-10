class Produit {
    constructor(nom, prix, quantite){
        this.nom = nom 
        this.prix = prix
        this.quantite = quantite

    }


    afficherDetails() {
        return `${this.nom} - Prix : ${this.prix}€, Quantité : ${this.quantite}`;
    }


}

class Magasin {
    constructor(){
        this.produits = []
    }





    ajouterProduit(produit){
        this.produits.push(produit);
        console.log("le produt a été ajouté ")
    }

    afficherProduits() {
        if (this.produits.length === 0) {
            console.log("Aucun produit dans le magasin.");
        } else {
            this.produits.forEach(produit => {
                console.log(produit.afficherDetails());
            });
        }

    } 
    mettreAJourQuantite(nom , newquantite){
        let produit =  this.produits.find(p => p.nom === nom)

        if(produit){
            produit.quantite = newquantite ;
            console.log(`le produit ${produit} a bien été modifié`)
        }else{
            console.log("le produit n'existe pas !")
        }
    }

    supprimerProduit(nom) {
        this.produits = this.produits.filter(produit => produit.nom !== nom);
    }


    calculerValeurTotale() {
        if (this.produits.length === 0) {
            console.log("Aucun produit dans le magasin.");
        } else {
            let value = 0
            this.produits.forEach(produit => {
                value += produit.prix * produit.quantite;    
            });
            console.log(`la value totale est ${value}`)
        }

    } 

    trouverProduitchers(magasin , prixSeuil){
        let resultat =  this.magasin.find(prix => prix.nom > prixSeuil);
        console.log(resultat)
    }
    
}

let magasin = new Magasin(); 
let produit1 = new Produit('Livre', 10, 5); 
let produit2 = new Produit('Stylo', 2, 10); 
magasin.ajouterProduit(produit1); 
magasin.ajouterProduit(produit2); 
console.log(magasin.produits);  
// Affiche les produits ajoutés 
magasin.mettreAJourQuantite('Livre', 3); 
magasin.supprimerProduit('Stylo'); 
console.log(magasin.calculerValeurTotale());