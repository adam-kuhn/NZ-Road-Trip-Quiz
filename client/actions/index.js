import request from 'superagent'

export const GOT_QUIZ = 'GOT_QUIZ'

export const storeQuiz = (questions) => {
  return {
    type: GOT_QUIZ,
    questions
  }
}

export const getQuiz = (quizTopic) => {
  return dispatch => {
    request
      .post('/api/v1/quiz')
      .set('Content-Type', 'application/json')
      .send({quizTopic})
      .then(res => {
        dispatch((storeQuiz(res.body)))
      })
  }
}
