class GestionnaireDeTaches {
    constructor() {
        this.taches = []; 
        this.idCounter = 1;
    }

   
    ajouterTache(titre, priorite, dateLimite) {
        const nouvelleTache = {
            id: this.idCounter++, 
            titre,
            priorite,
            dateLimite: new Date(dateLimite),
            completee: false 
        };
        this.taches.push(nouvelleTache);
    }

    supprimerTache(id) {
        this.taches = this.taches.filter(tache => tache.id !== id);
    }

    marquerTacheCompletee(id) {
        const tache = this.taches.find(t => t.id === id);
        if (tache) {
            tache.completee = true;
        }
    }

  
    filtrerTaches(statuts, priorites) {
        return this.taches.filter(tache =>
            statuts.includes(tache.completee) &&
            priorites.includes(tache.priorite)
        );
    }


    trierTaches() {
        this.taches.sort((a, b) => a.dateLimite - b.dateLimite);
    }
}



let gestionnaire = new GestionnaireDeTaches();


gestionnaire.ajouterTache('Faire les courses', 'Haute', '2023-12-31');
gestionnaire.ajouterTache('Appeler le client', 'Moyenne', '2023-11-15');
gestionnaire.ajouterTache('Envoyer un email', 'Basse', '2024-01-01');


console.log('Toutes les tâches :', gestionnaire.taches);


gestionnaire.marquerTacheCompletee(gestionnaire.taches[0].id);


let tachesFiltrees = gestionnaire.filtrerTaches([false], ['Moyenne', 'Basse']);
console.log('Tâches filtrées :', tachesFiltrees);


gestionnaire.trierTaches();
console.log('Tâches triées par date limite :', gestionnaire.taches);

gestionnaire.supprimerTache(gestionnaire.taches[0].id);
console.log('Après suppression :', gestionnaire.taches);
