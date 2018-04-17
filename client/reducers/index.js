import {combineReducers} from 'redux'

import quiz from './quiz'
import display from './display'
import score from './score'

export default combineReducers({
  quiz,
  display,
  score
})
