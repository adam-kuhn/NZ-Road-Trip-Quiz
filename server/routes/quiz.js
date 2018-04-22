const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  if (req.body.quizTopic === 'speed') {
    db.getSpeedQuiz()
      .then(quiz => {
        res.status(200).send(quiz)
      })
  } else {
    db.getQuiz(req.body.quizTopic)
      .then(quiz => {
        res.status(200).send(quiz)
      })
  }
})

module.exports = router
