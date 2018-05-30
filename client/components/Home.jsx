import React from 'react'
import {connect} from 'react-redux'

import QuizSideBar from './QuizSideBar'
import ImgCarousel from './ImgCarousel'

function Home (props) {
  return (
    <div className='main-container'>
      <h1>NZ Road Trip Quiz</h1>
      {props.showLanding && <p>Select a quiz and have some fun finding out about my New Zealand Road Trip!</p>}
      {props.showLanding && <QuizSideBar />}
      {props.showLanding && <ImgCarousel />}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    showLanding: state.display.showLanding
  }
}

export default connect(mapStateToProps)(Home)
