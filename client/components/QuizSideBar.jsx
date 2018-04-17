import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class QuizSideBar extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to={'/quiz/road'}>Road Quiz</Link>&nbsp;{this.props.roadScore}/10</li>
        <li><Link to ={'/quiz/trekking'}>Trekking Quiz</Link>&nbsp;{this.props.trekScore}/10</li>
        <li><Link to ={'/quiz/picture'}>Picture Quiz</Link>&nbsp;{this.props.picScore}/10</li>
        <li><Link to ={'/quiz/rapid'}>Rapid Fire</Link>&nbsp;{this.props.rapidScore}/10</li>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    roadScore: state.score.road,
    trekScore: state.score.trek,
    picScore: state.score.pic,
    rapidScore: state.score.rapid
  }
}

export default connect(mapStateToProps)(QuizSideBar)
