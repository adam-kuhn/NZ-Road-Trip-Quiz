const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getQuiz (topic, testDb) {
  const db = testDb || connection
  return db('questions')
    .where('questions.topic', topic)
    .select('question', 'style', 'id', 'image')
    .then(result => {
      const questions = result.map(question => {
        return {
          id: question.id,
          style: question.style,
          question: question.question,
          image: question.image
        }
      })
      return db('questions')
        .join('answers', 'questions.id', 'answers.questions_id')
        .where('questions.topic', topic)
        .select('answers.id', 'answers.response', 'answers.correct',
          'answers.description', 'answers.questions_id')
        .then(result => {
          const answers = result.map(response => {
            return {
              id: response.id,
              questionId: response.questions_id,
              response: response.response,
              correct: response.correct,
              description: response.description
            }
          })
          for (let i in questions) {
            let answersToQuestion = answers.filter(answer => {
              return questions[i].id === answer.questionId
            })
            for (let j in answersToQuestion) {
              delete answersToQuestion[j].questionId
            }
            questions[i].responses = answersToQuestion
          }
          return questions
        })
    })
    .catch(err => {
      console.error(err)
    })
}

function getSpeedQuiz (testDb) {
  const db = testDb || connection
  return db('questions')
    .select('question', 'style', 'id', 'image')
    .then(result => {
      const questions = result.map(question => {
        return {
          id: question.id,
          style: question.style,
          question: question.question,
          image: question.image
        }
      })
      return db('questions')
        .join('answers', 'questions.id', 'answers.questions_id')
        .select('answers.id', 'answers.response', 'answers.correct',
          'answers.description', 'answers.questions_id')
        .then(result => {
          const answers = result.map(response => {
            return {
              id: response.id,
              questionId: response.questions_id,
              response: response.response,
              correct: response.correct,
              description: response.description
            }
          })
          for (let i in questions) {
            let answersToQuestion = answers.filter(answer => {
              return questions[i].id === answer.questionId
            })
            for (let j in answersToQuestion) {
              delete answersToQuestion[j].questionId
            }
            questions[i].responses = answersToQuestion
          }
          return questions
        })
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  getQuiz,
  getSpeedQuiz
}
