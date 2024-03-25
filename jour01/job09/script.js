function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.error("Order doit être 'asc' ou 'desc'.");
    }
    return numbers;
}

// Test de la fonction avec un tableau de nombres et différents ordres
var tableau = [5, 2, 8, 1, 9, 4];
console.log("Tableau initial :", tableau);
console.log("Tableau trié (asc) :", tri(tableau.slice(), "asc"));
console.log("Tableau trié (desc) :", tri(tableau.slice(), "desc"));
