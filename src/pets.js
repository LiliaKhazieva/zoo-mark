import { catsData } from './data/catsData'
import { dogsData } from './data/dogsData'

const allPetsArr = [...catsData, ...dogsData]

const list = document.querySelector('.cards')

/// create cards for pages
function renderProductCard(product) {
  const li = document.createElement('li')
  li.classList.add('card-item')
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

const popup = document.querySelector('.popup')
const img = document.querySelector('.popup img')
const titlePopup = document.querySelector('.popup h2')
const descriptionPopup = document.querySelector('.popup p')

// const open = document.querySelectorAll('.card-open')
const overlay = document.querySelector('.popup-overlay')

function popupCreate(arr) {
  const itemCard = document.querySelectorAll('.card-item')
  itemCard.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      img.src = arr[index].url
      titlePopup.textContent = arr[index].title
      descriptionPopup.textContent = arr[index].description

      overlay.classList.add('active')
      popup.classList.add('active')
    })
  })
  const closeBtn = document.querySelector('.close-btn')

  closeBtn &&
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active')
      popup.classList.remove('active')
    })

  document &&
    document.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active')
        popup.classList.remove('active')
      }
    })
}

function choice() {
  const currentUrl = window.location.href
  if (currentUrl.includes('cats')) {
    renderProductCards(catsData, list)
    popupCreate(catsData)
  } else if (currentUrl.includes('dogs')) {
    renderProductCards(dogsData, list)
    popupCreate(dogsData)
  } else if (currentUrl.includes('catalog')) {
    renderProductCards(allPetsArr, list)
    popupCreate(allPetsArr)
  } else return
}

choice()

const radioButtonCats = document.getElementById('cats')
const radioButtonDogs = document.getElementById('dogs')

radioButtonCats &&
  radioButtonCats.addEventListener('click', () => {
    checkCheckbox(radioButtonCats, catsData)
  })
radioButtonDogs &&
  radioButtonDogs.addEventListener('click', () => {
    checkCheckbox(radioButtonDogs, dogsData)
  })

function checkCheckbox(checkbox, arr) {
  const li = document.querySelectorAll('.card-item')
  if (checkbox.checked) {
    li.forEach((item) => {
      item.remove()
    })
    const arrSorted = arr.sort(function (a, b) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
    renderProductCards(arrSorted, list)
    console.log('Checkbox is checked')
  } else {
    li.forEach((item) => {
      item.remove()
    })
    renderProductCards(allPetsArr, list)
    console.log('Checkbox is not checked')
  }
}
