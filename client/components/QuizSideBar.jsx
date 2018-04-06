import React from 'react'
import {Link} from 'react-router-dom'

function QuizSideBar () {
  return (
    <ul>
      <li><Link to={'/quiz/Road'}>Road Quiz</Link></li>
      <li><Link to ={'/quiz/Trekking'}>Trekking Quiz</Link></li>
      <li><Link to ={'/quiz/Picture'}>Picture Quiz</Link></li>
      <li><Link to ={'/quiz/Rapid'}>Rapid Fire</Link></li>
    </ul>
  )
}

export default QuizSideBar
