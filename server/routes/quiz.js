const express = require('express')
const router = express.Router()

// const db = require('../db')

router.get('/', (req, res) => {
  console.log('req', req.body)
  console.log ('paarams', req.params)
  const result = {
    hi: 'hi'
  }
  res.status(200).send(result)
})

module.exports = router
