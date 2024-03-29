function jsonValueKey(jsonString, key) {
    // Parse la chaîne JSON en objet JavaScript
    const jsonObject = JSON.parse(jsonString);
    
    // Vérifie si la clé existe dans l'objet JSON
    if (key in jsonObject) {
        // Retourne la valeur associée à la clé
        return jsonObject[key];
    } else {
        // Si la clé n'existe pas, retourne undefined
        return undefined;
    }
}

// Exemple d'utilisation de la fonction
const jsonString = `{
    "name": "La Plateforme_",
    "adresse": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;
const key = "city";
const result = jsonValueKey(jsonString, key);
console.log(result); // Affiche "Marseille"

// Sélectionne l'élément HTML avec l'identifiant "result"
const resultElement = document.getElementById("result");

// Affiche le résultat dans l'élément HTML
resultElement.innerHTML = "Ville : " + result;
