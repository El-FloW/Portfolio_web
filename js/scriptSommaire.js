// script.js
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sélection des éléments
    const sommaire = document.querySelector('#sommaire');

    const threshold = 500; // Définissez le seuil ici
    if (scrollY > threshold) {
        sommaire.style.transform = 'translateY(0%)';
    } else {
        sommaire.style.transform = 'translateY(-100%)';
    }

    const opacity = Math.max(1 - scrollY / 700, 0);
    socialMedia.style.opacity = opacity;
    
});
