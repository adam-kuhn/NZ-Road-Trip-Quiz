import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Quiz from './Quiz'
const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
        <Route path='/quiz/:topic' component={Quiz} />
      </div>
    </Router>
  )
}

export default App
