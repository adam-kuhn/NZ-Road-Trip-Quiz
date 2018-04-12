const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  console.log('req', req.body)
  db(req.body.topic)
    .then(quiz => {
      console.log(quiz)
      res.status(200).send()
    })
})

module.exports = router
