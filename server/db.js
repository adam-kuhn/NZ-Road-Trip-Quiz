const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getQuiz (topic, testDb) {
  const db = testDb || connection
  console.log('db', topic)
  return db('questions')
    // .join('answers', 'questions.id', 'answers.questions_id')
    // .where('questions.topic', topic)
    // .select('questions.question', 'questions.style',
    //   'answers.response', 'answers.correct', 'answers.description')
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
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = getQuiz
