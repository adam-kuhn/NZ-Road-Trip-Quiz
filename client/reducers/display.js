import {GOT_QUIZ, FINISHED, RESET} from '../actions'

const initialState = {
  showSideBar: true,
  showQuestions: false,
  showCompleted: false
}

function display (state = initialState, action) {
  switch (action.type) {
    case (GOT_QUIZ): {
      return {
        ...state,
        showSideBar: false,
        showQuestions: true
      }
    }
    case (FINISHED): {
      return {
        ...state,
        showQuestions: false,
        showCompleted: true
      }
    }
    case (RESET): {
      return initialState
    }
    default: {
      return {
        ...state,
        initialState
      }
    }
  }
}

export default display
