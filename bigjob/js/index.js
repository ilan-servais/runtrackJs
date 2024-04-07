// Sélection du formulaire d'inscription par sa classe
const registrationForm = document.querySelector('.registration-form');

// Ajout d'un écouteur d'événement sur la soumission du formulaire
registrationForm.addEventListener('submit', function(event) {
    // Récupération de la valeur de l'adresse email saisie par l'utilisateur
    const emailInput = document.querySelector('#email');
    const email = emailInput.value;

    // Extraction du domaine de l'adresse email
    const domain = email.substring(email.lastIndexOf('@') + 1);

    // Domaine autorisé
    const allowedDomain = 'laplateforme.io';

    // Vérification si le domaine de l'adresse email correspond au domaine autorisé
    if (domain !== allowedDomain) {
        // Empêcher le formulaire de soumettre
        event.preventDefault();
        // Afficher un message d'erreur
        alert('Veuillez utiliser une adresse email de domaine laplateforme.io');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire de connexion
    var form = document.querySelector('#loginForm');

    // Ajoutez un écouteur d'événements pour la soumission du formulaire
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        // Récupérez les valeurs des champs d'entrée (email et mot de passe)
        var email = document.querySelector('#floatingInput').value;
        var password = document.querySelector('#floatingPassword').value;

        // Exemple de vérification de connexion réussie (à remplacer par votre propre logique)
        if (email === 'votre@email.com' && password === 'votreMotDePasse') {
            // Redirigez l'utilisateur vers la page calendar.html
            window.location.href = 'calendar.html';
        } else {
            // Afficher un message d'erreur ou effectuer d'autres actions en cas d'échec de la connexion
            alert('Identifiants incorrects. Veuillez réessayer.');
        }
    });
});
