import {GOT_QUIZ} from '../actions'

const initialState = {
  showQuestions: false
}

function display (state = initialState, action) {
  switch (action.type) {
    case (GOT_QUIZ): {
      return {
        ...state,
        showQuestions: true
      }
    }
    default: {
      return initialState
    }
  }
}

export default display
