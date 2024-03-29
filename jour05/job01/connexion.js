document.getElementById('connexionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validation de l'email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        return;
    } else {
        emailError.textContent = '';
    }

    // Validation du mot de passe (peut être étendue selon les critères)
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (passwordInput.value.length < 3) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 3 caractères.';
        return;
    } else {
        passwordError.textContent = '';
    }

    // Envoyer les données de connexion au serveur ici
    // Exemple: fetch('/login', { method: 'POST', body: new FormData(this) });
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
