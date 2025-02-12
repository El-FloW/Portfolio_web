// script.js
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sélection des éléments
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const socialMedia = document.querySelector('.contact');
    const sommaire = document.querySelector('#sommaire');
    const guirlandes = document.querySelector('.guirlandes');

    // Vitesse différente pour le titre et le sous-titre
    title.style.transform = `translateY(${scrollY * 0.7}px)`;
    subtitle.style.transform = `translateY(${scrollY * 0.5}px)`;
    socialMedia.style.transform = `translateY(${scrollY * 0.3}px)`;
    guirlandes.style.backgroundPositionY = `${scrollY * -0.5}px`;


    const threshold = 500; // Définissez le seuil ici
    if (scrollY > threshold) {
        sommaire.style.transform = 'translateY(0%)';
    } else {
        sommaire.style.transform = 'translateY(-100%)';
    }

    const opacity = Math.max(1 - scrollY / 700, 0);
    socialMedia.style.opacity = opacity;
    
});
