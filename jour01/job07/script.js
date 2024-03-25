function jourTravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1;
    var jour = date.getDate();
    var joursFeries = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-30", // Ascension
        "2024-06-10", // Lundi de Pentecôte
        "2024-07-14", // Fête nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice 1918
        "2024-12-25"  // Noël
    ];

    var dateStr = date.toISOString().substring(0, 10);

    if (joursFeries.includes(dateStr)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

// Test de la fonction avec différentes dates

// Jour férié : Nouvel An (1er janvier 2024)
var nouvelAn = new Date("2024-01-01");
jourTravaille(nouvelAn);

// Jour férié : Fête du Travail (1er mai 2024)
var feteTravail = new Date("2024-05-01");
jourTravaille(feteTravail);

// Jour férié : Fête nationale (14 juillet 2024)
var feteNationale = new Date("2024-07-14");
jourTravaille(feteNationale);

// Week-end : Samedi (17 février 2024)
var samedi = new Date("2024-02-17");
jourTravaille(samedi);

// Week-end : Dimanche (18 février 2024)
var dimanche = new Date("2024-02-18");
jourTravaille(dimanche);

// Jour travaillé : Lundi (19 février 2024)
var lundi = new Date("2024-02-19");
jourTravaille(lundi);
