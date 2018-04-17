import {GOT_QUIZ, NEXT_QUESTION, FINISHED, RESET} from '../actions'

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
    case (NEXT_QUESTION): {
      const newNumber = action.questionNum + 1
      return {
        ...state,
        questionNum: newNumber
      }
    }
    case (FINISHED): {
      return {
        ...state,
        questionNum: 0
      }
    }
    case (RESET): {
      return initialState
    }
    default: {
      return initialState
    }
  }
}

export default quiz
