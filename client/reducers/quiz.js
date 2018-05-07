import {GOT_QUIZ, NEXT_QUESTION, FINISHED, RESET} from '../actions'

const initialState = {
  questionNum: 0,
  questions: ''
}

function quiz (state = initialState, action) {
  switch (action.type) {
    case (GOT_QUIZ): {
      return {
        ...state,
        questions: action.questions}
    }
    case (NEXT_QUESTION): {
      const newNumber = action.questionNum + 1
      return {
        ...state,
        questionNum: newNumber
      }
    }
    case (RESET): {
      return initialState
    }
    case (FINISHED): {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default quiz
