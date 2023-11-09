const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
  
];

 // Variable du début du slide
let currentSlide = 0;

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  console.log("flèche gauche cliquée");

  // Retour de l'image de la diapositive actuelle
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  // Appele une fonction pour mettre à jour le contenu du carrousel
  updateCarousel();
});



const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  console.log("flèche droite cliquée");

  // Defilement de l'image de la diapositive actuelle
  currentSlide = (currentSlide + 1) % slides.length;

  // Appele une fonction pour mettre à jour le contenu du carrousel
  updateCarousel();
});


const banner = document.querySelector("#banner");

// Sélection de l'élément avec la classe "dots" et stockage dans la variable "dotsContainer"
const dotsContainer = banner.querySelector(".dots");

// Parcours de chaque diapositive dans le tableau "slides" en utilisant une boucle forEach
slides.forEach((slide, index) => {

  // Crée un élément "div" pour représenter un point (dot)
  const dot = document.createElement("div");

  // Ajout de la classe "dot" à cet élément
  dot.classList.add("dot");

  // Si l'index de la diapositive est égal à currentSlide, ajoute la classe "dot_selected" pour indiquer que la diapositive est active par défaut
  if (index === currentSlide) {
    dot.classList.add("dot_selected");
  }

  // Ajout d'un écouteur d'événements "click" à chaque point pour gérer le clic de l'utilisateur
  dot.addEventListener("click", () => {
    // Clic sur un point

    // Mettre à jour la diapositive actuelle en fonction de l'index du point
    currentSlide = index;

    // Appel de la fonction pour mettre à jour le contenu du carrousel
    updateCarousel();
  });

  // Ajout de l'élément "dot" créé à l'élément "dotsContainer", qui contient tous les points
  dotsContainer.appendChild(dot);
});

// Sélection de l'élément contenant l'image du carrousel
const slideshow = banner.querySelector(".banner-img");

// Sélection de l'élément contenant le texte de la diapositive
const tagLine = banner.querySelector("p");

// Fonction pour mettre à jour le contenu du carrousel
function updateCarousel() {

  // Récupération des données de la diapositive actuelle
  const slide = slides[currentSlide];

  // Mise à jour de l'image du carrousel
  slideshow.src = `./assets/images/slideshow/${slide.image}`

  // Mise à jour du texte du carrousel en utilisant innerHTML
  tagLine.innerHTML = slide.tagLine;

  // Mise à jour des points pour indiquer la diapositive active
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Appel initial de la fonction pour afficher la première diapositive
updateCarousel();






