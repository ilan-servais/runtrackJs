document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(input);
        });
    });

    document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Validation des champs du formulaire lors de la soumission
        validateForm();
    });
});

function validateInput(input) {
    const error = input.nextElementSibling;
    switch (input.name) {
        case 'nom':
        case 'prenom':
        case 'adresse':
            if (input.value.length < 3) {
                error.textContent = 'Ce champ doit contenir au moins 3 caractères.';
            } else {
                error.textContent = '';
            }
            break;
        case 'email':
            if (!validateEmail(input.value)) {
                error.textContent = 'Veuillez entrer une adresse email valide.';
            } else {
                error.textContent = '';
            }
            break;
        case 'password':
            if (input.value.length < 3) {
                error.textContent = 'Le mot de passe doit contenir au moins 3 caractères.';
            } else {
                error.textContent = '';
            }
            break;
        case 'codePostal':
            if (!validateCodePostal(input.value)) {
                error.textContent = 'Veuillez entrer un code postal valide.';
            } else {
                error.textContent = '';
            }
            break;
        default:
            break;
    }
}

function validateForm() {
    const inputs = document.querySelectorAll('input');
    let isValid = true;
    inputs.forEach(input => {
        validateInput(input);
        if (input.nextElementSibling.textContent !== '') {
            isValid = false;
        }
    });
    if (isValid) {
        // Si le formulaire est valide, tu peux envoyer les données au serveur ici
        // Exemple: fetch('/register', { method: 'POST', body: new FormData(document.getElementById('inscriptionForm')) });
        console.log('Formulaire valide, envoi des données au serveur...');
    } else {
        console.log('Le formulaire contient des erreurs.');
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateCodePostal(codePostal) {
    // Validation de code postal (5 chiffres)
    const re = /^\d{5}$/;
    return re.test(codePostal);
}
