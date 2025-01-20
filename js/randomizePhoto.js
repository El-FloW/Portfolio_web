// Récupérer tous les éléments avec la classe "Photo"
const photos = document.querySelectorAll('.Photo');

// Ajouter une rotation aléatoire à chaque élément
photos.forEach(photo => {
  // Générer une rotation aléatoire entre -10 et 10 degrés
  const randomRotation = Math.random() * 20 - 10; // (Math.random() * (max - min)) + min
  // Appliquer la transformation CSS
  photo.style.transform = `rotate(${randomRotation}deg)`;
});
