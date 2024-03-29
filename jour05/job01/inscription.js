document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validation des champs du formulaire
    // À compléter selon les besoins

    // Exemple de validation de l'email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        return;
    } else {
        emailError.textContent = '';
    }

    // Exemple de validation du code postal (peut être étendu selon les critères)
    const codePostalInput = document.getElementById('codePostal');
    const codePostalError = document.getElementById('codePostalError');
    if (!validateCodePostal(codePostalInput.value)) {
        codePostalError.textContent = 'Veuillez entrer un code postal valide.';
        return;
    } else {
        codePostalError.textContent = '';
    }
    // Envoyer les données d'inscription au serveur ici
    // Exemple: fetch('/register', { method: 'POST', body: new FormData(this) });
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateCodePostal(codePostal) {
    // Exemple de validation de code postal (peut être étendu selon les besoins)
    const re = /^[0-9]{5}$/;
    return re.test(codePostal);
}
