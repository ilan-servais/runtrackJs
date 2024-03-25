function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Test de la fonction avec différentes valeurs
console.log(sommeNombresPremiers(3, 5)); // Devrait retourner 8
console.log(sommeNombresPremiers(6, 7)); // Devrait retourner false
console.log(sommeNombresPremiers(11, 13)); // Devrait retourner 24
