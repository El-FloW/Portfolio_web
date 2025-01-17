// script.js
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sélection des éléments
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const socialMedia = document.querySelector('.contact');

    // Vitesse différente pour le titre et le sous-titre
    title.style.transform = `translateY(${scrollY * 0.7}px)`;
    subtitle.style.transform = `translateY(${scrollY * 0.5}px)`;
    socialMedia.style.transform = `translateY(${scrollY * 0.3}px)`;
    
    const opacity = Math.max(1 - scrollY / 700, 0);
    socialMedia.style.opacity = opacity;
    
});
