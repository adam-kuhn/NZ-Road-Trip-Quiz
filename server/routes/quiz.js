const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  db(req.body.quizTopic)
    .then(quiz => {
      res.status(200).send(quiz)
    })
})

module.exports = router
