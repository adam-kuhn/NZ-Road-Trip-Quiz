import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './Home'
import Quiz from './Quiz'
const App = () => {
  return (
    <Router>
      <MuiThemeProvider>
        <div>
          <Route path='/' component={Home} />
          <Route path='/quiz/:topic' component={Quiz} />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
