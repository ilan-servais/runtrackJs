$(document).ready(function() {
    // Fonction pour mélanger les images de l'arc-en-ciel
    function shuffleRainbow() {
        var images = $('#rainbow').children('.rainbow-img');
        for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var temp = images[i].src;
            images[i].src = images[randomIndex].src;
            images[randomIndex].src = temp;
        }
    }

    // Vérifier si les images sont dans le bon ordre
    function checkOrder() {
        var correctOrder = true;
        $('#container').children('.rainbow-img').each(function(index) {
            if ($(this).attr('alt') !== 'Arc ' + (index + 1)) {
                correctOrder = false;
                return false; // Sortir de la boucle each dès qu'une image est mal placée
            }
        });
        return correctOrder;
    }

    // Mélanger les images lorsqu'on clique sur le bouton "Mélanger"
    $('#shuffleButton').on('click', function() {
        shuffleRainbow();
        $('#message').empty(); // Vider le message après chaque mélange
    });

    // Permettre le déplacement des images dans le conteneur
    $('.rainbow-img').on('click', function() {
        var clickedImg = $(this);
        var container = $('#container');

        // Ajouter l'image dans le conteneur si elle n'est pas déjà dedans
        if (!clickedImg.parent().is(container)) {
            container.append(clickedImg.clone());
        } else { // Retirer l'image du conteneur si elle est déjà dedans
            clickedImg.remove();
        }

        // Vérifier si toutes les images sont dans le conteneur
        if ($('#container').children('.rainbow-img').length === 6) {
            // Si toutes les images sont dans le conteneur, vérifier si elles sont dans le bon ordre
            if (checkOrder()) {
                $('#message').text('Vous avez gagné').css('color', 'green');
            } else {
                $('#message').text('Vous avez perdu').css('color', 'red');
            }
        } else {
            $('#message').empty(); // Vider le message si toutes les images ne sont pas dans le conteneur
        }
    });
});
