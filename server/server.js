const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const quiz = require('./routes/quiz')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/quiz', quiz)

module.exports = server
