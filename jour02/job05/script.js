window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    var color = "rgb(" + Math.floor(255 * (scrollPercent / 100)) + ", 0, 0)"; // Couleur évolue en fonction du pourcentage de scrolling
    footer.style.backgroundColor = color;
});
