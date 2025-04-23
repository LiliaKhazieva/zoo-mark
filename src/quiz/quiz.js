const quizContent = document.querySelector('.quiz-content')
const quizCount = document.querySelector('.quiz-content span')

const questionText = document.querySelector('.quiz-title')

const nextButton = document.querySelector('.quiz-btn')
const btns = document.querySelectorAll('.quiz-answer')
const listAnswers = document.querySelector('.quiz-answers')

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

const quizLength = quizData.length
let currentQuestion = 0

function startQuiz() {
  quizCount.innerText = `Вопрос ${quizData[currentQuestion].number} из ${quizData.length}`
  questionText.innerText = quizData[currentQuestion].question

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

function finishQuiz() {
  quizCount.style.display = 'none'
  questionText.innerHTML = `Вам подходит бенгальская кошка. <a class="href-color" href="cats.html">Посмотреть каталог питомцев</a>`
  listAnswers.style.display = 'none'
  nextButton.style.display = 'none'
}

nextButton.addEventListener('click', () => checkAnswer())

startQuiz()
