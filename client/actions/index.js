import request from 'superagent'
export const getQuiz = (quizTopic) => {
  return dispatch => {
    request
      .get('/api/v1/quiz')
      .set('Content-Type', 'applicatoin/json')
      .send(quizTopic)
      .then(res => {
        console.log(res)
      })
  }
}
