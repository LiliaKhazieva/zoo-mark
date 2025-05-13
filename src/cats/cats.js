import { catsData } from '../data/catsData'
import { dogsData } from '../data/dogsData'

const list = document.querySelector('.cards')

/// create cards for pages
function renderProductCard(product) {
  const li = document.createElement('li')
  li.classList.add('card-item', 'card-open')

  li.innerHTML = `
        <span>Нажми на меня</span>
        <img src='${product.url}'/>
        <a href='#'>${product.title}</a>`

  return li
}

function appendProductCard(product, container) {
  container.append(product)
}

function renderProductCards(arr, container) {
  arr.forEach((product) => {
    const card = renderProductCard(product)
    appendProductCard(card, container)
  })
}

function joise() {
  const currentUrl = window.location.href
  if (currentUrl.includes('cats')) {
    renderProductCards(catsData, list)
  } else if (currentUrl.includes('dogs')) {
    renderProductCards(dogsData, list)
  } else return
}

joise()

const popup = document.querySelector('.popup')
const img = document.querySelector('.popup img')
const titlePopup = document.querySelector('.popup h2')
const descriptionPopup = document.querySelector('.popup p')

const open = document.querySelectorAll('.card-open')
const overlay = document.querySelector('.popup-overlay')

function popupCreate(arr) {
  open.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      img.src = arr[index].url
      titlePopup.textContent = arr[index].title
      descriptionPopup.textContent = arr[index].description

      overlay.classList.add('active')
      popup.classList.add('active')
    })
  })
  const close = document.querySelector('.close')
  close.addEventListener('click', () => {
    overlay.classList.remove('active')
    popup.classList.remove('active')
  })

  document.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active')
      popup.classList.remove('active')
    }
  })
}

function joisePopup() {
  const currentUrl = window.location.href
  if (currentUrl.includes('cats')) {
    popupCreate(catsData)
  } else if (currentUrl.includes('dogs')) {
    popupCreate(dogsData)
  } else return
}

joisePopup()
