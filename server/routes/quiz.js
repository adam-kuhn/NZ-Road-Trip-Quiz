const express = require('express')
const router = express.Router()

const db = require('../db')

function randomQuestions (questions, uniqueIds, uniqueQuestions) {
  const ids = [] || uniqueIds
  const randomQuiz = [] || uniqueQuestions
  // tried to just you recursion, but the call stack gets too high
  // therefore have to leave the loop in
  for (let i in questions) {
    let randomId = Math.floor((Math.random() * questions.length))
    ids.push(randomId)
    let checkUnique = ids.filter(id => {
      return id === randomId
    })
    if (checkUnique.length === 1) {
      randomQuiz.push(questions[randomId - 1])
      if (randomQuiz.length === 10) {
        return randomQuiz
      }
    }
  }
  randomQuestions(questions, ids, randomQuiz)
}

router.post('/', (req, res) => {
  if (req.body.quizTopic === 'speed') {
    db.getSpeedQuiz()
      .then(quiz => {
        console.log(quiz)
        const randomized = randomQuestions(quiz)
        res.status(200).send(randomized)
      })
  } else {
    db.getQuiz(req.body.quizTopic)
      .then(quiz => {
        res.status(200).send(quiz)
      })
  }
})

module.exports = router
