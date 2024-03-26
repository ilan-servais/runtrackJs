// Récupération de l'élément textarea
var keylogger = document.getElementById("keylogger");

// Ajout d'un écouteur d'événements pour la frappe de touches
document.addEventListener("keydown", function(event) {
    var letter = event.key.toLowerCase(); // Récupération de la lettre tapée (en minuscules)
    if (/^[a-z]$/.test(letter)) { // Vérification si la touche tapée est une lettre de l'alphabet
        if (document.activeElement === keylogger) { // Vérification si le focus est dans le textarea
            keylogger.value += letter.repeat(2); // Ajout de la lettre deux fois dans le textarea
        } else {
            keylogger.value += letter; // Ajout de la lettre une fois dans le textarea
        }
    }
});
