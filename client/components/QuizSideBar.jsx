import React from 'react'
import {Link} from 'react-router-dom'

function QuizSideBar () {
  return (
    <ul>
      <li><Link to={'/road'}>Road Quiz</Link></li>
      <li>Trekking Quiz</li>
      <li>Picture Quiz</li>
      <li>Rapid Fire </li>
    </ul>
  )
}

export default QuizSideBar
