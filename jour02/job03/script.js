var compteur = 0; // Initialisation du compteur de clics

// Récupération de l'élément bouton
var button = document.getElementById("button");

// Ajout d'un écouteur d'événements pour le clic sur le bouton
button.addEventListener("click", addOne);

function addOne() {
    compteur++; // Incrémentation du compteur à chaque clic
    // Mise à jour du contenu du paragraphe avec le nouveau compteur
    document.getElementById("compteur").textContent = compteur;
}
