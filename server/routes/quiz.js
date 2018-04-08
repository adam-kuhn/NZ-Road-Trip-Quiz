const express = require('express')
const router = express.Router()

// const db = require('../db')

router.post('/', (req, res) => {
  const result = {
    hi: 'hi'
  }
  res.status(200).send(result)
})

module.exports = router
