import { catsData } from '../data/catsData'

const cards = document.querySelector('.cards')

function createCards(data) {
  data.forEach((card) => {
    const { id, title, url } = card
    const cardItem = `
    <li class='card-item card-open'>
      <img src="${url}"/>
      <a href='#'>${title}</a>
    </li>`
    cards.insertAdjacentHTML('beforeend', cardItem)
  })

  const popup = document.querySelector('.popup')
  const img = document.querySelector('.popup img')
  const titlePopup = document.querySelector('.popup h2')

  const open = document.querySelectorAll('.card-open')
  const overlay = document.querySelector('.popup-overlay')

  open.forEach((button) => {
    button.addEventListener('click', (e) => {
      img.src = data[0].url
      titlePopup.innerText = data[0].title

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

createCards(catsData)
