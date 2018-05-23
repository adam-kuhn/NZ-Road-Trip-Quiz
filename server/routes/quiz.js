const express = require('express')
const router = express.Router()

const db = require('../db')

function randomQuestions (questions) {
  const ids = []
  const randomQuiz = []
  // tried to just you recursion, but the call stack gets too high
  // therefore have to leave the loop in
  for (let i in questions) {
    let randomId = Math.floor((Math.random() * questions.length))
    ids.push(randomId)
    let checkUnique = ids.filter(id => {
      return id === randomId
    })
    if (checkUnique.length === 1) {
      randomQuiz.push(questions[randomId])
      if (randomQuiz.length === 10) {
        return randomQuiz
      }
    }
  }
}
function shuffle (array) {
  let currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function randomAnswers (quiz) {
  const shuffledAnswers = []
  for (let i in quiz) {
    let shuffled = shuffle(quiz[i].responses)
    quiz[i].responses = shuffled
    shuffledAnswers.push(quiz[i])
  }
  return shuffledAnswers
}

router.post('/', (req, res) => {
  if (req.body.quizTopic === 'speed') {
    db.getSpeedQuiz()
      .then(quiz => {
        const randomized = randomQuestions(quiz)
        const finalQuiz = randomAnswers(randomized)
        res.status(200).send(finalQuiz)
      })
  } else {
    db.getQuiz(req.body.quizTopic)
      .then(quiz => {
        const finalQuiz = randomAnswers(quiz)
        res.status(200).send(finalQuiz)
      })
  }
})

module.exports = router
