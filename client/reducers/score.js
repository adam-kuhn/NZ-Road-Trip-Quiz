import {FINISHED} from '../actions'

const initialState = {
  road: 0,
  trekking: 0,
  picture: 0,
  fun: 0,
  speed: 0
}

function score (state = initialState, action) {
  switch (action.type) {
    case (FINISHED): {
      return {
        ...state,
        [action.topic]: action.score
      }
    }
    default: {
      return state
    }
  }
}

export default score
