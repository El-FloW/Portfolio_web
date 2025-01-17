// Sélectionner la balise H1 avec l'id "h1loading"
const h1Element = document.getElementById("h1loading");
const h1Video = document.getElementById("h1video");
const H1Photo = document.getElementById("h1photos");

// Initialisation des variables
let dots = "";
let h1vid = "";
let h1photo = "Photos";
let step = 0;
let videostep = 0;
let photostep = 0;

// Fonction pour animer les points
function animateDots() {
  // Calculer le nombre de points
  step = (step + 1) % 4; // Boucle entre 0, 1, 2, 3
  dots = ".".repeat(step); // Ajouter les points
  dots += "\u00A0".repeat(3-step)
  h1Element.textContent = dots; // Mettre à jour le texte
}

function animateVideo() {
  // Calculer le nombre de points
  videostep = (videostep + 1) % 2; // Boucle entre 0, 1, 2, 3
  // console.log(videostep);
  if(videostep){
    h1vid="Projets Vidéo\u00A0";
  }
  else{
    h1vid="Projets Vidéo|";
  }
  h1Video.textContent = h1vid; // Mettre à jour le texte
}

function animatePhoto() {
  // Calculer le nombre de points
  photostep = (photostep + 1) % 15; // Boucle entre 0, 1, 2, 3
  let photo_final = h1photo.slice(0, photostep);
  if(photo_final == ""){
    photo_final = "\u00A0";
  }

  console.log(photostep);
  
  H1Photo.textContent = photo_final; // Mettre à jour le texte
}

// Lancer l'animation toutes les 500 ms
setInterval(animateDots, 500);
setInterval(animateVideo, 500);
setInterval(animatePhoto, 300);