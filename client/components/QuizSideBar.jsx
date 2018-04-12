import React from 'react'
import {Link} from 'react-router-dom'

class QuizSideBar extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to={'/quiz/road'}>Road Quiz</Link></li>
        <li><Link to ={'/quiz/trekking'}>Trekking Quiz</Link></li>
        <li><Link to ={'/quiz/picture'}>Picture Quiz</Link></li>
        <li><Link to ={'/quiz/rapid'}>Rapid Fire</Link></li>
      </ul>
    )
  }
}

export default QuizSideBar
