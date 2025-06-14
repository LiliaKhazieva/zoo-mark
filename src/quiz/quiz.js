const quizContent = document.querySelector('.quiz-content')
const quizCount = document.querySelector('.quiz-content span')

const questionText = document.querySelector('.quiz-title')

const buttons = document.querySelectorAll('.quiz-btn')
const nextButton = buttons[1]
const listAnswers = document.querySelector('.quiz-answers')
const btns = document.querySelectorAll('.quiz-answer')

const quizData = [
  {
    number: 1,
    question: 'Питомец для меня - ...',
    answers: ['Верный друг', 'Защитник', 'Компаньон для занятий спортом'],
  },
  {
    number: 2,
    question: 'Я бы хотел(а) ... питомца',
    answers: ['Маленького(до 4кг)', 'Среднего (4-10кг)', 'Крупного (11-25кг)'],
  },
  {
    number: 3,
    question: 'Предпочтительный характер питомца ...',
    answers: ['Спокойный', 'Хладнокровный', 'Общительный'],
  },
]

const world = [
  'бенгальская кошка.',
  'корги',
  'сибирская кошка',
  'немецкая овчарка',
]

let randomItem = world[Math.floor(Math.random() * world.length)]

let currentQuestion = 0

function startQuiz() {
  if (quizCount) {
    quizCount.innerText = `Вопрос ${quizData[currentQuestion].number} из ${quizData.length}`
    questionText.innerText = quizData[currentQuestion].question
  }

  btns.forEach((button, index) => {
    button.innerText = quizData[currentQuestion].answers[index]
    for (let button of btns) {
      button.addEventListener('click', function () {
        btns.forEach((i) => i.classList.remove('quiz-answer_active'))

        this.classList.toggle('quiz-answer_active')
      })
    }
  })
}

function checkAnswer() {
  btns.forEach((i) => i.classList.remove('quiz-answer_active'))
  currentQuestion++
  if (currentQuestion < quizData.length) {
    quizCount.innerText = `Вопрос ${quizData[currentQuestion].number} из ${quizData.length}`
    questionText.innerText = quizData[currentQuestion].question

    btns.forEach((button, index) => {
      button.innerText = quizData[currentQuestion].answers[index]
    })
  } else {
    finishQuiz()
  }
}

nextButton && nextButton.addEventListener('click', () => checkAnswer())

function finishQuiz() {
  quizCount.style.display = 'none'
  questionText.innerHTML = `Вам подходит ${randomItem}. <a class="href-color" href="catalog.html">Посмотреть каталог питомцев</a>`
  listAnswers.style.display = 'none'
  nextButton.style.display = 'none'
}

startQuiz()
