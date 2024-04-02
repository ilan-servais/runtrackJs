// Modal pour traiter l'achat du papillon
const btnConfirmerAchat = document.getElementById('btnConfirmerAchat');

btnConfirmerAchat.addEventListener('click', () => {
  // Votre code pour traiter l'achat du papillon
  alert('Achat confirmé !');
});


// Définition du texte initial du jumbotron
const jumbotronInitialText = "Il existe plusieurs visions du terme : le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison. Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.";

// Sélection de l'élément du jumbotron par son ID
const jumbotronText = document.getElementById('jumbotron-text');

// Modification du texte du jumbotron avec le texte initial
jumbotronText.textContent = jumbotronInitialText;

// Définition d'un tableau de citations de Blade Runner
const citationsBladeRunner = [
    "Tous ces moments se perdront dans l'histoire, comme les larmes dans la pluie.",
    "Je veux voir briller les étoiles au-dessus des collines, Leonard. Les étoiles qui ont brillé quand tu étais né.",
    "Est-ce que les androïdes rêvent de moutons électriques ?"
    // Ajoute d'autres citations ici
];

// Fonction pour choisir aléatoirement une citation dans le tableau
function citationAleatoire() {
    return citationsBladeRunner[Math.floor(Math.random() * citationsBladeRunner.length)];
}

// Sélection du bouton "Rebooter le Monde" par son ID
const rebootButton = document.getElementById('reboot-button');

// Ajout d'un écouteur d'événements pour le clic sur le bouton
rebootButton.addEventListener('click', () => {
    // Sélection de l'élément du jumbotron par son ID
    const jumbotronText = document.getElementById('jumbotron-text');
    // Modification du texte du jumbotron avec une citation aléatoire
    jumbotronText.textContent = citationAleatoire();
});

// Sélection de l'élément du jumbotron
const jumbotronContent = document.querySelector('.jumbotron');

// Fonctions pour changer le contenu du jumbotron en fonction de la page sélectionnée
function afficherPage1() {
    jumbotronContent.innerHTML = "<h1>Contenu de la page 1</h1><p>Texte de la page 1.</p>";
}

function afficherPage2() {
    jumbotronContent.innerHTML = "<h1>Contenu de la page 2</h1><p>Texte de la page 2.</p>";
}

function afficherPage3() {
    jumbotronContent.innerHTML = "<h1>Contenu de la page 3</h1><p>Texte de la page 3.</p>";
}

// Sélection de tous les liens de pagination
const pageLinks = document.querySelectorAll('.page-link');

// Ajout d'un écouteur d'événements à chaque lien de pagination
pageLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const pageNumber = link.innerText; // Récupère le numéro de la page à partir du texte du lien

    // Change le contenu du jumbotron en fonction du numéro de la page
    switch (pageNumber) {
      case '1':
        afficherPage1();
        break;
      case '2':
        afficherPage2();
        break;
      case '3':
        afficherPage3();
        break;
      default:
        break;
    }
  });
});

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const page1Button = document.getElementById('page1');
const page2Button = document.getElementById('page2');
const page3Button = document.getElementById('page3');

let currentPage = 1; // Initialisation de la page courante

// Écouteur d'événement pour le bouton "«"
previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePageContent();
  }
});

// Écouteur d'événement pour le bouton "»"
nextButton.addEventListener('click', () => {
  if (currentPage < 3) { // Le maximum est 3, puisque nous avons 3 pages
    currentPage++;
    updatePageContent();
  }
});

// Fonction pour mettre à jour le contenu en fonction de la page actuelle
function updatePageContent() {
  switch (currentPage) {
    case 1:
      afficherPage1();
      break;
    case 2:
      afficherPage2();
      break;
    case 3:
      afficherPage3();
      break;
    default:
      break;
  }
}


// Sélection de tous les éléments de la liste groupée
const listItems = document.querySelectorAll('.list-group-item');

// Ajout d'un écouteur d'événements à chaque élément de la liste
listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Supprimer la classe "active" de tous les éléments de la liste
    listItems.forEach(item => {
      item.classList.remove('active');
    });

    // Ajouter la classe "active" à l'élément cliqué
    item.classList.add('active');
  });
});


// Sélection de la barre de progression
const progressBar = document.getElementById('progress-bar');

// Sélection des boutons de contrôle
const progressForwardBtn = document.getElementById('progress-forward-btn');
const progressBackwardBtn = document.getElementById('progress-backward-btn');

// Valeur initiale de la barre de progression
let progressValue = 0;

// Fonction pour mettre à jour la barre de progression
function updateProgressBar() {
    progressBar.style.width = `${progressValue}%`;
    progressBar.setAttribute('aria-valuenow', progressValue);
}

// Écouteur d'événement pour le bouton d'avancement
progressForwardBtn.addEventListener('click', () => {
    if (progressValue < 100) {
        progressValue += 10; // Augmentez la progression de 10%
        updateProgressBar();
    }
});

// Écouteur d'événement pour le bouton de recul
progressBackwardBtn.addEventListener('click', () => {
    if (progressValue > 0) {
        progressValue -= 10; // Diminue la progression de 10%
        updateProgressBar();
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  