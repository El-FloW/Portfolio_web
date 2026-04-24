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
  const frames = [
    // Repos — texte normal
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
    // Montée du flash
    { text: "Photos", blur: 1,   brightness: 1.5,  opacity: 1    },
    { text: "Photos", blur: 3,   brightness: 2.5,  opacity: 1    },
    { text: "Photos", blur: 6,   brightness: 4,    opacity: 1    },
    // Pic du flash
    { text: "Photos", blur: 10,  brightness: 8,    opacity: 1    },
    // Descente (afterglow)
    { text: "Photos", blur: 6,   brightness: 3,    opacity: 1    },
    { text: "Photos", blur: 3,   brightness: 1.8,  opacity: 1    },
    { text: "Photos", blur: 1,   brightness: 1.2,  opacity: 1    },
    { text: "Photos", blur: 0,   brightness: 1,    opacity: 1    },
  ];

  const frame = frames[photostep];
  H1Photo.textContent = frame.text;
  H1Photo.style.filter = `blur(${frame.blur}px) brightness(${frame.brightness})`;
  H1Photo.style.transition = "filter 80ms ease-out";

  photostep = (photostep + 1) % frames.length;
}

setInterval(animatePhoto, 150);

// Lancer l'animation toutes les 500 ms
setInterval(animateDots, 500);
setInterval(animateVideo, 500);
setInterval(animatePhoto, 300);