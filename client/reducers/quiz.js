import {GOT_QUIZ} from '../actions'

const initialState = {
  initial: 'state'
}

function quiz (state = initialState, action) {
  switch (action.type) {
    case (GOT_QUIZ): {
      return action.questions
    }
    default: {
      return initialState
    }
  }
}

export default quiz
