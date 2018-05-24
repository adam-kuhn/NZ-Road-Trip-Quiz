import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class QuizSideBar extends React.Component {
  render () {
    return (
      <ul className='sidebar'>
        <li><Link to={'/quiz/road'}>Road Quiz</Link>&nbsp;{this.props.roadScore}/10</li>
        <li><Link to ={'/quiz/trekking'}>Trekking Quiz</Link>&nbsp;{this.props.trekScore}/10</li>
        <li><Link to ={'/quiz/picture'}>Picture Quiz</Link>&nbsp;{this.props.picScore}/10</li>
        <li><Link to ={'/quiz/fun'}>Fun Facts Quiz</Link>&nbsp;{this.props.funScore}/10</li>
        <li><Link to ={'/quiz/speed'}>Speed Round</Link>&nbsp;{this.props.speedScore}/10 - Test your merit, as questions are pulled from all of the above quizes, and you are only given 10 seconds to answer each question.</li>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    roadScore: state.score.road,
    trekScore: state.score.trekking,
    picScore: state.score.picture,
    funScore: state.score.fun,
    speedScore: state.score.speed
  }
}

export default connect(mapStateToProps)(QuizSideBar)
