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

let currentSlide = 0; // Variable du début du slide

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  console.log("flèche gauche cliquée");
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  console.log("flèche droite cliquée");
});

// Sélection de l'élément avec l'ID "banner" et le stocke dans la variable "banner"
const banner = document.querySelector("#banner");

// Sélection de l'élément avec la classe "dots" et le stocke dans la variable "dotsContainer"
const dotsContainer = document.querySelector(".dots");

// Parcour de chaque diapositive dans la variable "slides" en utilisant une boucle forEach
slides.forEach((slide, index) => {
  
  // Crée un élément "div" pour représenter un point (dot)
  const dot = document.createElement("div");

  // Ajout de la classe "dot" à cet élément
  dot.classList.add("dot");

  // Si l'index de la diapositive est égal à currentSlide, ajout la classe "dot_selected" pour indiquer que la première diapositive est active par défaut
  if (index === currentSlide) {
    dot.classList.add("dot_selected");
  }

  // Ajout d'un écouteur d'événements "click" à chaque point pour gérer le clic de l'utilisateur
  dot.addEventListener("click", () => {
    console.log("point cliqué");
  });

  // Ajout de l'élément "dot" créé à l'élément "dotsContainer", qui contient tous les points
  dotsContainer.appendChild(dot);
});