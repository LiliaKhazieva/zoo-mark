import './styles/index.css'

// preloader

const preloader = document.getElementById('preloader')

preloader &&
  window.addEventListener('load', () => {
    preloader.style.display = 'none'
  })

// scrolls

window &&
  window.addEventListener('scroll', function () {
    if (scrollY > 80) {
      document.querySelector('#header').classList.add('header-scroll')
    } else {
      document.querySelector('#header').classList.remove('header-scroll')
    }
  })

// toggle button

function toggleButton() {
  const btns = document.querySelectorAll('.btn')
  for (let button of btns) {
    button.addEventListener('click', () => {
      btns.forEach((index) => {
        index.classList.remove('btn-active')
      })
      button.classList.toggle('btn-active')
    })
  }
}
toggleButton()

// слайдер

const slides = document.querySelectorAll('.slide')
const slideCount = slides.length
let slideIndex = 1

const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount
  updateSlider()
}

function showPrevSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount
  updateSlider()
}

function updateSlider() {
  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add('current')
      } else {
        slide.classList.remove('current')
      }
    })
  }
}

nextButton && nextButton.addEventListener('click', showNextSlide)
prevButton && prevButton.addEventListener('click', showPrevSlide)
