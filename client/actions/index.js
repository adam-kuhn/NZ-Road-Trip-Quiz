import request from 'superagent'

export const GOT_QUIZ = 'GOT_QUIZ'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const FINISHED = 'FINISHED'
export const BACK_HOME = 'BACK_HOME'

export const storeQuiz = (questions) => {
  return {
    type: GOT_QUIZ,
    questions
  }
}

export const getNextQuestion = (questionNum) => {
  return {
    type: NEXT_QUESTION,
    questionNum
  }
}

export const finishedQuiz = () => {
  return {
    type: FINISHED
  }
}

export const backHome = () => {
  return {
    type: BACK_HOME
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
