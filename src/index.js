import "./styles/index.css";

const list = document.querySelector(".header-modal");

const navData = [
  {
    name: "Породы",
    src: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Уход",
    src: "https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Страна происхождения",
    src: "https://images.unsplash.com/photo-1592508908964-c9a7200b9115?q=80&w=2937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function createNavItem(data) {
  data.forEach((obj) => {
    const { name, src } = obj;
    const dataItem = `
    <li>
      <img src="${src}"/>
        <a href='./cats.html'>${name}</a>
    </li>`;
    list.insertAdjacentHTML("beforeend", dataItem);
  });
}
createNavItem(navData);

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

function updateSlider() {
  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add(current);
      } else {
        slide.classList.remove(current);
      }
    });
  }
}
updateSlider();

function popupClickHandler() {}
