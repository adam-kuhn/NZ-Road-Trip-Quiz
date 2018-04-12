import request from 'superagent'
export const getQuiz = (quizTopic) => {
  return dispatch => {
    request
      .post('/api/v1/quiz')
      .set('Content-Type', 'application/json')
      .send({quizTopic})
      .then(res => {
        console.log(res.body)
      })
  }
}
