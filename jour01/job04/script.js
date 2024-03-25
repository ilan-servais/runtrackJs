function bisextile(annee) {
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

// Test de la fonction
console.log(bisextile(2000)); // Devrait retourner true
console.log(bisextile(2004)); // Devrait retourner true
console.log(bisextile(1900)); // Devrait retourner false
console.log(bisextile(2021)); // Devrait retourner false
