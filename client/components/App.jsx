import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {cyan600} from 'material-ui/styles/colors'

import Home from './Home'
import Quiz from './Quiz'
const App = () => {
  const muiTheme = getMuiTheme({
    stepper: {
      iconColor: cyan600
    }
  })
  return (
    <Router>
      <MuiThemeProvider muiTheme={muiTheme} >
        <div className='main-container'>
          <Route path='/' component={Home} />
          <Route path='/quiz/:topic' component={Quiz} />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
