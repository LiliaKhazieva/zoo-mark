import { catsData } from '../data/catsData'

const list = document.querySelector('.cards')

/// create cards for pages
const renderProductCard = (product) => {
  const li = document.createElement('li')
  li.classList.add('card-item', 'card-open')

  li.innerHTML = `
        <span>Нажми на меня</span>
            <img src='${product.url}'/>
            <a href='#'>${product.title}</a>`

  return li
}

const appendProductCard = (product, container) => {
  container.append(product)
}

const renderProductCards = (arr, container) => {
  arr.forEach((product) => {
    const card = renderProductCard(product)
    appendProductCard(card, container)
  })
}

renderProductCards(catsData, list)

const popup = document.querySelector('.popup')
const img = document.querySelector('.popup img')
const titlePopup = document.querySelector('.popup h2')
const descriptionPopup = document.querySelector('.popup p')

const open = document.querySelectorAll('.card-open')
const overlay = document.querySelector('.popup-overlay')

const popupCreate = (arr) => {
  open.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      img.src = arr[index].url
      titlePopup.textContent = arr[index].title
      descriptionPopup.textContent = arr[index].description
      e.preventDefault()
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

popupCreate(catsData)
