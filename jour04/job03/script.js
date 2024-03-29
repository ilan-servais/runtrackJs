async function filtrerPokemons() {
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value.toLowerCase();
    const type = document.getElementById('type').value;

    // Récupérer les données du fichier JSON
    const response = await fetch('pokemon.json');
    const pokemons = await response.json();

    // Filtrer les pokemons en fonction des critères sélectionnés
    const filteredPokemons = pokemons.filter(pokemon => {
        return (id === '' || pokemon.id.toString() === id) &&
               (nom === '' || pokemon.name.english.toLowerCase().includes(nom)) &&
               (type === '' || pokemon.type.includes(type));
    });

    // Afficher les pokemons filtrés sur la page HTML
    afficherPokemons(filteredPokemons);
}

function afficherPokemons(pokemons) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (pokemons.length === 0) {
        resultElement.innerHTML = 'Aucun Pokémon trouvé.';
    } else {
        const ul = document.createElement('ul');
        pokemons.forEach(pokemon => {
            const li = document.createElement('li');
            const types = pokemon.type.join(', '); // Join les différents types avec une virgule et un espace
            const baseStats = `
                HP: ${pokemon.base.HP},
                Attack: ${pokemon.base.Attack},
                Defense: ${pokemon.base.Defense},
                Sp. Attack: ${pokemon.base['Sp. Attack']},
                Sp. Defense: ${pokemon.base['Sp. Defense']},
                Speed: ${pokemon.base.Speed}
            `;
            li.innerHTML = `
                <strong>ID:</strong> ${pokemon.id}<br>
                <strong>Nom:</strong> ${pokemon.name.english}<br>
                <strong>Type:</strong> ${types}<br>
                <strong>Stats de base:</strong> ${baseStats}
            `;
            ul.appendChild(li);
        });
        resultElement.appendChild(ul);
    }
}
