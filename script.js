document.addEventListener("DOMContentLoaded", function () {
    const text = "ZARU ARCHITECTURE";
    const target = document.getElementById("animated-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            target.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Kirjainten väliaika (150ms)
        }
    }

    typeEffect();
});
