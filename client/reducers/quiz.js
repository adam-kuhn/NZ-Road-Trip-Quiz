import {GOT_QUIZ, NEXT_QUES} from '../actions'

const initialState = {
  quiz: '',
  questionNum: 0
}

function quiz (state = initialState, action) {
  switch (action.type) {
    case (GOT_QUIZ): {
      return {
        ...state,
        questions: action.questions}
    }
    case (NEXT_QUES): {
      return {
        ...state,
        questionNum: action.number + 1
      }
    }
    default: {
      return initialState
    }
  }
}

export default quiz
