function triPersonnalise(arr, key) {
    let ps = arr.length; // La longueur du tableau d'objets
    let k;

    // Tri à bulles (bubble sort)
    for (let i = 0; i < ps; i++) {
        for (let j = 0; j < ps - i - 1; j++) {
            // Comparaison basée sur la clé `key`
            if (arr[j][key] > arr[j + 1][key]) {
                // Échange des objets si nécessaire
                k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k;
            }
        }
    }
    return arr; // Retourne le tableau trié
}

// Exemple d'utilisation
let personnes = [
    {nom: 'Alice', age: 25},
    {nom: 'Bob', age: 30},
    {nom: 'Charlie', age: 20}
];

console.log(triPersonnalise(personnes, 'nom'));
// Attendu : [{nom: 'Charlie', age: 20}, {nom: 'Alice', age: 25}, {nom: 'Bob', age: 30}]



