const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getQuiz (topic, testDb) {
  const db = testDb || connection
  console.log('db', topic)
  return db('questions')

    .where('questions.topic', topic)
    .select('question', 'style', 'id')
    .then(result => {
      const questions = result.map(question => {
        return {
          id: question.id,
          style: question.style,
          question: question.question
        }
      })
      console.log(questions)
      return db('questions')
        .join('answers', 'questions.id', 'answers.questions_id')
        .where('questions.topic', topic)
        .select('answers.response', 'answers.correct', 'answers.description', 'answers.questions_id')
        .then(result => {
          console.log(result)
          const answers = result.map(response => {
            return {
              questionId: response.questions_id,
              response: response.response,
              correct: response.correct,
              description: response.description
            }
          })
          console.log(answers)
        })
     
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = getQuiz
