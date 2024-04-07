// calendar.js

// Fonction pour générer les jours du calendrier
function generateCalendarDays() {
    const daysContainer = document.getElementById('calendarDays');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDate = new Date();

    for (let i = 1; i <= 31; i++) {
        const li = document.createElement('li');
        const divDate = document.createElement('div');
        divDate.textContent = i;
        divDate.classList.add('date');
        li.appendChild(divDate);

        // Ajouter une classe 'past' pour les dates passées
        if (i < currentDate.getDate()) {
            li.classList.add('past');
        }

        // Ajout d'un événement pour gérer les demandes d'autorisation de présence lorsque l'utilisateur clique sur une date
        li.addEventListener('click', function() {
            handlePresenceAuthorization(i); // Passer la date cliquée en paramètre si nécessaire
        });

        daysContainer.appendChild(li);
    }
}

// Fonction pour gérer les demandes d'autorisation de présence
function handlePresenceAuthorization(date) {
    // Logique de gestion des demandes d'autorisation de présence
    // Cette fonction sera appelée lorsqu'un utilisateur effectue une action sur le calendrier
    console.log("Demande d'autorisation de présence pour la date :", date);
}

// Appel de la fonction pour générer les jours du calendrier au chargement de la page
window.onload = function() {
    generateCalendarDays();
    // Éventuellement, ajouter d'autres initialisations ici
};
