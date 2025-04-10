// import "./styles.css";
window.addEventListener("scroll", function () {
  if (scrollY > 80) {
    document.querySelector("#header").classList.add("scroll-header");
  } else {
    document.querySelector("#header").classList.remove("scroll-header");
  }
});
// слайдер
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
let slideIndex = 1;
const slideCount = slides.length;
const current = "current";

const prevButton = document.querySelector(".prev_button");
const nextButton = document.querySelector(".next_button");

nextButton.addEventListener("click", showNextSlide);

prevButton.addEventListener("click", showPrevSlide);

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function showPrevSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

console.log(showPrevSlide);

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add(current);
    } else {
      slide.classList.remove(current);
    }
  });
}
updateSlider();
