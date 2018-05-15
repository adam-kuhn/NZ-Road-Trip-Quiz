import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Sound from 'react-sound'

import Home from './Home'
import Quiz from './Quiz'
const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
        <Route path='/quiz/:topic' component={Quiz} />
        <Sound url='/sounds/wrong.mp3' playStatus={Sound.status.PLAYING} />

      </div>
    </Router>
  )
}

export default App
