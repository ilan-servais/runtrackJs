function updateUserTable() {
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.innerHTML = ''; // Effacer le contenu actuel du tableau

    // Récupérer les données des utilisateurs depuis le fichier JSON
    fetch('utilisateur.json')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                userTableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
        });
}

function ajouterUtilisateur() {
    const userId = document.getElementById('userId').value;
    const userNom = document.getElementById('userNom').value;
    const userPrenom = document.getElementById('userPrenom').value;
    const userEmail = document.getElementById('userEmail').value;

    const newUser = {
        id: userId,
        nom: userNom,
        prenom: userPrenom,
        email: userEmail
    };

    // Ajouter le nouvel utilisateur au tableau des utilisateurs
    fetch('utilisateur.json')
        .then(response => response.json())
        .then(users => {
            users.push(newUser);
            // Mettre à jour le fichier JSON avec le nouvel utilisateur en utilisant la méthode POST
            return fetch('utilisateur.json', {
                method: 'POST', // Utiliser la méthode POST pour ajouter un nouvel utilisateur
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(users)
            });
        })
        .then(() => {
            // Mettre à jour le tableau des utilisateurs sur la page
            updateUserTable();
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de l\'ajout de l\'utilisateur :', error);
        });
}
