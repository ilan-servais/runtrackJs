$(document).ready(function() {
    // Mélanger les images et vérifier l'ordre
    $("#shuffleButton").click(function() {
        var images = $("#rainbow .rainbow-img");
        images.sort(function() {
            return Math.random() - 0.5;
        });
        $("#rainbow").empty().append(images);

        // Vérifier si les images sont dans le bon ordre
        var ordered = true;
        images.each(function(index) {
            var expectedFileName = "arc" + (index + 1) + ".png";
            if ($(this).attr("src") !== expectedFileName) {
                ordered = false;
                return false; // Sortir de la boucle each
            }
        });

        if (ordered) {
            $("#message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu").css("color", "red");
        }
    });
});
