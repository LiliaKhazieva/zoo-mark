import { catsData } from '../data/catsData'

const cards = document.querySelector('.cards')

function createCards(data) {
  data.forEach((card) => {
    const { id, title, url } = card
    const cardItem = `
    <li class='card-item open'>
      <img src="${url}"/>
      <a href='#'>${title}</a>
    </li>`
    cards.insertAdjacentHTML('beforeend', cardItem)
  })

  const open = document.querySelectorAll('.open')
  const overlay = document.querySelector('.popup-overlay')
  const popup = document.querySelector('.popup')
  open.forEach((button) => {
    button.addEventListener('click', (e) => {
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
