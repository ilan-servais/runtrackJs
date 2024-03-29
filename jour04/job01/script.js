// Ajout d'un écouteur d'événement au clic sur le bouton
document.getElementById("button").addEventListener("click", function() {
    // Utilisation de Fetch pour récupérer le contenu du fichier "expression.txt"
    fetch("./expression.txt")
        .then(response => {
            // Vérification de la réponse de la requête Fetch
            if (!response.ok) {
                throw new Error("Erreur de récupération du fichier.");
            }
            // Récupération du texte de la réponse
            return response.text();
        })
        .then(data => {
            // Insertion du texte récupéré dans un paragraphe HTML
            document.getElementById("expression").textContent = data;
        })
        .catch(error => {
            // Gestion des erreurs et affichage dans la console
            console.error("Erreur :", error);
        });
});
