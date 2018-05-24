import React from 'react'
import {connect} from 'react-redux'

import QuizSideBar from './QuizSideBar'

function Home (props) {
  return (
    <div className='main-container'>
      <h1>NZ Road Trip Quiz!</h1>
      <p>Select a quiz and have some fun finding out about my New Zealand Road Trip</p>
      {props.showSideBar && <QuizSideBar />}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    showSideBar: state.display.showSideBar
  }
}

export default connect(mapStateToProps)(Home)
