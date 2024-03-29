// Fonction pour obtenir la valeur associée à une clé dans une chaîne JSON
function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);
    if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key];
    } else {
        return "";
    }
}

// Valeur JSON par défaut pour les tests
const defaultJSONString = `{
    "name": "La Plateforme_",
    "adresse": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Clé par défaut pour les tests
const defaultKey = "city";

// Appel de la fonction jsonValueKey avec les valeurs par défaut
const defaultValue = jsonValueKey(defaultJSONString, defaultKey);

// Affichage du résultat dans la console pour test
console.log("Valeur associée à la clé '" + defaultKey + "' : " + defaultValue);
